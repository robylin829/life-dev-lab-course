# Task 0：取得教材，啟動你的實驗室

[線上互動版](https://life-development-lab.vercel.app/#/tasks/0) · [任務目錄](README.md)

## 任務目標

從 GitHub 取得自己的教材副本，開啟不需要雲端帳號的本機練習頁。

- 操作時間：約 25 分鐘
- 開始前：準備一台可安裝開發工具的電腦；GitHub 帳號可在課前建立。

## 先理解：一個儲存庫，兩條操作路線

local.html 是 Task 1–5 的本機行事曆；首頁是 Task 6 起的 Supabase 全端作品。兩者分開儲存資料，本機紀錄不會自動搬到雲端。

## 步驟 1：準備工具並檢查版本

安裝 Node.js 24、pnpm、Git 與編輯器。以下命令在 PowerShell、Terminal 或編輯器終端機執行；不是貼到瀏覽器網址列。

```text
node --version
pnpm --version
git --version
```

**預期結果**

三個版本號都能顯示。Node.js 為 24.x；教材使用 pnpm 11.25.0。

<details>
<summary>卡住了？查看排錯提示</summary>

指令找不到時依官方安裝頁安裝，再重開終端機。

</details>

## 步驟 2：在 GitHub 建立自己的副本

點本頁「GitHub 教材」。登入後按 Fork，Owner 選自己的帳號，保留名稱 life-dev-lab-course，再 Create fork。這份副本供後續 push、PR 與 Vercel 匯入。

**預期結果**

儲存庫網址的擁有者變成你自己的帳號，檔案中有 package.json、tasks 與 exercises。

<details>
<summary>卡住了？查看排錯提示</summary>

無法 Fork 時先使用 Download ZIP 路線；Task 5 再補上自己的 repo，不向老師的 main 推送。

</details>

## 步驟 3：下載到桌面並安裝依賴

在自己 fork 的 Code → Local → HTTPS 複製 clone 網址。於桌面開終端機，將 YOUR-USERNAME 換成自己的 GitHub 帳號再執行。未使用 Git 時點本頁「下載 GitHub ZIP」，解壓並進入包含 package.json 的資料夾，再從 pnpm install 開始。

```text
git clone https://github.com/YOUR-USERNAME/life-dev-lab-course.git
cd life-dev-lab-course
pnpm install
pnpm test
```

**預期結果**

安裝完成，pnpm test 顯示 5 個正式驗證測試通過。ZIP 路線沒有 .git 歷史；Clone 路線已有 origin。

<details>
<summary>卡住了？查看排錯提示</summary>

不要同時再建立 Vite 專案。安裝失敗先檢查網路、Node 版本與工作目錄。

</details>

## 步驟 4：啟動本機行事曆

執行 pnpm dev，開終端機顯示的 Local 網址後加上 /local.html，例如 http://localhost:5173/local.html。首頁會顯示雲端設定引導，請先使用本機練習入口。

```text
pnpm dev
```

**預期結果**

看到「我的一週 · 本機練習」，可新增虛構行程。這裡刻意保留一個時間判斷缺陷供 Task 3 修正。

<details>
<summary>卡住了？查看排錯提示</summary>

若 5173 被占用，使用終端機實際顯示的埠號。不要把刻意有缺陷的本機練習當成已完成作品。

</details>

## 步驟 5：找到任務與驗收記錄

在編輯器開啟 tasks/README.md 與 worksheets/evidence.md。整份 GitHub 教材有任務文字；本網站額外提供互動、觀念檢核與進度保存。

**預期結果**

你能指出任務手冊、練習程式、測試與正式雲端程式各在哪裡。

<details>
<summary>卡住了？查看排錯提示</summary>

初次不用理解所有檔案；先對照 README 的目錄表。

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
