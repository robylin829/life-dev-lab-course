# Task 4：重新整理後，資料去了哪裡？

[線上互動版](https://life-development-lab.vercel.app/#/tasks/4) · [任務目錄](README.md)

## 任務目標

用重現步驟定位儲存問題，區分瀏覽器本機資料與雲端資料。

- 操作時間：約 45 分鐘
- 開始前：完成 Task 3；本機有一筆自己新增的虛構行程。

## 先理解：localStorage 只屬於目前來源

資料跟著瀏覽器設定檔與 origin（協定、主機、埠號）。不同瀏覽器或不同埠號不會自動同步；持久化也可能因瀏覽器設定失敗。

## 步驟 1：留下三種資料變更

新增「週會」10:00–11:00，編輯成「讀書會」，再標記完成。重新整理 /local.html。

**預期結果**

名稱與完成狀態仍保留；畫面提示本機儲存狀態。

<details>
<summary>卡住了？查看排錯提示</summary>

若未保留，先看儲存失敗提示與瀏覽器設定，不要直接重裝依賴。

</details>

## 步驟 2：檢查存進瀏覽器的內容

開瀏覽器開發者工具 Application（或 Storage）→ Local Storage → 目前 origin，查看 life-lab.student.events.v1。對照 src/local.tsx 的 JSON.stringify 與 JSON.parse。只讀取本練習的虛構資料。

**預期結果**

key 對應 JSON 陣列，包含自己的行程與 completed 值。

<details>
<summary>卡住了？查看排錯提示</summary>

找不到時確認網址與埠號一致；不要把本機資料誤認為 Supabase 資料。

</details>

## 步驟 3：用第二個瀏覽器做對照

在另一個瀏覽器開相同本機網址。比較資料後，把差異寫成可重現的 bug report；這次「沒有同步」是架構限制，不是測試失敗。

```text
環境：瀏覽器／網址／版本
步驟：新增 → 改名 → 完成 → 重整
預期：＿＿
實際：＿＿
重現次數：＿＿
我檢查過：＿＿
```

**預期結果**

能說明重整保留與跨裝置同步是不同需求。Task 6 才會接上雲端。

<details>
<summary>卡住了？查看排錯提示</summary>

沒有第二個瀏覽器時用新的私人視窗；它可能停用或隔離持久化。

</details>

## 步驟 4：將問題回饋給 AI 或同學

把上一步紀錄交給實作者，要求先定位儲存或顯示問題，再提出最小修正。以相同步驟重新驗收。若本來正常，解釋為何不需要改程式。

**預期結果**

有重現證據時才修改；正常情況留下查核紀錄。

<details>
<summary>卡住了？查看排錯提示</summary>

不要分享整個瀏覽器儲存內容或真實帳密；此課只需要虛構行程。

</details>

## 驗收與提交

- [ ] 新增、改名、完成與重整皆實際操作
- [ ] 能解釋不同瀏覽器沒有相同行程的原因

在 [操作證據](../worksheets/evidence.md) 記下：留下兩個瀏覽器的觀察結果，並寫一份可重現的檢查紀錄。

此清單是自評，不代表教師網站已連線驗證你的專案。

## 觀念檢核

本機儲存成功，能保證另一台電腦看見同一筆資料嗎？

1. 可以，因為網頁相同
2. 不行，需要雲端同步與身分識別
3. 只要重新整理就會同步

<details>
<summary>作答後查看解析</summary>

答案：2。localStorage 不會跨裝置自動同步；同一帳號的雲端讀寫在 Task 6 實作。

</details>

## 進階挑戰

設計儲存失敗時的提示與備援，說明哪些資料只能保留到目前分頁關閉。

---

[← Task 3](task3.md) · [Task 5 →](task5.md)


## 可直接複製的當堂指令

[Windows · PowerShell](../RUNBOOK.md#windows-task4)


## 可直接複製的當堂指令

[macOS · Terminal](../RUNBOOK.md#mac-task4)


## 可直接複製的當堂指令

[Ubuntu／WSL · bash](../RUNBOOK.md#linux-task4)
