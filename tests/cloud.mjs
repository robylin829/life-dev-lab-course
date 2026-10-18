// Real integration tests. Use only your dedicated teaching project and test accounts.
// Creates one event per run and deliberately keeps it as verification evidence.
import assert from 'node:assert/strict';import {createClient} from '@supabase/supabase-js';
const env=process.env;
for(const name of ['VITE_SUPABASE_URL','VITE_SUPABASE_PUBLISHABLE_KEY','TEST_A_EMAIL','TEST_A_PASSWORD','TEST_B_EMAIL','TEST_B_PASSWORD'])assert.ok(env[name],`Missing ${name}; see .env.test.example`);
assert.ok(env.VITE_SUPABASE_PUBLISHABLE_KEY.startsWith('sb_publishable_'),'Use a publishable key, never a privileged key.');
const client=()=>createClient(env.VITE_SUPABASE_URL,env.VITE_SUPABASE_PUBLISHABLE_KEY,{auth:{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false}});
const a=client(),b=client(),anon=client();
async function login(c,prefix){const {data,error}=await c.auth.signInWithPassword({email:env[`TEST_${prefix}_EMAIL`],password:env[`TEST_${prefix}_PASSWORD`]});assert.equal(error,null,`Account ${prefix} login failed; confirm email/password locally.`);return data.user.id;}
const aid=await login(a,'A'),bid=await login(b,'B');assert.notEqual(aid,bid,'Use two different accounts');
const values={user_id:aid,title:'RLS 驗收 '+new Date().toISOString(),starts_at:'2026-10-19T02:00:00Z',ends_at:'2026-10-19T03:00:00Z'};
const created=await a.from('events').insert(values).select().single();assert.equal(created.error,null,'A insert failed: check schema and RLS');const id=created.data.id;
const own=await a.from('events').update({completed:true}).eq('id',id).select().single();assert.equal(own.error,null);assert.equal(own.data.completed,true);
const hidden=await b.from('events').select('id').eq('id',id);assert.equal(hidden.error,null);assert.deepEqual(hidden.data,[],'B must not see A rows');
const deniedUpdate=await b.from('events').update({title:'unauthorized'}).eq('id',id).select();assert.equal(deniedUpdate.error,null);assert.deepEqual(deniedUpdate.data,[],'USING must filter B update');
const forged=await b.from('events').insert(values);assert.ok(forged.error,'B must not insert for A');
const transfer=await a.from('events').update({user_id:bid}).eq('id',id).select();assert.ok(transfer.error,'WITH CHECK must reject transfer');
const bad=await a.from('events').insert({...values,ends_at:values.starts_at});assert.ok(bad.error,'Database must reject equal timestamps');
const blank=await a.from('events').insert({...values,title:'   '});assert.ok(blank.error,'Database must reject blank names');
const unchanged=await a.from('events').select().eq('id',id).single();assert.equal(unchanged.error,null);assert.equal(unchanged.data.title,values.title);assert.equal(unchanged.data.user_id,aid);
const anonymous=await anon.from('events').select('id');assert.ok(anonymous.error,'Schema revokes anonymous access');
await a.auth.signOut();await b.auth.signOut();console.log('PASS: own create/update, cross-account read/update/insert, owner transfer, DB constraint and anonymous access. Test event retained.');
