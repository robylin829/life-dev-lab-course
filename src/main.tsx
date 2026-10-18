import { createRoot } from 'react-dom/client';
import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from './client';
import { validateEvent } from './validation';
import './style.css';

type EventRow={id:string;user_id:string;title:string;starts_at:string;ends_at:string;completed:boolean};
const localDate=(d:Date)=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const localTime=(iso:string)=>new Date(iso).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
const emptyForm=()=>({title:'',date:localDate(new Date()),start:'10:00',end:'11:00'});
function App(){
  const [session,setSession]=useState<Session|null>(null);
  const [ready,setReady]=useState(!supabase);
  const [email,setEmail]=useState('');const [password,setPassword]=useState('');
  const [rows,setRows]=useState<EventRow[]>([]);const [message,setMessage]=useState('');
  const [busy,setBusy]=useState(false);const [loading,setLoading]=useState(false);
  const [form,setForm]=useState(emptyForm);const [editing,setEditing]=useState<string|null>(null);
  const [week,setWeek]=useState(localDate(new Date()));
  const currentUser=useRef<string|null>(null);const requestId=useRef(0);
  useEffect(()=>{
    if(!supabase) return;
    let active=true;
    const {data:{subscription}}=supabase.auth.onAuthStateChange((_event,next)=>{
      if(!active)return;
      const changed=currentUser.current!==(next?.user.id||null);
      currentUser.current=next?.user.id||null;setSession(next);setReady(true);
      if(changed){setRows([]);setEditing(null);setForm(emptyForm());}
    });
    supabase.auth.getSession().then(({data,error})=>{if(active){if(error)setMessage(error.message);currentUser.current=data.session?.user.id||null;setSession(data.session);setReady(true);}});
    return()=>{active=false;subscription.unsubscribe();};
  },[]);
  async function refresh(userId:string){
    if(!supabase)return;
    const ticket=++requestId.current;setLoading(true);
    const {data,error}=await supabase.from('events').select('*').eq('user_id',userId).order('starts_at');
    if(currentUser.current!==userId||ticket!==requestId.current)return;
    setLoading(false);
    if(error)setMessage(`讀取失敗：${error.message}`);else setRows((data||[]) as EventRow[]);
  }
  const uid=session?.user.id;
  useEffect(()=>{if(uid)void refresh(uid);else {++requestId.current;setLoading(false);}},[uid]);
  async function authenticate(e:FormEvent<HTMLFormElement>){
    e.preventDefault();if(!supabase)return;
    const mode=(e.nativeEvent as SubmitEvent).submitter?.getAttribute('value');
    setBusy(true);setMessage('');
    try{
      const {error}=mode==='signup'?await supabase.auth.signUp({email,password,options:{emailRedirectTo:window.location.origin}}):await supabase.auth.signInWithPassword({email,password});
      setMessage(error?error.message:mode==='signup'?'已送出註冊請求。如需驗證，請到信箱確認後登入。':'登入成功。');
      setPassword('');
    }catch{setMessage('連線失敗，請檢查網路後重試。');}finally{setBusy(false);}
  }
  async function save(e:FormEvent){
    e.preventDefault();if(!supabase||!uid)return;
    const validation=validateEvent(form);if(validation){setMessage(validation);return;}
    setBusy(true);const owner=uid;
    const values={title:form.title.trim(),starts_at:new Date(`${form.date}T${form.start}`).toISOString(),ends_at:new Date(`${form.date}T${form.end}`).toISOString()};
    try{
      const response=editing?await supabase.from('events').update(values).eq('id',editing).select().single():await supabase.from('events').insert({...values,user_id:owner}).select().single();
      if(currentUser.current!==owner)return;
      if(response.error){setMessage(`儲存失敗：${response.error.message}`);return;}
      setMessage('已保存至雲端。重新整理或換裝置登入可驗證。');setWeek(form.date);setForm(emptyForm());setEditing(null);await refresh(owner);
    }catch{setMessage('儲存未確認，請重新讀取檢查後再試。');}finally{setBusy(false);}
  }
  async function toggle(row:EventRow){
    if(!supabase||!uid)return;const owner=uid;setBusy(true);
    try{const {error}=await supabase.from('events').update({completed:!row.completed}).eq('id',row.id).select().single();
      if(currentUser.current!==owner)return;
      if(error)setMessage(`更新失敗：${error.message}`);else {setMessage('完成狀態已保存。');await refresh(owner);}
    }catch{setMessage('更新未確認，請重新讀取檢查。');}finally{setBusy(false);}
  }
  function edit(row:EventRow){setEditing(row.id);setForm({title:row.title,date:localDate(new Date(row.starts_at)),start:localTime(row.starts_at),end:localTime(row.ends_at)});document.getElementById('event-name')?.focus();}
  const base=new Date(`${week}T12:00`);base.setDate(base.getDate()-(base.getDay()+6)%7);
  const days=Array.from({length:7},(_,i)=>{const d=new Date(base);d.setDate(d.getDate()+i);return localDate(d);});
  return <main><header><span>FINAL PROJECT / 實際 Supabase 接線</span><a href="/local.html">Task 1–5：先開啟本機練習 →</a><h1>我的一週</h1><p>前端 React → Supabase Auth／Data API → Postgres + RLS</p></header>
    {!supabase?<section><h2>先接上你的教學專案</h2><p>在新的 Supabase 專案執行 schema.sql。複製 .env.example 為 .env.local，填入 Project URL 與 publishable key，然後重新啟動 pnpm dev。</p><p>不要填 service_role 或 secret key；完整操作見 README.md。</p></section>:!ready?<p role="status">正在確認登入狀態…</p>:!session?<section><h2>登入自己的行事曆</h2><form onSubmit={authenticate}><label>Email<input type="email" required autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)}/></label><label>密碼（至少 8 字）<input type="password" minLength={8} required autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)}/></label><div className="actions"><button disabled={busy} value="login">登入</button><button disabled={busy} value="signup">註冊</button></div></form><p>教學寄信服務有收件者與額度限制；見 README 的帳號準備方式。</p></section>:<><div className="actions"><span>{session.user.email}</span><button disabled={busy} onClick={()=>void supabase!.auth.signOut().then(({error})=>{if(error)setMessage(error.message);else setMessage('已登出。');})}>登出</button><button disabled={loading||busy} onClick={()=>void refresh(session.user.id)}>重新讀取</button></div>
    <section><h2>{editing?'編輯行程':'新增行程'}</h2><form onSubmit={save}><label>名稱<input id="event-name" maxLength={80} value={form.title} onChange={e=>setForm({...form,title:e.target.value})}/></label><div className="fields"><label>日期<input type="date" required value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></label><label>開始<input type="time" required value={form.start} onChange={e=>setForm({...form,start:e.target.value})}/></label><label>結束<input type="time" required value={form.end} onChange={e=>setForm({...form,end:e.target.value})}/></label></div><div className="actions"><button disabled={busy}>保存至雲端</button>{editing&&<button type="button" onClick={()=>{setEditing(null);setForm(emptyForm());}}>取消編輯</button>}</div></form></section>
    <section><div className="actions"><h2>本週安排</h2><label>選擇這一週的任一天<input type="date" required value={week} onChange={e=>{if(e.target.value)setWeek(e.target.value);}}/></label></div><p>時間以目前裝置時區顯示。{loading?'正在讀取…':`${rows.length} 筆雲端行程`}</p><div className="week">{days.map((day,i)=><article key={day}><h3>週{'一二三四五六日'[i]}<small>{day.slice(5)}</small></h3>{rows.filter(row=>localDate(new Date(row.starts_at))===day).map(row=><div className="event" key={row.id}><label><input type="checkbox" disabled={busy} checked={row.completed} onChange={()=>void toggle(row)}/><span className={row.completed?'done':''}>{row.title}</span></label><p>{localTime(row.starts_at)}–{localTime(row.ends_at)}</p><button disabled={busy} onClick={()=>edit(row)}>編輯</button></div>)}</article>)}</div></section></>}
    <p role="status" className="message">{message}</p><footer>教材起始專案 · 尚未設定環境時不會連到任何資料庫。此作品不含線上 AI API。</footer></main>;
}
createRoot(document.getElementById('root')!).render(<App/>);
