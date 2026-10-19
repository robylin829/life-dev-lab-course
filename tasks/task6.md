# Task 6：登入、雲端行程與資料隔離

[線上互動版](https://life-development-lab.vercel.app/#/tasks/6) · [任務目錄](README.md)

## 任務目標

連接自己的 Supabase，新增與更新雲端行程，驗證 A、B 帳號資料隔離。

- 操作時間：約 45 分鐘
- 開始前：完成 Task 5。教師課前建立並測試專用 Supabase；學生準備兩個可控制的測試帳號。

## 先理解：前端 → API → 資料庫

React 負責表單與畫面，supabase-js 呼叫 Auth 與 Data API；Postgres 保存資料。前端驗證提供即時回饋，資料庫約束再檢查資料。

## 步驟 1：建立專用練習專案

開啟 Supabase Dashboard → New project，建立自己的教學專案。等待資料庫就緒，再進入 SQL Editor。此課使用虛構行程，請勿連到既有正式資料庫。

**預期結果**

Dashboard 顯示專案可用，能找到 SQL Editor、Authentication 與 API 設定。

<details>
<summary>卡住了？查看排錯提示</summary>

若建立受帳號額度限制，先用下方 RLS 演練與教師示範；不要共用教師的管理金鑰。

</details>

## 步驟 2：建立資料表、約束與權限

打開下載專案的 schema.sql，逐段閱讀後在新專案 SQL Editor 執行一次。它建立 events、時間約束、RLS，以及 authenticated 的讀／新增／更新權限；anon 沒有表存取權。

```text
-- 完整可執行 SQL 在 schema.sql
-- 下列是更新政策的重點
create policy "update own events"
on public.events for update to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);
```

**預期結果**

events 有 user_id、title、starts_at、ends_at、completed；RLS 開啟且有 3 條 policy。

<details>
<summary>卡住了？查看排錯提示</summary>

若 events 已存在就停止，檢查是否選錯專案；不要刪掉現有表。permission denied 請對照 grants 和 Data API 暴露設定，不以關閉 RLS 解決。

</details>

## 步驟 3：用公開設定接上前端

在專案 Connect 或 API 設定找到 Project URL 與 publishable key。複製 .env.example 為 .env.local，只在本機編輯真實值。停止 dev server 後重新啟動。

```text
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_REPLACE_ME

# 儲存 .env.local 後
pnpm dev
```

**預期結果**

原本的接線提示變成登入表單。src/client.ts 使用 createClient(url, key)。

<details>
<summary>卡住了？查看排錯提示</summary>

仍顯示提示時檢查變數拼字與是否重新啟動；此教材要求新版 publishable key。不要改填 service_role 或 secret key。

</details>

## 步驟 4：準備兩個帳號，驗證登入

Authentication 的 Email provider 保持啟用。URL Configuration 的 Site URL 設本機網址，Redirect URLs 加 http://localhost:5173。用兩個自己控制的測試信箱註冊、確認信件並登入。課堂可由教師在專用專案 Authentication → Users → Add user 建立已確認的測試帳號。

**預期結果**

登入後顯示自己的 email；登出會回到登入表單，其他帳號不能看到上一位的畫面資料。

<details>
<summary>卡住了？查看排錯提示</summary>

預設寄信服務有收件者與速率限制；整班自助註冊前先設定自己的 SMTP 並測試，或使用預先建立的測試帳號。Invalid login credentials 與 Email not confirmed 要分別檢查。

</details>

## 步驟 5：真的寫入與讀回雲端

帳號 A 新增「小組討論」10:00–11:00，編輯名稱、標記完成。重新整理，再用另一個瀏覽器登入同一個 A 驗證同步。到 Table Editor 只用來觀察資料，不能以管理員畫面代替 RLS 驗收。

```text
// 對照 src/main.tsx，這是新增的資料流
await supabase.from('events').insert({
  user_id: session.user.id, title: '小組討論',
  starts_at: '2026-10-19T02:00:00Z',
  ends_at: '2026-10-19T03:00:00Z'
}).select().single();
```

**預期結果**

資料庫與畫面一致；UTC 02:00 在台灣裝置顯示 10:00。兩次時間戳需符合 end > start。

<details>
<summary>卡住了？查看排錯提示</summary>

UPDATE 回傳 0 列可能是 SELECT 或 UPDATE policy 過濾；不代表修改成功。範本用 single() 協助偵測。時間依裝置時區顯示。

</details>

## 步驟 6：用實際 API 驗證資料隔離

先用另一個瀏覽器登入 B，應看不到 A 的行程。接著複製 .env.test.example 為 .env.test.local，填入自己兩個已確認測試帳號。執行隨附的真實整合測試；帳密只放本機，測試會保留一筆驗收行程。

```text
pnpm test:cloud
```

**預期結果**

腳本以 A、B 和未登入身分呼叫 API：自己可寫、跨帳號不可讀改、不能偽造 owner、不能轉交 owner、不能寫等時行程、匿名無權限。全部成功才顯示 PASS。

<details>
<summary>卡住了？查看排錯提示</summary>

本站 RLS 演練通過並不代表你的雲端設定正確；真實測試失敗時保留輸出（遮掉帳密），逐項對照 schema.sql。

</details>

## 驗收與提交

- [ ] 帳號 A 可新增、編輯、完成並在另一瀏覽器讀回
- [ ] 已用 pnpm test:cloud 驗證 A／B 隔離與約束

在 [操作證據](../worksheets/evidence.md) 記下：記錄真實雲端測試結果、日期、失敗與修正。不要貼帳密或 .env 值。

此清單是自評，不代表教師網站已連線驗證你的專案。

## 觀念檢核

只在前端用 user_id 篩選，能保證別人不能讀你的資料嗎？

1. 可以，隱藏就安全
2. 不行，還需要後端 grants 與 RLS
3. 登入表單漂亮就可以

<details>
<summary>作答後查看解析</summary>

答案：2。前端可被繞過。資料庫必須檢查呼叫者身分與列存取政策。

</details>

## 進階挑戰

解釋 USING 與 WITH CHECK 如何防止把自己的行程 owner 改成別人。

---

[← Task 5](task5.md) · [Task 7 →](task7.md)


## 可直接複製的當堂指令

[Windows · PowerShell](../RUNBOOK.md#windows-task6)


## 可直接複製的當堂指令

[macOS · Terminal](../RUNBOOK.md#mac-task6)


## 可直接複製的當堂指令

[Ubuntu／WSL · bash](../RUNBOOK.md#linux-task6)


## 逐格操作與作業

[開檔、修改、驗收、繳交：Task 6](../HOMEWORK.md#task-6) · [空白作業單](../assignment-templates/task-6.md)
