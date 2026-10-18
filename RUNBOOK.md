# 每堂課的執行命令

先完成 [安裝與啟動](SETUP.md)。每個命令都在含 package.json 的專案根目錄執行。選對作業系統，一次貼一段。不要把 AI Prompt、JavaScript 片段或 SQL 貼入終端機。

<a id="windows-task1"></a>

## Windows · PowerShell · Task 1

### 1. 先確認終端機位置

Test-Path 應顯示 True。若是 False，先用 VS Code 開啟含 package.json 的專案資料夾，再按「終端機 → 新增終端機」。

```powershell
Get-Location
Test-Path .\package.json
Get-ChildItem
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```powershell
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 3. 另開終端機，檢查修改

dev server 保持運作；在編輯器開同一專案的第二個終端機執行。ZIP 路線在 Task 5 建立 Git 之前，可用編輯器比較檔案。

```powershell
pnpm test
pnpm build
```

**預期結果：** 正式測試與建置通過，回到瀏覽器觀察自己的修改。

<a id="windows-task2"></a>

## Windows · PowerShell · Task 2

### 1. 先確認終端機位置

Test-Path 應顯示 True。若是 False，先用 VS Code 開啟含 package.json 的專案資料夾，再按「終端機 → 新增終端機」。

```powershell
Get-Location
Test-Path .\package.json
Get-ChildItem
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```powershell
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 3. 另開終端機，檢查修改

dev server 保持運作；在編輯器開同一專案的第二個終端機執行。ZIP 路線在 Task 5 建立 Git 之前，可用編輯器比較檔案。

```powershell
pnpm test
pnpm build
```

**預期結果：** 正式測試與建置通過，回到瀏覽器觀察自己的修改。

<a id="windows-task3"></a>

## Windows · PowerShell · Task 3

### 1. 先確認終端機位置

Test-Path 應顯示 True。若是 False，先用 VS Code 開啟含 package.json 的專案資料夾，再按「終端機 → 新增終端機」。

```powershell
Get-Location
Test-Path .\package.json
Get-ChildItem
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 重現刻意失敗的練習

第一次預期有一項失敗。此指令跑完會結束，不要因這個預設失敗重新安裝套件。

```powershell
pnpm task:check
```

**預期結果：** 初始 3 個通過、1 個失敗。修正 exercises/validate-event.js 的等時條件後，同一命令應 4/4 通過。

### 3. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```powershell
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 4. 檢查 TypeScript 並建立發布檔案

先停止 preview 或在另一個相同專案資料夾的終端機執行；正常運作的 dev server 可保留。

```powershell
pnpm build
```

**預期結果：** 出現 built in ...，並產生 dist/index.html 與 dist/local.html。

### 5. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```powershell
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

<a id="windows-task4"></a>

## Windows · PowerShell · Task 4

### 1. 先確認終端機位置

Test-Path 應顯示 True。若是 False，先用 VS Code 開啟含 package.json 的專案資料夾，再按「終端機 → 新增終端機」。

```powershell
Get-Location
Test-Path .\package.json
Get-ChildItem
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```powershell
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 3. 另開終端機，檢查修改

dev server 保持運作；在編輯器開同一專案的第二個終端機執行。ZIP 路線在 Task 5 建立 Git 之前，可用編輯器比較檔案。

```powershell
pnpm test
pnpm build
```

**預期結果：** 正式測試與建置通過，回到瀏覽器觀察自己的修改。

<a id="windows-task5"></a>

## Windows · PowerShell · Task 5

### 1. 先確認終端機位置

Test-Path 應顯示 True。若是 False，先用 VS Code 開啟含 package.json 的專案資料夾，再按「終端機 → 新增終端機」。

```powershell
Get-Location
Test-Path .\package.json
Get-ChildItem
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 僅 ZIP 路線：建立自己的 Git 儲存庫

先在 GitHub → New repository 建立空的 life-dev-lab-course，不勾 README、license 或 .gitignore。Clone 路線已有 Git 歷史，直接前往下一段作者設定。

```powershell
if (Test-Path .git) { throw '已有 Git 歷史：Clone 路線請略過本段，繼續作者設定' }
$labUser = (Read-Host '自己的 GitHub 帳號').Trim()
if ($labUser -notmatch '^[A-Za-z0-9-]{1,39}$') { throw 'GitHub 帳號格式不符' }
git init -b main
git remote add origin "https://github.com/$labUser/life-dev-lab-course.git"
git status
```

**預期結果：** ZIP 路線的 origin 指向自己的空 repo；本機分支為 main。

### 3. 設定這個 repo 的提交作者

每次提示出現時再輸入自己的資料。這些只設定目前 repo 的作者；不會替你登入 GitHub。

```powershell
git config user.name (Read-Host '請輸入提交顯示名稱')
git config user.email (Read-Host '請輸入 GitHub 提交 email 或 noreply email')
git status
git remote -v
```

**預期結果：** 作者已設定；git remote -v 指向自己的 repo。

### 4. 保存前四堂的修改並推送

先用編輯器存檔。執行 git diff --cached 後，確認沒有 .env.local、測試帳密或無關檔案；再執行下一段提交。

```powershell
git status
git add .
git diff --cached
```

**預期結果：** 暫存的差異是自己本次的練習成果。

### 5. 確認差異後提交

這段會建立本機版本並 push 到自己的 repo。若 GitHub 認證詢問登入，依官方 HTTPS 認證流程完成；GitHub 網站密碼不能直接當作 Git HTTPS 密碼。

```powershell
git commit -m "feat: 完成前四堂本機練習"
git push -u origin main
```

**預期結果：** 自己的 GitHub repo 顯示新提交。Nothing to commit 代表沒有新的檔案變更，不必建立空提交。

### 6. 建立下一項功能分支

先確保工作區乾淨，再執行。然後在編輯器修改 src/main.tsx 的作品標題。

```powershell
git switch -c feature/project-title
```

**預期結果：** 目前分支變成 feature/project-title。

### 7. 完成修改後驗收，再送 PR

以下先查看差異並驗證；測試與建置通過後，再執行下一段提交。

```powershell
git diff
pnpm test
pnpm build
```

**預期結果：** 測試與建置通過；程式差異只有預期修改。

### 8. 推送功能分支

推送後在自己的 GitHub repo 開 Pull Request；base repository 選自己的 Fork，base 為 main、compare 為 feature/project-title。

```powershell
git add src/main.tsx
git commit -m "feat: 設定我的作品名稱"
git push -u origin feature/project-title
```

**預期結果：** 自己的 repo 可建立 PR，Files changed 顯示作品標題修改。

<a id="windows-task6"></a>

## Windows · PowerShell · Task 6

### 1. 先確認終端機位置

Test-Path 應顯示 True。若是 False，先用 VS Code 開啟含 package.json 的專案資料夾，再按「終端機 → 新增終端機」。

```powershell
Get-Location
Test-Path .\package.json
Get-ChildItem
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 建立並編輯本機雲端設定

先完成 Task 6 的 SQL 與專案設定。此段保留既有檔案，開啟後將兩個範例值換成自己的 Project URL 與 publishable key，儲存後關閉記事本。

```powershell
if (Test-Path .env.local) {
  Write-Host '.env.local 已存在，保留原檔並開啟編輯。'
} else {
  Copy-Item -LiteralPath .env.example -Destination .env.local
}
notepad.exe .env.local
```

**預期結果：** .env.local 的兩個公開設定已填妥；現有檔案不會被覆蓋。

### 3. 啟動 Task 6 的雲端作品

先停止之前的 dev server（Ctrl + C）。這個入口是首頁 /；需要自己的 Supabase，與本機 local.html 分開。URL Configuration 請使用終端機實際顯示的 origin，例如 http://127.0.0.1:5173。

```powershell
pnpm dev:cloud
```

**預期結果：** 完成設定後顯示登入表單；若仍出現接線提示，檢查設定名稱、值與是否重啟。

### 4. 準備真實權限測試的帳號設定

填入自己的兩個已確認測試帳號與公開設定，儲存後關閉記事本。下一段才執行 pnpm test:cloud；不要把這個檔案提交到 GitHub。

```powershell
if (Test-Path .env.test.local) {
  Write-Host '.env.test.local 已存在，保留原檔並開啟編輯。'
} else {
  Copy-Item -LiteralPath .env.test.example -Destination .env.test.local
}
notepad.exe .env.test.local
```

**預期結果：** .env.test.local 已填好兩個自己控制、且已確認的測試帳號。

### 5. 執行真正的雲端權限驗收

在另一個位於專案根目錄的終端機執行。這會真的呼叫自己的 Supabase，並保留一筆驗收行程；尚未填妥帳號時先不要執行。

```powershell
pnpm test:cloud
```

**預期結果：** 自己可讀寫、A／B 隔離、owner 不可偽造或轉交、無效行程與匿名存取皆受阻，全部通過才顯示 PASS。

<a id="windows-task7"></a>

## Windows · PowerShell · Task 7

### 1. 先確認終端機位置

Test-Path 應顯示 True。若是 False，先用 VS Code 開啟含 package.json 的專案資料夾，再按「終端機 → 新增終端機」。

```powershell
Get-Location
Test-Path .\package.json
Get-ChildItem
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```powershell
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 3. 檢查 TypeScript 並建立發布檔案

先停止 preview 或在另一個相同專案資料夾的終端機執行；正常運作的 dev server 可保留。

```powershell
pnpm build
```

**預期結果：** 出現 built in ...，並產生 dist/index.html 與 dist/local.html。

### 4. 開啟建置後的預覽

預設網址約為 http://127.0.0.1:4173，使用終端機顯示的實際網址。此命令會持續執行，按 Ctrl + C 停止；若測註冊信件回跳，Supabase 也要允許該 origin。

```powershell
pnpm preview --open /
```

**預期結果：** 能操作登入與自己的行程；這是本機預覽，Vercel 正式網址依 Task 7 的匯入流程取得。

### 5. 部署前確認遠端與版本

確認是自己的 repo，之後依本頁 Vercel GUI 步驟匯入、填兩個 VITE_* 設定，再驗收 Preview 與 Production。

```powershell
git status
git remote -v
git log -1 --oneline
```

**預期結果：** 沒有未預期的修改；遠端與 commit 都對應這次要發布的作品。

<a id="windows-task8"></a>

## Windows · PowerShell · Task 8

### 1. 先確認終端機位置

Test-Path 應顯示 True。若是 False，先用 VS Code 開啟含 package.json 的專案資料夾，再按「終端機 → 新增終端機」。

```powershell
Get-Location
Test-Path .\package.json
Get-ChildItem
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```powershell
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 3. 檢查 TypeScript 並建立發布檔案

先停止 preview 或在另一個相同專案資料夾的終端機執行；正常運作的 dev server 可保留。

```powershell
pnpm build
```

**預期結果：** 出現 built in ...，並產生 dist/index.html 與 dist/local.html。

### 4. 需要補驗雲端權限時

只有自己的 .env.test.local 已設定完成時才執行。操作證據與正式網址記錄到 worksheets/evidence.md。

```powershell
pnpm test:cloud
```

**預期結果：** 記錄真實測試結果與版本；尚未實測的項目保留待驗收。

<a id="mac-task1"></a>

## macOS · Terminal · Task 1

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```sh
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 3. 另開終端機，檢查修改

dev server 保持運作；在編輯器開同一專案的第二個終端機執行。ZIP 路線在 Task 5 建立 Git 之前，可用編輯器比較檔案。

```sh
pnpm test
pnpm build
```

**預期結果：** 正式測試與建置通過，回到瀏覽器觀察自己的修改。

<a id="mac-task2"></a>

## macOS · Terminal · Task 2

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```sh
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 3. 另開終端機，檢查修改

dev server 保持運作；在編輯器開同一專案的第二個終端機執行。ZIP 路線在 Task 5 建立 Git 之前，可用編輯器比較檔案。

```sh
pnpm test
pnpm build
```

**預期結果：** 正式測試與建置通過，回到瀏覽器觀察自己的修改。

<a id="mac-task3"></a>

## macOS · Terminal · Task 3

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 重現刻意失敗的練習

第一次預期有一項失敗。此指令跑完會結束，不要因這個預設失敗重新安裝套件。

```sh
pnpm task:check
```

**預期結果：** 初始 3 個通過、1 個失敗。修正 exercises/validate-event.js 的等時條件後，同一命令應 4/4 通過。

### 3. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```sh
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 4. 檢查 TypeScript 並建立發布檔案

先停止 preview 或在另一個相同專案資料夾的終端機執行；正常運作的 dev server 可保留。

```sh
pnpm build
```

**預期結果：** 出現 built in ...，並產生 dist/index.html 與 dist/local.html。

### 5. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```sh
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

<a id="mac-task4"></a>

## macOS · Terminal · Task 4

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```sh
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 3. 另開終端機，檢查修改

dev server 保持運作；在編輯器開同一專案的第二個終端機執行。ZIP 路線在 Task 5 建立 Git 之前，可用編輯器比較檔案。

```sh
pnpm test
pnpm build
```

**預期結果：** 正式測試與建置通過，回到瀏覽器觀察自己的修改。

<a id="mac-task5"></a>

## macOS · Terminal · Task 5

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 僅 ZIP 路線：建立自己的 Git 儲存庫

先在 GitHub → New repository 建立空的 life-dev-lab-course，不勾 README、license 或 .gitignore。Clone 路線已有 Git 歷史，直接前往下一段作者設定。

```sh
if [ -d .git ]; then
  printf '已有 Git 歷史：Clone 路線請略過本段，繼續作者設定\n'
else
  printf '自己的 GitHub 帳號：'
  read -r lab_user
  git init -b main &&
  git remote add origin "https://github.com/$lab_user/life-dev-lab-course.git" &&
  git status
fi
```

**預期結果：** ZIP 路線的 origin 指向自己的空 repo；本機分支為 main。

### 3. 設定這個 repo 的提交作者

這些只設定目前 repo 的作者，不會替你登入 GitHub。

```sh
printf '請輸入提交顯示名稱：'
read -r lab_name
git config user.name "$lab_name"
printf '請輸入 GitHub 提交 email 或 noreply email：'
read -r lab_email
git config user.email "$lab_email"
git status
git remote -v
```

**預期結果：** 作者已設定；git remote -v 指向自己的 repo。

### 4. 保存前四堂的修改並推送

先用編輯器存檔。執行 git diff --cached 後，確認沒有 .env.local、測試帳密或無關檔案；再執行下一段提交。

```sh
git status
git add .
git diff --cached
```

**預期結果：** 暫存的差異是自己本次的練習成果。

### 5. 確認差異後提交

這段會建立本機版本並 push 到自己的 repo。若 GitHub 認證詢問登入，依官方 HTTPS 認證流程完成；GitHub 網站密碼不能直接當作 Git HTTPS 密碼。

```sh
git commit -m "feat: 完成前四堂本機練習"
git push -u origin main
```

**預期結果：** 自己的 GitHub repo 顯示新提交。Nothing to commit 代表沒有新的檔案變更，不必建立空提交。

### 6. 建立下一項功能分支

先確保工作區乾淨，再執行。然後在編輯器修改 src/main.tsx 的作品標題。

```sh
git switch -c feature/project-title
```

**預期結果：** 目前分支變成 feature/project-title。

### 7. 完成修改後驗收，再送 PR

以下先查看差異並驗證；測試與建置通過後，再執行下一段提交。

```sh
git diff
pnpm test
pnpm build
```

**預期結果：** 測試與建置通過；程式差異只有預期修改。

### 8. 推送功能分支

推送後在自己的 GitHub repo 開 Pull Request；base repository 選自己的 Fork，base 為 main、compare 為 feature/project-title。

```sh
git add src/main.tsx
git commit -m "feat: 設定我的作品名稱"
git push -u origin feature/project-title
```

**預期結果：** 自己的 repo 可建立 PR，Files changed 顯示作品標題修改。

<a id="mac-task6"></a>

## macOS · Terminal · Task 6

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 建立並編輯本機雲端設定

先完成 Task 6 的 SQL 與專案設定。此段建立或保留 .env.local；在編輯器開啟它，將兩個範例值換成自己的 Project URL 與 publishable key，儲存後重啟 dev server。

```sh
if [ -e .env.local ]; then
  printf '.env.local 已存在，保留原檔\n'
else
  cp .env.example .env.local
fi
```

**預期結果：** .env.local 的兩個公開設定已填妥；現有檔案不會被覆蓋。

### 3. 啟動 Task 6 的雲端作品

先停止之前的 dev server（Ctrl + C）。這個入口是首頁 /；需要自己的 Supabase，與本機 local.html 分開。URL Configuration 請使用終端機實際顯示的 origin，例如 http://127.0.0.1:5173。

```sh
pnpm dev:cloud
```

**預期結果：** 完成設定後顯示登入表單；若仍出現接線提示，檢查設定名稱、值與是否重啟。

### 4. 準備真實權限測試的帳號設定

在編輯器開啟 .env.test.local，填入自己的兩個已確認測試帳號與公開設定，儲存後才執行下一段。

```sh
if [ -e .env.test.local ]; then
  printf '.env.test.local 已存在，保留原檔\n'
else
  cp .env.test.example .env.test.local
fi
```

**預期結果：** .env.test.local 已填好兩個自己控制、且已確認的測試帳號。

### 5. 執行真正的雲端權限驗收

在另一個位於專案根目錄的終端機執行。這會真的呼叫自己的 Supabase，並保留一筆驗收行程；尚未填妥帳號時先不要執行。

```sh
pnpm test:cloud
```

**預期結果：** 自己可讀寫、A／B 隔離、owner 不可偽造或轉交、無效行程與匿名存取皆受阻，全部通過才顯示 PASS。

<a id="mac-task7"></a>

## macOS · Terminal · Task 7

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```sh
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 3. 檢查 TypeScript 並建立發布檔案

先停止 preview 或在另一個相同專案資料夾的終端機執行；正常運作的 dev server 可保留。

```sh
pnpm build
```

**預期結果：** 出現 built in ...，並產生 dist/index.html 與 dist/local.html。

### 4. 開啟建置後的預覽

預設網址約為 http://127.0.0.1:4173，使用終端機顯示的實際網址。此命令會持續執行，按 Ctrl + C 停止；若測註冊信件回跳，Supabase 也要允許該 origin。

```sh
pnpm preview --open /
```

**預期結果：** 能操作登入與自己的行程；這是本機預覽，Vercel 正式網址依 Task 7 的匯入流程取得。

### 5. 部署前確認遠端與版本

確認是自己的 repo，之後依本頁 Vercel GUI 步驟匯入、填兩個 VITE_* 設定，再驗收 Preview 與 Production。

```sh
git status
git remote -v
git log -1 --oneline
```

**預期結果：** 沒有未預期的修改；遠端與 commit 都對應這次要發布的作品。

<a id="mac-task8"></a>

## macOS · Terminal · Task 8

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```sh
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 3. 檢查 TypeScript 並建立發布檔案

先停止 preview 或在另一個相同專案資料夾的終端機執行；正常運作的 dev server 可保留。

```sh
pnpm build
```

**預期結果：** 出現 built in ...，並產生 dist/index.html 與 dist/local.html。

### 4. 需要補驗雲端權限時

只有自己的 .env.test.local 已設定完成時才執行。操作證據與正式網址記錄到 worksheets/evidence.md。

```sh
pnpm test:cloud
```

**預期結果：** 記錄真實測試結果與版本；尚未實測的項目保留待驗收。

<a id="linux-task1"></a>

## Ubuntu／WSL · bash · Task 1

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```sh
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 3. 另開終端機，檢查修改

dev server 保持運作；在編輯器開同一專案的第二個終端機執行。ZIP 路線在 Task 5 建立 Git 之前，可用編輯器比較檔案。

```sh
pnpm test
pnpm build
```

**預期結果：** 正式測試與建置通過，回到瀏覽器觀察自己的修改。

<a id="linux-task2"></a>

## Ubuntu／WSL · bash · Task 2

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```sh
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 3. 另開終端機，檢查修改

dev server 保持運作；在編輯器開同一專案的第二個終端機執行。ZIP 路線在 Task 5 建立 Git 之前，可用編輯器比較檔案。

```sh
pnpm test
pnpm build
```

**預期結果：** 正式測試與建置通過，回到瀏覽器觀察自己的修改。

<a id="linux-task3"></a>

## Ubuntu／WSL · bash · Task 3

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 重現刻意失敗的練習

第一次預期有一項失敗。此指令跑完會結束，不要因這個預設失敗重新安裝套件。

```sh
pnpm task:check
```

**預期結果：** 初始 3 個通過、1 個失敗。修正 exercises/validate-event.js 的等時條件後，同一命令應 4/4 通過。

### 3. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```sh
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 4. 檢查 TypeScript 並建立發布檔案

先停止 preview 或在另一個相同專案資料夾的終端機執行；正常運作的 dev server 可保留。

```sh
pnpm build
```

**預期結果：** 出現 built in ...，並產生 dist/index.html 與 dist/local.html。

### 5. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```sh
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

<a id="linux-task4"></a>

## Ubuntu／WSL · bash · Task 4

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```sh
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 3. 另開終端機，檢查修改

dev server 保持運作；在編輯器開同一專案的第二個終端機執行。ZIP 路線在 Task 5 建立 Git 之前，可用編輯器比較檔案。

```sh
pnpm test
pnpm build
```

**預期結果：** 正式測試與建置通過，回到瀏覽器觀察自己的修改。

<a id="linux-task5"></a>

## Ubuntu／WSL · bash · Task 5

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 僅 ZIP 路線：建立自己的 Git 儲存庫

先在 GitHub → New repository 建立空的 life-dev-lab-course，不勾 README、license 或 .gitignore。Clone 路線已有 Git 歷史，直接前往下一段作者設定。

```sh
if [ -d .git ]; then
  printf '已有 Git 歷史：Clone 路線請略過本段，繼續作者設定\n'
else
  printf '自己的 GitHub 帳號：'
  read -r lab_user
  git init -b main &&
  git remote add origin "https://github.com/$lab_user/life-dev-lab-course.git" &&
  git status
fi
```

**預期結果：** ZIP 路線的 origin 指向自己的空 repo；本機分支為 main。

### 3. 設定這個 repo 的提交作者

這些只設定目前 repo 的作者，不會替你登入 GitHub。

```sh
printf '請輸入提交顯示名稱：'
read -r lab_name
git config user.name "$lab_name"
printf '請輸入 GitHub 提交 email 或 noreply email：'
read -r lab_email
git config user.email "$lab_email"
git status
git remote -v
```

**預期結果：** 作者已設定；git remote -v 指向自己的 repo。

### 4. 保存前四堂的修改並推送

先用編輯器存檔。執行 git diff --cached 後，確認沒有 .env.local、測試帳密或無關檔案；再執行下一段提交。

```sh
git status
git add .
git diff --cached
```

**預期結果：** 暫存的差異是自己本次的練習成果。

### 5. 確認差異後提交

這段會建立本機版本並 push 到自己的 repo。若 GitHub 認證詢問登入，依官方 HTTPS 認證流程完成；GitHub 網站密碼不能直接當作 Git HTTPS 密碼。

```sh
git commit -m "feat: 完成前四堂本機練習"
git push -u origin main
```

**預期結果：** 自己的 GitHub repo 顯示新提交。Nothing to commit 代表沒有新的檔案變更，不必建立空提交。

### 6. 建立下一項功能分支

先確保工作區乾淨，再執行。然後在編輯器修改 src/main.tsx 的作品標題。

```sh
git switch -c feature/project-title
```

**預期結果：** 目前分支變成 feature/project-title。

### 7. 完成修改後驗收，再送 PR

以下先查看差異並驗證；測試與建置通過後，再執行下一段提交。

```sh
git diff
pnpm test
pnpm build
```

**預期結果：** 測試與建置通過；程式差異只有預期修改。

### 8. 推送功能分支

推送後在自己的 GitHub repo 開 Pull Request；base repository 選自己的 Fork，base 為 main、compare 為 feature/project-title。

```sh
git add src/main.tsx
git commit -m "feat: 設定我的作品名稱"
git push -u origin feature/project-title
```

**預期結果：** 自己的 repo 可建立 PR，Files changed 顯示作品標題修改。

<a id="linux-task6"></a>

## Ubuntu／WSL · bash · Task 6

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 建立並編輯本機雲端設定

先完成 Task 6 的 SQL 與專案設定。此段建立或保留 .env.local；在編輯器開啟它，將兩個範例值換成自己的 Project URL 與 publishable key，儲存後重啟 dev server。

```sh
if [ -e .env.local ]; then
  printf '.env.local 已存在，保留原檔\n'
else
  cp .env.example .env.local
fi
```

**預期結果：** .env.local 的兩個公開設定已填妥；現有檔案不會被覆蓋。

### 3. 啟動 Task 6 的雲端作品

先停止之前的 dev server（Ctrl + C）。這個入口是首頁 /；需要自己的 Supabase，與本機 local.html 分開。URL Configuration 請使用終端機實際顯示的 origin，例如 http://127.0.0.1:5173。

```sh
pnpm dev:cloud
```

**預期結果：** 完成設定後顯示登入表單；若仍出現接線提示，檢查設定名稱、值與是否重啟。

### 4. 準備真實權限測試的帳號設定

在編輯器開啟 .env.test.local，填入自己的兩個已確認測試帳號與公開設定，儲存後才執行下一段。

```sh
if [ -e .env.test.local ]; then
  printf '.env.test.local 已存在，保留原檔\n'
else
  cp .env.test.example .env.test.local
fi
```

**預期結果：** .env.test.local 已填好兩個自己控制、且已確認的測試帳號。

### 5. 執行真正的雲端權限驗收

在另一個位於專案根目錄的終端機執行。這會真的呼叫自己的 Supabase，並保留一筆驗收行程；尚未填妥帳號時先不要執行。

```sh
pnpm test:cloud
```

**預期結果：** 自己可讀寫、A／B 隔離、owner 不可偽造或轉交、無效行程與匿名存取皆受阻，全部通過才顯示 PASS。

<a id="linux-task7"></a>

## Ubuntu／WSL · bash · Task 7

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```sh
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 3. 檢查 TypeScript 並建立發布檔案

先停止 preview 或在另一個相同專案資料夾的終端機執行；正常運作的 dev server 可保留。

```sh
pnpm build
```

**預期結果：** 出現 built in ...，並產生 dist/index.html 與 dist/local.html。

### 4. 開啟建置後的預覽

預設網址約為 http://127.0.0.1:4173，使用終端機顯示的實際網址。此命令會持續執行，按 Ctrl + C 停止；若測註冊信件回跳，Supabase 也要允許該 origin。

```sh
pnpm preview --open /
```

**預期結果：** 能操作登入與自己的行程；這是本機預覽，Vercel 正式網址依 Task 7 的匯入流程取得。

### 5. 部署前確認遠端與版本

確認是自己的 repo，之後依本頁 Vercel GUI 步驟匯入、填兩個 VITE_* 設定，再驗收 Preview 與 Production。

```sh
git status
git remote -v
git log -1 --oneline
```

**預期結果：** 沒有未預期的修改；遠端與 commit 都對應這次要發布的作品。

<a id="linux-task8"></a>

## Ubuntu／WSL · bash · Task 8

### 1. 先確認終端機位置

應顯示「已在專案根目錄」。若沒有，先用編輯器開啟含 package.json 的資料夾，再開該資料夾的終端機。

```sh
pwd
test -f package.json && printf '已在專案根目錄\n'
ls
```

**預期結果：** 目前資料夾包含 package.json。接下來的 pnpm 指令都在這個資料夾執行。

### 2. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```sh
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 3. 檢查 TypeScript 並建立發布檔案

先停止 preview 或在另一個相同專案資料夾的終端機執行；正常運作的 dev server 可保留。

```sh
pnpm build
```

**預期結果：** 出現 built in ...，並產生 dist/index.html 與 dist/local.html。

### 4. 需要補驗雲端權限時

只有自己的 .env.test.local 已設定完成時才執行。操作證據與正式網址記錄到 worksheets/evidence.md。

```sh
pnpm test:cloud
```

**預期結果：** 記錄真實測試結果與版本；尚未實測的項目保留待驗收。

