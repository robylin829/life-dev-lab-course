# 生活開發實驗室｜從想法到產品

繁體中文、初學友善的任務式教材。8 堂 × 90 分鐘，從自己的行事曆走過 Git / GitHub、AI Coding Agents、Supabase 與 Vercel。

[開始 Task 0](tasks/task0.md) · [完整任務目錄](tasks/README.md) · [線上互動課程](https://life-development-lab.vercel.app/#/tasks/0) · [直接下載 ZIP](https://github.com/robylin829/life-dev-lab-course/archive/refs/heads/main.zip)

## 安裝與執行：選自己的系統

[Windows PowerShell 完整指令](SETUP.md#windows) · [macOS Terminal](SETUP.md#mac) · [Ubuntu／WSL](SETUP.md#linux) · [每堂課執行命令](RUNBOOK.md)

SETUP.md 包含工具安裝、ZIP／Fork 下載、自動找到練習資料夾、安裝套件、預期結果、停止與再次啟動、常見錯誤。第一次先照指引進到含 package.json 的專案資料夾，再逐段執行：

```sh
pnpm install --frozen-lockfile
```

安裝成功後：

```sh
pnpm test
```

看到 5/5 通過後，啟動本機練習（持續執行、會自動開頁面）：

```sh
pnpm dev:local
```

停止按 Ctrl + C。Task 6 完成 Supabase 設定後改用 pnpm dev:cloud。

## 兩個可操作入口

| 路線 | 開啟位置 | 做什麼 |
|---|---|---|
| Task 1–5 本機練習 | 終端機顯示的網址加 /local.html | 不需雲端設定；新增、編輯、完成、重新整理保存，並修正一個真實缺陷 |
| Task 6–8 雲端作品 | 同一網址首頁 / | 依 [雲端設定](CLOUD_SETUP.md) 接上自己的 Supabase，完成登入與個人行程 |

本機資料只存在目前瀏覽器，不會自動上傳到 Supabase。正式 build 同時產生兩個入口，本機練習清楚標示刻意缺陷；正式雲端驗證使用另一支完整函式。

## 先看到失敗，再修好

Task 3 的 exercises/validate-event.js 刻意漏掉時間相等。

```sh
pnpm task:check
```

初次預期 **3 通過、1 失敗**；依 Task 3 修正後應 **4/4 通過**。這個練習與正式測試分開：

| 命令 | 範圍 | 初始預期 |
|---|---|---|
| pnpm dev:local | Task 1–5 本機練習，開啟 local.html | 顯示本機行事曆 |
| pnpm dev:cloud | Task 6–8 的雲端作品首頁 | 完成接線後顯示登入 |
| pnpm test | 正式雲端時間／名稱驗證 | 5/5 通過 |
| pnpm task:check | 學生本機缺陷練習 | 3/4，修正後 4/4 |
| pnpm build | TypeScript 與兩個頁面的建置 | 成功 |
| pnpm test:cloud | 自己的 Supabase 實際 API / RLS | 完成雲端與兩帳號設定後才執行 |

GitHub Actions 與 Vercel 建置只執行正式測試；刻意失敗的練習由學生另執行，不能拿正式測試成功代替練習驗收。

## 檔案地圖

- tasks/：Task 0–8 完整操作手冊
- worksheets/：需求、案例、AI 協作、成果證據
- src/local.tsx：前五堂本機練習 UI
- exercises/：待修驗證與四個測試
- solutions/：課後參考答案，先嘗試再看
- src/main.tsx、src/client.ts：Supabase 全端作品
- src/validation.js、tests/validation.test.mjs：正式驗證
- schema.sql：資料表、約束、grants 與 RLS
- tests/cloud.mjs：兩帳號真實權限驗收
- .github/workflows/ci.yml：正式測試與建置
- AGENTS.md：AI Agent 工作約定

## 八堂課任務

- [第 1 堂：把生活問題寫成可驗收規格](tasks/task1.md)
- [第 2 堂：給 AI 一個有邊界的畫面任務](tasks/task2.md)
- [第 3 堂：修好「10:00–10:00」的缺陷](tasks/task3.md)
- [第 4 堂：重新整理後，資料去了哪裡？](tasks/task4.md)
- [第 5 堂：把修改送進自己的 Pull Request](tasks/task5.md)
- [第 6 堂：登入、雲端行程與資料隔離](tasks/task6.md)
- [第 7 堂：把自己的作品部署並驗收](tasks/task7.md)
- [第 8 堂：交付作品與開發證據](tasks/task8.md)

## 教師使用與備援

[教師指引](TEACHER.md) 說明節奏、試教、驗收與離線備援。站內 AI、Git、RLS、發布演練均為教學模擬；本 repo 的本機操作與接線後的 API 測試會實際執行。

## 授權與來源

本教材與原創程式採 MIT 授權，見 LICENSE。任務導覽形式參考 [NTHU ScopeLab 實作任務](https://nthu-scopelab.github.io/cr-virtualization/live_migration/live-migration/task1.html)；未複製其內容或圖片。工具文件連結集中於 [官方資源](RESOURCES.md)。
