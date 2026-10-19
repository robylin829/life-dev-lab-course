import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const task=process.argv[2];
if(!/^[1-8]$/.test(task||'')||process.argv.length!==3){console.error('用法：pnpm handin 1（堂次 1–8）');process.exit(1);}
const root=fileURLToPath(new URL('../',import.meta.url));
const folder=path.join(root,'submissions'),file=path.join(folder,'task-'+task+'.md');
fs.mkdirSync(folder,{recursive:true});
if(fs.existsSync(file)){console.log('保留已有作業，不覆寫：submissions/task-'+task+'.md');process.exit(0);}
let revision='ZIP 或尚無提交，請自行補教材來源';
try{if(fs.existsSync(path.join(root,'.git')))revision=execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8',stdio:['ignore','pipe','ignore']}).trim();}catch{}
const template=fs.readFileSync(path.join(root,'assignment-templates','task-'+task+'.md'),'utf8');
const info='\n\n## 建立時的環境（不是測試結果）\n- Node：'+process.version+'\n- 系統：'+process.platform+'\n- Git revision：'+revision+'\n- 請另填自己的測試日期與對應版本；未測項目保留待測。\n';
fs.writeFileSync(file,template+info,{encoding:'utf8',flag:'wx'});
console.log('已建立 submissions/task-'+task+'.md');
console.log('用 VS Code 開啟並填寫：code --reuse-window submissions/task-'+task+'.md');
console.log('填寫實際操作與證據後，交到老師指定平台。本命令不測試、不上傳、不讀取 .env。');
