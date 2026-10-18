# Task 2：給 AI 一個有邊界的畫面任務

[線上互動版](https://life-development-lab.vercel.app/#/tasks/2) · [任務目錄](README.md)

## 任務目標

修改本機行事曆的畫面，讀懂元件、狀態與 AI 產出的差異。

- 操作時間：約 45 分鐘
- 開始前：完成 Task 1；使用自己的 AI 工具或兩人合作手動實作。

## 先理解：Harness 讓修改可檢查

除了 Prompt，還要提供檔案脈絡、工具權限、驗收方式與回饋紀錄。AGENTS.md 是專案約定；它不是作業系統層級的權限隔離。

## 步驟 1：先認識檔案與資料

閱讀 src/local.tsx。找出 rows 狀態、表單、卡片 map 與 localStorage 儲存。與 src/main.tsx 對照，後者才會連 Supabase。

**預期結果**

能指出一筆行程如何從表單進入 state，再變成畫面。

<details>
<summary>卡住了？查看排錯提示</summary>

用編輯器搜尋 setRows、map 和 localStorage；不必逐行翻譯全部程式。

</details>

## 步驟 2：要求一次小修改

開啟 AGENTS.md，確認自己的 Agent 工作目錄與權限。將下面任務交給 Agent；沒有帳號可由同學扮演實作者，並在紀錄中註明。

```text
任務：把 src/local.tsx 的主標題改成「我的學習週」。
脈絡：React + TypeScript + Vite，沿用目前行事曆。
限制：不改資料格式、時間驗證或雲端程式，不增加依賴。
驗收：桌面與手機寬度可讀；新增、編輯、完成仍可操作。
回報：修改檔案與理由、pnpm test / pnpm build 結果、未驗證項目。
```

**預期結果**

這輪只修改畫面；不讀取 .env 的值、不更動 RLS 或既有驗證。

<details>
<summary>卡住了？查看排錯提示</summary>

Agent 想一次重建整個專案時，縮小任務並請它先說明將改哪些檔案。

</details>

## 步驟 3：自己讀取修改差異

Clone 路線執行 git diff；ZIP 路線用編輯器的檔案比較。重新打開 /local.html 並縮窄視窗，操作新增與完成。將 Prompt 與差異摘要記在 worksheets/ai-log.md。

```text
git diff
pnpm test
pnpm build
```

**預期結果**

你能用自己的話指出哪段文字被改，哪些功能經過操作驗證。

<details>
<summary>卡住了？查看排錯提示</summary>

只看到 AI 回覆「完成」還不能算驗收；親自開頁面操作。

</details>

## 驗收與提交

- [ ] 已讀取 AI 或同學產生的程式差異
- [ ] 已操作手機寬度與既有新增／完成功能

在 [操作證據](../worksheets/evidence.md) 記下：記下 Prompt、實際改動、你親自驗證的結果，以及仍未測的部分。

此清單是自評，不代表教師網站已連線驗證你的專案。

## 觀念檢核

Agent 顯示「已完成」後，下一步應該做什麼？

1. 讀差異並執行事先定義的驗收
2. 直接認定所有雲端功能都正常
3. 刪除失敗測試

<details>
<summary>作答後查看解析</summary>

答案：1。文字回覆是說明，程式差異、測試與實際操作才是行為證據。

</details>

## 進階挑戰

請 Agent 加上「只看未完成」開關，寫出開啟、關閉與空結果三個驗收。

---

[← Task 1](task1.md) · [Task 3 →](task3.md)


## 可直接複製的當堂指令

[Windows · PowerShell](../RUNBOOK.md#windows-task2)


## 可直接複製的當堂指令

[macOS · Terminal](../RUNBOOK.md#mac-task2)


## 可直接複製的當堂指令

[Ubuntu／WSL · bash](../RUNBOOK.md#linux-task2)
