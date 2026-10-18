# 我的一週：可接線的全端起始專案

React + TypeScript + Vite + Supabase。網站顯示個人週行事曆，支援註冊／登入／登出、新增、編輯、完成狀態與雲端保存。前端在 Vercel，Auth／Data API／Postgres 在你自己的 Supabase 專案。沒有付費 AI API。

[詳細安裝與複製指令](SETUP.md) · [當堂執行命令](RUNBOOK.md)

完整教材：https://life-development-lab.vercel.app/#/tasks/6

## 1. 啟動前端
安裝 Node.js 24、pnpm 11.25.0 與 Git，解壓縮到新的 my-week 資料夾。不要把教材直接覆蓋到其他作品。

```powershell
cd 你的專案路徑
pnpm install
pnpm test
pnpm dev
```

打開終端機印出的本機 URL。尚未設定 Supabase 時會顯示接線提示，這不是登入失敗。

## 2. 準備真實雲端
1. 在自己的 Supabase 帳號建立「專用教學專案」，使用虛構資料。
2. 在 SQL Editor 閱讀並執行一次 schema.sql。若 events 已存在，停止並檢查專案，不刪除既有表。
3. 表的 GRANT 控制哪些角色能進入；RLS 控制哪些列能讀寫。範本不授予匿名或刪除權限。
4. 將 .env.example 複製為 .env.local，填 Project URL 和新版 publishable key。
5. 停止並重新啟動 pnpm dev。不要使用 service_role／secret key。
6. Authentication 的 Email provider 啟用。URL Configuration：本機 Site URL 與 Redirect URLs 設 http://localhost:5173（如 dev 實際換 port，跟著調整）。

```dotenv
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_REPLACE_ME
```

VITE_* 會被打包到瀏覽器；公開 key 不取代 RLS。實際 .env.local 不可提交。此範本的 client.ts 只接受託管 Supabase URL 與新版 publishable key，進階本機 Supabase 需自行調整驗證。

## 3. 註冊與登入
準備兩個自己控制的測試帳號 A、B。註冊後依設定確認 email，再登入。
Supabase 預設寄信服務有收件者與速率限制，課堂大量註冊前需設定自己的 SMTP 並測試。教師也可在專用專案 Authentication → Users → Add user 建立已確認的測試帳號。
不要用關閉 RLS 解決登入問題，也不要將學生的密碼貼給 AI 或寫進 repo。

## 4. 走完整個操作
- A 登入 → 新增行程 → 編輯名稱 → 標記完成 → 重整，應仍存在。
- 在另一裝置登入同一 A，確認讀到相同資料。
- B 登入，不能看到 A 的行程。登出後回登入畫面。
- 名稱不可空白，結束必須晚於開始；UI 僅輸入同日行程。
- 資料庫用 timestamptz 保存，畫面以裝置的當地時區顯示。

## 5. 真正驗收後端
本機測試只驗證純函式，**不代表已測到你的 Supabase**。

```powershell
pnpm test
pnpm build
```

接線後，將 .env.test.example 複製為 .env.test.local，在本機填兩個「已確認且不同」的專用測試帳號：

```powershell
pnpm test:cloud
```

此腳本真的呼叫 API，使用 publishable key 與使用者登入，檢查自己可讀寫、跨帳號不可讀改、不可偽造／轉交擁有者、資料庫拒絕等時行程與空白名稱、匿名無權限。每次執行保留一筆測試行程作證據，不刪除雲端資料。
若環境未設定、帳號未確認或網路不可用，腳本會失敗；不要宣稱已驗收。SQL Editor 管理員能看到資料不代表 RLS 失效。

## 6. Git 與 AI 協作
教材 Git 模組提供從 git init、建立空白 GitHub repo、push、分支與 PR 的完整步驟。
AGENTS.md 是簡短約定。開啟此資料夾給自己的 Coding Agent，先做「只看未完成」小功能，再看 diff、跑測試及建置。沒有工具讀取指令檔時可把約定貼在任務中。文字約定不等於工具權限隔離。

## 7. Vercel / CI
1. GitHub 建立自己的空白 my-week repo，提交程式與 pnpm-lock.yaml。
2. Vercel 匯入 repo，確認自己的帳號、project、main 分支、Vite、根目錄、dist。
3. 在 Preview 和 Production 設 VITE_SUPABASE_URL 與 VITE_SUPABASE_PUBLISHABLE_KEY。
4. vercel.json 已設 `pnpm test && pnpm build`，測試失敗會停止這次建置。
5. 在 Supabase 設正式 Site URL；Redirect URLs 加入實際正式及預覽 origin。
6. 功能分支 push → PR Preview → 同學驗收 → 合併 main → 確認正式網址。
7. 修改環境變數後需要新部署；第一次匯入可能直接建立正式版。

.github/workflows/ci.yml 是額外的 PR／push 測試，使用固定版本的官方 actions，無須 Vercel token。**它本身不會阻擋 Vercel 發布**。若將測試從 build 移到獨立 CI，必須另設 Vercel Deployment Checks；GitHub merge 保護也需另設。本教材保留 build 內的測試作直接門檻。雲端雙帳號測試保留本機執行，沒有把密碼放進 CI。

## 8. 交付與限制
展示正式 URL、GitHub repo、PR、一次 AI 修正、測試結果與已知限制。
基礎範本沒有分享權限、提醒排程、密碼重設頁、分頁或刪除。大量行程／正式對外服務需增加分頁、帳號復原、寄信與營運措施。Auth 和 RLS 必須在你自己的環境實際驗收。
需要刪除本機檔案時先移至垃圾桶；無法移入就停止，不使用遞迴強制刪除。

## 官方參考
- React 接線：https://supabase.com/docs/guides/getting-started/quickstarts/reactjs
- Auth：https://supabase.com/docs/guides/auth/passwords
- RLS：https://supabase.com/docs/guides/database/postgres/row-level-security
- Vite 部署：https://vercel.com/docs/frameworks/frontend/vite
- Deployment Checks：https://vercel.com/docs/deployment-checks
- AGENTS.md：https://learn.chatgpt.com/docs/agent-configuration/agents-md

原創教學範本採 MIT 授權，第三方套件依各自授權。文件核對日期：2026-10-18。
