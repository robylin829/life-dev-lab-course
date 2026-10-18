# Task 0：取得教材，啟動你的實驗室

[線上互動版](https://life-development-lab.vercel.app/#/tasks/0) · [任務目錄](README.md)

## 任務目標

從 GitHub 取得自己的教材副本，開啟不需要雲端帳號的本機練習頁。

- 操作時間：約 25 分鐘
- 開始前：準備一台可安裝開發工具的電腦；GitHub 帳號可在課前建立。

## 先理解：一個儲存庫，兩條操作路線

local.html 是 Task 1–5 的本機行事曆；首頁是 Task 6 起的 Supabase 全端作品。兩者分開儲存資料，本機紀錄不會自動搬到雲端。

## 步驟 1：確認自己使用的下載路線

依上方指令選 ZIP 或 Fork + Clone。ZIP 不含 .git 歷史，Task 5 再建立自己的空 repo；Fork + Clone 的 origin 已指向自己的副本。兩條路線都能先完成本機練習。

**預期結果**

能指出目前專案在電腦的哪個資料夾，並知道它來自哪一條路線。

<details>
<summary>卡住了？查看排錯提示</summary>

檢查 package.json 是否存在；Fork 路線再用 git remote -v 核對自己的帳號。

</details>

## 步驟 2：找到任務、程式與學習單

用編輯器的「開啟資料夾」選取剛才包含 package.json 的專案根目錄。閱讀 SETUP.md、tasks/README.md、src/local.tsx 與 worksheets/evidence.md。RUNBOOK.md 提供每一堂的可複製命令。

**預期結果**

能指出安裝指引、當堂任務、練習程式、測試與成果記錄。

<details>
<summary>卡住了？查看排錯提示</summary>

若只看到 life-dev-lab-course-main 這個資料夾，代表還在外層，請再進入一層。

</details>

## 步驟 3：知道三個命令各在驗證什麼

pnpm test 檢查正式驗證，初始應 5/5；pnpm task:check 檢查 Task 3 待修練習，初始刻意 3/4；pnpm dev:local 會持續運作並開啟本機頁面。此時先理解這個差別，到 Task 3 再修正。

```text
pnpm task:check
```

**預期結果**

看到時間相等的案例失敗，其他三個通過。這個預設失敗不需要重裝套件。

<details>
<summary>卡住了？查看排錯提示</summary>

正式測試與練習測試的檔案不同；對照 README 的命令表，不把其中一項的結果當成另一項。

</details>

## 驗收與提交

- [ ] 我已從 GitHub 取得教材，能辨認自己的副本
- [ ] pnpm test 通過，且 /local.html 可以操作

在 [操作證據](../worksheets/evidence.md) 記下：記錄自己的 repo URL、工具版本與本機網址（例如 http://localhost:5173/local.html）。

此清單是自評，不代表教師網站已連線驗證你的專案。

## 觀念檢核

從自己的 Fork 使用 git clone 取得專案後，origin 通常指向哪裡？

1. 老師的電腦
2. 自己的 GitHub 副本
3. Supabase 資料庫

<details>
<summary>作答後查看解析</summary>

答案：2。clone 會把來源 URL 設為 origin。後續先用 git remote -v 檢查，不重複 git remote add origin。

</details>

## 進階挑戰

比較 ZIP 與 Clone：哪一種保留 Git 歷史？用 git status 驗證。

---

[回目錄](README.md) · [Task 1 →](task1.md)


## 詳細安裝與啟動

[Windows PowerShell](../SETUP.md#windows) · [macOS Terminal](../SETUP.md#mac) · [Ubuntu／WSL](../SETUP.md#linux)

新指令：pnpm dev:local 會自動開本機練習；pnpm dev:cloud 會開雲端作品。下載、解壓、安裝與排錯都在 SETUP.md。
