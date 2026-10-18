# 可直接複製的安裝與啟動指令

一次貼一個區塊，等執行完成並核對結果，再進下一段。所有專案依賴使用 pnpm。安裝工具若要求授權或管理員確認，需要你完成畫面上的步驟。

[Windows](#windows) · [macOS](#mac) · [Ubuntu／WSL](#linux) · [常見問題](#troubleshooting)

<a id="windows"></a>

## Windows · PowerShell

按 Windows 鍵，搜尋 PowerShell 並開啟。以下使用一般 PowerShell；安裝程式若詢問管理員權限，依學校電腦規範處理。

### 第一段：安裝工具

### 1. 安裝 Node.js、Git 與編輯器

第一次安裝才執行。這段使用 Windows 內建的 winget，安裝畫面或授權提示需要你操作。每個安裝結束再繼續；已安裝的工具可略過對應那一行。

```powershell
winget --version
winget install --id OpenJS.NodeJS.LTS --exact --source winget
winget install --id Git.Git --exact --source winget
winget install --id Microsoft.VisualStudioCode --exact --source winget
```

**預期結果：** Node.js LTS、Git、Visual Studio Code 安裝完成。接著關閉這個 PowerShell，重新開一個，讓 PATH 更新。

### 2. 安裝教材指定的 pnpm

在重新開啟的 PowerShell 執行。這段下載並執行 pnpm 官方安裝程式，指定 11.25.0，不使用 npm install。安裝完成後再重新開啟 PowerShell。

```powershell
$env:PNPM_VERSION = '11.25.0'
Invoke-WebRequest -Uri 'https://get.pnpm.io/install.ps1' -UseBasicParsing | Invoke-Expression
```

**預期結果：** pnpm 安裝完成；重新開啟 PowerShell 後可執行 pnpm。

### 3. 檢查三個版本

這段可以直接複製。教材建議 Node.js 24.x；若 LTS 已變為其他主版本，從 Node.js 官方下載頁選 24.x。pnpm 應顯示 11.25.0。

```powershell
node --version
pnpm --version
git --version
```

**預期結果：** 依序顯示 v24.x.x、11.25.0 與 git version。找不到其中一項時先處理安裝，不進入下載步驟。

### 第二段：下載教材（擇一）

### 1. 下載 GitHub ZIP 到桌面（不需登入）

整段可直接貼上，不用改路徑或帳號。會自動找到包含 OneDrive 在內的桌面位置，建立帶時間的全新資料夾，保留原有檔案。

```powershell
$ErrorActionPreference = 'Stop'
$labDesktop = [Environment]::GetFolderPath('Desktop')
$labFolder = Join-Path $labDesktop ('life-dev-lab-' + (Get-Date -Format 'yyyyMMdd-HHmmss-fff'))
New-Item -ItemType Directory -Path $labFolder | Out-Null
$labZip = Join-Path $labFolder 'course.zip'
Invoke-WebRequest -Uri 'https://github.com/robylin829/life-dev-lab-course/archive/refs/heads/main.zip' -OutFile $labZip
Expand-Archive -LiteralPath $labZip -DestinationPath $labFolder
Set-Location (Join-Path $labFolder 'life-dev-lab-course-main')
Get-Location
Get-Item package.json
```

**預期結果：** 最後顯示桌面的專案路徑，以及 package.json。終端機已位於正確的專案根目錄。

### 2. 從自己的 Fork 複製到桌面

先到 GitHub 教材按 Fork → Owner 選自己的帳號 → Create fork。以下貼上後只會詢問「GitHub 帳號」，輸入帳號而非 email、密碼或完整網址。

```powershell
$labUser = (Read-Host '請輸入自己的 GitHub 帳號').Trim()
if ($labUser -notmatch '^[A-Za-z0-9-]{1,39}$') { throw '請只輸入 GitHub 帳號，例如 octocat' }
$labDesktop = [Environment]::GetFolderPath('Desktop')
$labFolder = Join-Path $labDesktop ('life-dev-lab-' + (Get-Date -Format 'yyyyMMdd-HHmmss-fff'))
git clone "https://github.com/$labUser/life-dev-lab-course.git" "$labFolder"
if ($LASTEXITCODE -ne 0) { throw 'Clone 失敗：請確認已建立自己的 Fork 與帳號拼字' }
Set-Location $labFolder
git remote -v
Get-Item package.json
```

**預期結果：** origin 顯示自己的 GitHub 帳號；最後找到 package.json。Clone 已經有 Git 歷史，後續不用再 git init。

### 第三段：安裝套件、測試、啟動

### 1. 安裝教材依賴（第一次或套件有更新時）

整段可直接複製。這會依 lockfile 安裝依賴；請等到安裝完成，沒有錯誤才繼續。

```powershell
pnpm install --frozen-lockfile
```

**預期結果：** 安裝完成，沒有 ERR_PNPM 或 ELIFECYCLE 錯誤。

### 2. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```powershell
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 3. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```powershell
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 下次開課再次啟動

在編輯器開啟含 package.json 的資料夾，選「終端機 → 新增終端機」。

```powershell
pnpm dev:local
```

Task 6 改用 pnpm dev:cloud。伺服器會持續執行，停止按 Ctrl + C；測試請另開同一資料夾的終端機。套件未變更時不必每次安裝。

<a id="mac"></a>

## macOS · Terminal

按 Command + Space，搜尋 Terminal／終端機並開啟。程式碼中的 # 開頭是說明。

### 第一段：安裝工具

### 1. 安裝 Git 的命令列工具

先貼這一行，完成 Apple 彈出的 Command Line Tools 安裝對話框。若顯示工具已安裝，就繼續下一段。

```sh
xcode-select --install
```

**預期結果：** Command Line Tools 已安裝完成；這一步的安裝視窗完成後，再執行下段。

### 2. 安裝 Node.js 24 與 pnpm

這段使用 nvm 與 pnpm 的官方安裝程式，將 Node.js 固定在 24 主版本、pnpm 固定在 11.25.0。安裝後關閉並重新開啟終端機。

```sh
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"
nvm install 24
nvm use 24
curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=11.25.0 sh -
```

**預期結果：** Node.js 與 pnpm 安裝完成。依安裝程式指示重新開啟終端機，讓 PATH 更新。

### 3. 檢查版本並準備編輯器

依序確認三個版本。編輯器可從 VS Code 官方頁下載並拖到應用程式；使用既有編輯器也可以。

```sh
node --version
pnpm --version
git --version
```

**預期結果：** 依序顯示 v24.x.x、11.25.0 與 git version。

### 第二段：下載教材（擇一）

### 1. 下載 GitHub ZIP 到桌面（不需登入）

整段可直接複製。會建立帶時間的全新資料夾，並保留下載的 ZIP。每步成功才繼續下一步。

```sh
lab_dir="$HOME/Desktop/life-dev-lab-$(date +%Y%m%d-%H%M%S)"
mkdir "$lab_dir" &&
curl -fL https://github.com/robylin829/life-dev-lab-course/archive/refs/heads/main.zip -o "$lab_dir/course.zip" &&
unzip -q "$lab_dir/course.zip" -d "$lab_dir" &&
cd "$lab_dir/life-dev-lab-course-main" &&
pwd &&
ls package.json
```

**預期結果：** 最後顯示桌面的專案路徑及 package.json，代表你已進入專案根目錄。

### 2. 從自己的 Fork 複製到桌面

先到 GitHub 教材按 Fork 建立自己的副本。貼上後依提示輸入自己的 GitHub 帳號；這段不需要帳號密碼。

```sh
printf '請輸入自己的 GitHub 帳號：'
read -r lab_user
lab_dir="$HOME/Desktop/life-dev-lab-$(date +%Y%m%d-%H%M%S)"
git clone "https://github.com/$lab_user/life-dev-lab-course.git" "$lab_dir" &&
cd "$lab_dir" &&
git remote -v &&
ls package.json
```

**預期結果：** origin 指向自己的 Fork，並且找到 package.json。

### 第三段：安裝套件、測試、啟動

### 1. 安裝教材依賴（第一次或套件有更新時）

整段可直接複製。這會依 lockfile 安裝依賴；請等到安裝完成，沒有錯誤才繼續。

```sh
pnpm install --frozen-lockfile
```

**預期結果：** 安裝完成，沒有 ERR_PNPM 或 ELIFECYCLE 錯誤。

### 2. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```sh
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 3. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```sh
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 下次開課再次啟動

在編輯器開啟含 package.json 的資料夾，選「終端機 → 新增終端機」。

```sh
pnpm dev:local
```

Task 6 改用 pnpm dev:cloud。伺服器會持續執行，停止按 Ctrl + C；測試請另開同一資料夾的終端機。套件未變更時不必每次安裝。

<a id="linux"></a>

## Ubuntu／WSL · bash

以下適用 Ubuntu、Debian 與 Ubuntu WSL。其他 Linux 發行版先用自己的套件管理器安裝 Git、curl、unzip，再接 Node.js 與 pnpm 段落。

### 第一段：安裝工具

### 1. 安裝 Git、下載與解壓工具

需要 sudo 權限；輸入密碼時畫面不顯示字元是正常現象。這段適用 Ubuntu／Debian。

```sh
sudo apt-get update
sudo apt-get install -y git curl unzip
```

**預期結果：** git、curl 與 unzip 安裝完成。

### 2. 安裝 Node.js 24 與 pnpm

這段使用 nvm 與 pnpm 的官方安裝程式。安裝後關閉並重新開啟終端機。

```sh
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
. "$NVM_DIR/nvm.sh"
nvm install 24
nvm use 24
curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=11.25.0 sh -
```

**預期結果：** Node.js 與 pnpm 安裝完成。WSL 的工具裝在 WSL 內，與 Windows PowerShell 的安裝分開。

### 3. 檢查版本

使用同一個 Linux／WSL 終端機繼續後續步驟。編輯器可使用 VS Code 的 WSL 功能，或自己慣用的 Linux 編輯器。

```sh
node --version
pnpm --version
git --version
```

**預期結果：** 依序顯示 v24.x.x、11.25.0 與 git version。

### 第二段：下載教材（擇一）

### 1. 下載 GitHub ZIP 到練習資料夾（不需登入）

整段可直接複製。會在目前使用者家目錄內建立帶時間的獨立練習資料夾；WSL 建議放 Linux 檔案系統以改善套件安裝速度。

```sh
lab_dir="$HOME/life-dev-lab-$(date +%Y%m%d-%H%M%S)"
mkdir "$lab_dir" &&
curl -fL https://github.com/robylin829/life-dev-lab-course/archive/refs/heads/main.zip -o "$lab_dir/course.zip" &&
unzip -q "$lab_dir/course.zip" -d "$lab_dir" &&
cd "$lab_dir/life-dev-lab-course-main" &&
pwd &&
ls package.json
```

**預期結果：** 最後顯示目前專案的路徑及 package.json；終端機已在專案根目錄。

### 2. 從自己的 Fork 複製

先到 GitHub 教材按 Fork 建立自己的副本。貼上後依提示輸入自己的 GitHub 帳號。

```sh
printf '請輸入自己的 GitHub 帳號：'
read -r lab_user
lab_dir="$HOME/life-dev-lab-$(date +%Y%m%d-%H%M%S)"
git clone "https://github.com/$lab_user/life-dev-lab-course.git" "$lab_dir" &&
cd "$lab_dir" &&
git remote -v &&
ls package.json
```

**預期結果：** origin 指向自己的 Fork，並且找到 package.json。

### 第三段：安裝套件、測試、啟動

### 1. 安裝教材依賴（第一次或套件有更新時）

整段可直接複製。這會依 lockfile 安裝依賴；請等到安裝完成，沒有錯誤才繼續。

```sh
pnpm install --frozen-lockfile
```

**預期結果：** 安裝完成，沒有 ERR_PNPM 或 ELIFECYCLE 錯誤。

### 2. 執行正式測試

這段是正式驗證，不會檢查 Task 3 刻意有缺陷的練習函式。

```sh
pnpm test
```

**預期結果：** 5 個測試通過，0 個失敗。

### 3. 啟動 Task 1–5 的本機練習

這個指令會持續執行，並自動開啟 local.html。保留終端機視窗；停止時按 Ctrl + C。需要跑測試時，在同一資料夾另開一個終端機。

```sh
pnpm dev:local
```

**預期結果：** 瀏覽器顯示「我的一週 · 本機練習」。以終端機的 Local 網址為準，預設 http://127.0.0.1:5173/local.html。

### 下次開課再次啟動

在編輯器開啟含 package.json 的資料夾，選「終端機 → 新增終端機」。

```sh
pnpm dev:local
```

Task 6 改用 pnpm dev:cloud。伺服器會持續執行，停止按 Ctrl + C；測試請另開同一資料夾的終端機。套件未變更時不必每次安裝。

<a id="troubleshooting"></a>

## 常見問題

### 找不到 winget

先從 Microsoft Store 更新 App Installer，或使用 Node.js、Git 與 VS Code 的官方安裝程式。完成安裝後重新開啟 PowerShell。不要在學校受管理電腦自行解除管理限制。

### 找不到 node、pnpm 或 git

先關閉並重新開啟終端機，檢查版本；請在安裝工具的同一系統操作。WSL 與 Windows 的安裝是分開的。pnpm 官方安裝程式會提示 PATH 的套用方式。

### PowerShell 顯示 pnpm.ps1 無法載入

這通常是既有 pnpm 安裝的腳本入口被限制。若安裝提供 pnpm.cmd，可將該段的 pnpm 改成 pnpm.cmd；官方獨立版則使用 pnpm.exe。用 Get-Command pnpm -All 查看實際入口，受管理電腦請找教師處理，不必降低整台電腦的執行政策。

### ERR_PNPM_NO_PKG_MANIFEST / 找不到 package.json

你還沒進入專案根目錄。ZIP 解壓後還要進入 life-dev-lab-course-main；在該資料夾開終端機，確認 package.json 存在再執行。

### pnpm install 出現連線、憑證或 lockfile 錯誤

先確認網路、系統日期、磁碟空間與 Node 版本。保留錯誤全文交給教師；確認 package.json 與 lockfile 來自同一版教材。重試安裝即可，不刪除 lockfile、不關閉憑證驗證。

### 5173 已被使用／啟動後網址不同

使用終端機顯示的實際網址。也可執行 pnpm dev:local --port 5174；dev:local 會開啟對應埠號的 local.html。

### 打開後看到 Supabase 設定，而非本機練習

Task 1–5 請使用 pnpm dev:local，或在實際網址加 /local.html。Task 6 的雲端作品才使用首頁 /。

### 執行 dev 後終端機一直沒有結束

開發伺服器持續運作是正常情況。先保留此視窗，另開同一資料夾的終端機跑測試；按 Ctrl + C 才會停止。

### pnpm task:check 一開始顯示失敗

初始 3/4 是 Task 3 刻意保留的等時缺陷。修正 exercises/validate-event.js 後才會 4/4。正式 pnpm test 應保持 5/5。

### Repository not found / push 驗證失敗

先確認 GitHub 已建立自己的 Fork，帳號拼字正確；git remote -v 應指向自己。Clone 公開 repo 與 push 權限不同；push 時依 Git Credential Manager 或 GitHub 官方 HTTPS 認證完成登入，GitHub 網站密碼不能當 Git HTTPS 密碼。

## 官方來源

核對日期：2026-10-18。教材固定 pnpm 11.25.0，避免直接使用 latest 改變課堂環境。

- [pnpm 官方安裝與指定版本](https://pnpm.io/installation)
- [pnpm 官方安裝程式](https://github.com/pnpm/get.pnpm.io)
- [Node.js 官方下載](https://nodejs.org/en/download/)
- [nvm 官方安裝說明](https://github.com/nvm-sh/nvm)
- [WinGet 官方安裝指令](https://learn.microsoft.com/en-us/windows/package-manager/winget/install)
- [VS Code 官方下載](https://code.visualstudio.com/download)
