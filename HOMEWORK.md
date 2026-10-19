# 逐步操作與每堂作業

先讀 [SETUP.md](SETUP.md) 完成安裝、下載與啟動；[RUNBOOK.md](RUNBOOK.md) 是每個系統的命令表。這裡補上開檔、修改、驗收與繳交。

一次複製一段，先確認操作位置。終端機 A 保留開發伺服器；終端機 B 執行檢查。程式片段只替換指定範圍。

- [Task 1](#task-1)
- [Task 2](#task-2)
- [Task 3](#task-3)
- [Task 4](#task-4)
- [Task 5](#task-5)
- [Task 6](#task-6)
- [Task 7](#task-7)
- [Task 8](#task-8)


<a id="task-1"></a>

## Task 1

### 1. 打開這次要修改的檔案

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

複製這段開檔指令。接下來切換到編輯器分頁，才貼文字或程式。

```text
code --reuse-window worksheets/spec.md worksheets/cases.md
```

**預期：** 指定檔案出現在編輯器分頁。

**卡住時：** 若 code 找不到：VS Code 選「檔案 → 開啟資料夾」，開教材根目錄；按 Ctrl+P（macOS：⌘P）輸入檔名。macOS 也可在命令選擇區執行 Shell Command: Install code command in PATH。

### 2. 填寫需求，保留原本欄位

**操作位置：** VS Code 編輯器 → worksheets/spec.md（不是終端機）

在既有標題下面填寫自己的內容。下方可貼到「同學回饋」後面，再把方括號換成自己的描述；不要整份覆蓋先前紀錄。

```text
## 這次作業的需求
- 使用者與情境：[誰／何時／想做什麼]
- 必要功能：[新增、編輯、完成，或你選的三項]
- 限制：只處理同一天；名稱不能只有空格；結束要晚於開始。
- 不做：[這次先不做的功能]
- 同學提出的疑問：[實際問到什麼]
- 我修正的描述：[修改前 → 修改後]
```

**預期：** 能說清楚一個生活情境與三項功能。

**卡住時：** 不知道怎麼開始：先選「學生安排讀書與社團」，再寫什麼時間會用。

### 3. 先填五筆預期，不先寫通過

**操作位置：** VS Code 編輯器 → worksheets/cases.md（不是終端機）

將下表加到學習單，預期已列出。現在保留「待測」；Task 3 才填自己的實際結果。

```text
| 案例 | 名稱 | 開始 | 結束 | 預期 | 實際 |
|---|---|---|---|---|---|
| 有效 | 讀書會 | 10:00 | 11:00 | 接受 | 待測 |
| 空白 | 三個空格 | 10:00 | 11:00 | 拒絕 | 待測 |
| 逆序 | 讀書會 | 11:00 | 10:00 | 拒絕 | 待測 |
| 等時 | 讀書會 | 10:00 | 10:00 | 拒絕 | 待測 |
| 邊界 | 讀書會 | 10:00 | 10:01 | 接受 | 待測 |
```

**預期：** 有有效、空白、逆序、等時和一分鐘五筆輸入。

**卡住時：** Markdown 表格在純文字模式看起來有直線是正常的；可用預覽閱讀。

### 4. 存檔、交換閱讀

**操作位置：** VS Code 編輯器 → worksheets/spec.md（不是終端機）

按 Ctrl+S（macOS：⌘S）。請同學只看規格，回答等時、一分鐘行程是否允許；將一個疑問記到同學回饋。

**預期：** 同學回答與規格一致；有具體回饋。

**卡住時：** 沒有同學時自己隔五分鐘再讀，註明這次是自評。

### 本堂交付

- worksheets/spec.md：自己的使用者、範圍、限制
- worksheets/cases.md：四種案例與一分鐘邊界
- 本堂作業紀錄：同學的疑問及你的修改

### 驗收重點

- 需求能由另一位同學重述
- 每個案例先寫預期；實際結果如實記為待測

### 建立作業紀錄

在專案根目錄執行：

```sh
pnpm handin 1
```

打開 submissions/task-1.md 填寫實際結果，交到老師指定平台。檔案已存在時保留原稿；不會自動上傳或評分。舊版教材沒有 handin 時，可直接複製 [空白作業單](assignment-templates/task-1.md)。

<a id="task-2"></a>

## Task 2

### 1. 打開這次要修改的檔案

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

複製這段開檔指令。接下來切換到編輯器分頁，才貼文字或程式。

```text
code --reuse-window src/local.tsx worksheets/ai-log.md AGENTS.md
```

**預期：** 指定檔案出現在編輯器分頁。

**卡住時：** 若 code 找不到：VS Code 選「檔案 → 開啟資料夾」，開教材根目錄；按 Ctrl+P（macOS：⌘P）輸入檔名。macOS 也可在命令選擇區執行 Shell Command: Install code command in PATH。

### 2. 先用搜尋定位標題

**操作位置：** VS Code 編輯器 → src/local.tsx（不是終端機）

按 Ctrl+F（macOS：⌘F），搜尋下方片段。先看清楚 h1 與周圍的表單程式，再交給 AI。

```text
<h1>我的一週 · 本機練習</h1>
```

**預期：** 找到本機練習頁的主標題。

**卡住時：** 搜尋不到表示你可能已改過，搜尋 <h1>；不要去改 src/main.tsx，那是雲端頁面。

### 3. 把完整任務貼給 AI

**操作位置：** 自己的 AI Coding Agent 對話輸入框

先讓 Agent 開啟這份教材資料夾。貼下方任務；沒有 Agent 可直接依下一步手動修改，作業註明人工實作。

```text
請閱讀 AGENTS.md 與 src/local.tsx。
任務：只把本機頁面的 h1 改成「我的學習週」。
限制：不新增套件、不修改資料結構、驗證、雲端設定或 .env。
先說明要改哪個檔案與哪個元素，再做最小修改。
驗收：pnpm test、pnpm build；另由我操作新增、編輯、完成與窄視窗。
回覆修改差異、實際執行的命令與結果；沒有測過的不要寫通過。
```

**預期：** AI 回報實際差異與驗收，未執行的項目明確標示。

**卡住時：** 聊天工具無法改檔時，請它回覆最小差異，你再到編輯器套用。

### 4. 人工備援：只替換 h1 這段

**操作位置：** VS Code 編輯器 → src/local.tsx（不是終端機）

如果 Agent 已正確改完，略過。否則選取原本完整 h1 片段，替換為下方內容，再存檔。

```text
<h1>我的學習週</h1>
```

**預期：** 只有主標題改變，表單及資料保持原有功能。

**卡住時：** 不要用這一行取代整個檔案；只選取 <h1>…</h1>。

### 5. 執行 pnpm test

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

伺服器保持運作時，另開同一資料夾的終端機。這段跑完會回到提示字元；記下結果再進下一步。

```text
pnpm test
```

**預期：** 正式測試 5/5 通過。

**卡住時：** 遇到找不到 package.json：先確認左側檔案總管是教材根目錄。

### 6. 執行 pnpm build

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

伺服器保持運作時，另開同一資料夾的終端機。這段跑完會回到提示字元；記下結果再進下一步。

```text
pnpm build
```

**預期：** TypeScript 與建置成功。

**卡住時：** 遇到找不到 package.json：先確認左側檔案總管是教材根目錄。

### 7. 親自操作後才填驗收

**操作位置：** 瀏覽器 → 終端機顯示的 /local.html

啟動 pnpm dev:local。新增「標題驗收」10:00–11:00 → 編輯為「已改名」→ 勾完成。縮窄視窗，再把實際結果寫入 ai-log.md。

**預期：** 畫面標題為我的學習週；三個互動仍正常。

**卡住時：** 測試通過不代表你已看過畫面；截圖要包含改過的標題。

### 本堂交付

- src/local.tsx 的標題修改
- worksheets/ai-log.md：Prompt、差異、親自操作結果
- 桌面與窄視窗的畫面證據

### 驗收重點

- 修改侷限於畫面且能說明差異
- 新增、編輯、完成仍可操作

### 建立作業紀錄

在專案根目錄執行：

```sh
pnpm handin 2
```

打開 submissions/task-2.md 填寫實際結果，交到老師指定平台。檔案已存在時保留原稿；不會自動上傳或評分。舊版教材沒有 handin 時，可直接複製 [空白作業單](assignment-templates/task-2.md)。

<a id="task-3"></a>

## Task 3

### 1. 執行 pnpm task:check

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

伺服器保持運作時，另開同一資料夾的終端機。這段跑完會回到提示字元；記下結果再進下一步。

```text
pnpm task:check
```

**預期：** 原版 3 個通過、1 個失敗，等時案例是預期缺陷；保留修正前輸出。

**卡住時：** 遇到找不到 package.json：先確認左側檔案總管是教材根目錄。

### 2. 打開這次要修改的檔案

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

複製這段開檔指令。接下來切換到編輯器分頁，才貼文字或程式。

```text
code --reuse-window exercises/validate-event.js exercises/validate-event.test.mjs worksheets/cases.md
```

**預期：** 指定檔案出現在編輯器分頁。

**卡住時：** 若 code 找不到：VS Code 選「檔案 → 開啟資料夾」，開教材根目錄；按 Ctrl+P（macOS：⌘P）輸入檔名。macOS 也可在命令選擇區執行 Shell Command: Install code command in PATH。

### 3. 先找出錯誤條件

**操作位置：** VS Code 編輯器 → exercises/validate-event.js（不是終端機）

按搜尋找到下方這一行。解釋為什麼 10:00 < 10:00 是 false，再改下一步。

```text
if (end < start) return '結束時間必須晚於開始時間。';
```

**預期：** 能指出漏掉等號；不需要改測試。

**卡住時：** 如果已經是 <=，表示修過了；使用舊紀錄說明，不必故意改壞再交作業。

### 4. 只替換這一行並存檔

**操作位置：** VS Code 編輯器 → exercises/validate-event.js（不是終端機）

選取剛才整行，以這行取代。Ctrl+S／⌘S 存檔。

```text
if (end <= start) return '結束時間必須晚於開始時間。';
```

**預期：** 條件從 < 改為 <=，其他驗證保持原樣。

**卡住時：** 修改的是 exercises 下的函式；src/validation.js 是另一份正式雲端驗證。

### 5. 執行 pnpm task:check

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

伺服器保持運作時，另開同一資料夾的終端機。這段跑完會回到提示字元；記下結果再進下一步。

```text
pnpm task:check
```

**預期：** 4 個測試通過、0 個失敗；保留修正後輸出。

**卡住時：** 遇到找不到 package.json：先確認左側檔案總管是教材根目錄。

### 6. 在本機頁面跑同一組輸入

**操作位置：** 瀏覽器 → /local.html

依 Task 1 的表格逐筆輸入。空白名稱請輸入三個空格；每次按新增後記下訊息與是否真的多一張卡片。最後測 10:00–10:01。

**預期：** 有效與一分鐘行程能新增，其餘拒絕並有原因。

**卡住時：** 重複按新增會產生多筆有效行程；看本次前後卡片數，不把舊的等時資料誤認為本次新增成功。

### 7. 執行 pnpm test

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

伺服器保持運作時，另開同一資料夾的終端機。這段跑完會回到提示字元；記下結果再進下一步。

```text
pnpm test
```

**預期：** 正式驗證仍為 5/5；它不能替代上面的練習測試。

**卡住時：** 遇到找不到 package.json：先確認左側檔案總管是教材根目錄。

### 本堂交付

- exercises/validate-event.js 最小修正
- 修正前 3/4、修正後 4/4 的測試輸出
- 五個瀏覽器案例實際結果及原因

### 驗收重點

- 沒有刪除或修改既有測試來湊通過
- 能解釋 < 與 <= 在等時案例的差別

### 建立作業紀錄

在專案根目錄執行：

```sh
pnpm handin 3
```

打開 submissions/task-3.md 填寫實際結果，交到老師指定平台。檔案已存在時保留原稿；不會自動上傳或評分。舊版教材沒有 handin 時，可直接複製 [空白作業單](assignment-templates/task-3.md)。

<a id="task-4"></a>

## Task 4

### 1. 打開這次要修改的檔案

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

複製這段開檔指令。接下來切換到編輯器分頁，才貼文字或程式。

```text
code --reuse-window src/local.tsx worksheets/evidence.md
```

**預期：** 指定檔案出現在編輯器分頁。

**卡住時：** 若 code 找不到：VS Code 選「檔案 → 開啟資料夾」，開教材根目錄；按 Ctrl+P（macOS：⌘P）輸入檔名。macOS 也可在命令選擇區執行 Shell Command: Install code command in PATH。

### 2. 用固定資料操作四次

**操作位置：** 瀏覽器 → /local.html

新增「保存測試」10:00–11:00 → 按這張卡片的編輯 → 改名「保存測試已修改」→ 儲存修改 → 勾完成 → 重新整理。

**預期：** 改名與完成狀態仍存在。

**卡住時：** 必須一直使用同一個網址（含主機與埠號）；localhost 和 127.0.0.1 並不相同。

### 3. 只讀取這個練習的儲存內容

**操作位置：** 瀏覽器開發者工具 → Console；不是 PowerShell

開 F12（或瀏覽器選單 → 開發者工具）並選 Console。確認在自己的 /local.html 後執行下方唯讀程式。若瀏覽器阻擋貼上，改用 Application／Storage → Local Storage 查看相同 key，不必解除貼上保護。

```text
JSON.parse(localStorage.getItem('life-lab.student.events.v1') || 'null')
```

**預期：** 陣列中找到保存測試已修改，completed 為 true。

**卡住時：** 回傳 null 時檢查網址和是否真的成功保存；此命令不會清除或改寫資料。

### 4. 把網址完整貼到另一瀏覽器

**操作位置：** 第二個瀏覽器或新的私人視窗

從網址列複製完整 local.html URL，在另一瀏覽器開啟並比較。回原瀏覽器確認資料還在。

**預期：** 另一瀏覽器通常只有自己的示範資料；原瀏覽器仍保留修改。

**卡住時：** 這是本機儲存邊界。不要為了讓不同瀏覽器相同而覆蓋已有資料。

### 5. 複製記錄格式並填寫

**操作位置：** VS Code 編輯器 → worksheets/evidence.md（不是終端機）

加到文件末尾，填實際觀察；若功能正常，結論寫「架構限制，不需修程式」。

```text
## Task 4 保存驗收
- 瀏覽器 A／完整網址：
- 瀏覽器 B／完整網址：
- 步驟：新增 → 改名 → 完成 → 重整 → 換瀏覽器
- 預期：
- 實際：
- 重現次數：
- 結論與理由：
- 若需修正，修改後重測結果：
```

**預期：** 同學照步驟可以重現你的觀察。

**卡住時：** 尚未驗證的欄位保留待測，不填想像中的結果。

### 本堂交付

- 新增 → 改名 → 完成 → 重整的觀察紀錄
- 兩個瀏覽器的網址與結果
- 一份可重現的問題／限制紀錄

### 驗收重點

- 分得清同一 origin 保存與跨瀏覽器同步
- 能從觀察判斷是否真的需要修程式

### 建立作業紀錄

在專案根目錄執行：

```sh
pnpm handin 4
```

打開 submissions/task-4.md 填寫實際結果，交到老師指定平台。檔案已存在時保留原稿；不會自動上傳或評分。舊版教材沒有 handin 時，可直接複製 [空白作業單](assignment-templates/task-4.md)。

<a id="task-5"></a>

## Task 5

### 1. 先完成本頁上方 Git 準備

**操作位置：** 本頁「執行指令」→ Task 5

ZIP 路線先建自己的空 repo；Clone 路線略過初始化。依上方指令設定作者、保存前四堂、開 feature/project-title，推送修改後再接這份 PR 操作。

**預期：** 自己的 GitHub 看得到 feature/project-title 分支。

**卡住時：** 若分支已存在，用 git switch feature/project-title 繼續；不要重複建立同名分支。

### 2. 打開這次要修改的檔案

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

複製這段開檔指令。接下來切換到編輯器分頁，才貼文字或程式。

```text
code --reuse-window src/main.tsx
```

**預期：** 指定檔案出現在編輯器分頁。

**卡住時：** 若 code 找不到：VS Code 選「檔案 → 開啟資料夾」，開教材根目錄；按 Ctrl+P（macOS：⌘P）輸入檔名。macOS 也可在命令選擇區執行 Shell Command: Install code command in PATH。

### 3. 確認雲端標題真的有改

**操作位置：** VS Code 編輯器 → src/main.tsx（不是終端機）

搜尋 <h1>；將「我的一週」改成自己的作品名稱，例如下方片段。如果剛才已修改並 push，略過這一步。

```text
<h1>我的課業與社團行事曆</h1>
```

**預期：** git diff src/main.tsx 可看到自己的改動。

**卡住時：** 只有改未提交時依上方 test → build → add → commit → push 步驟完成，不要跳過存檔。

### 4. 建立 PR，先核對四個欄位

**操作位置：** GitHub → 自己的 repo → Pull requests → New pull request

base repository 選自己的 repo；base 選 main；head repository 也選自己的 repo；compare 選 feature/project-title。按 Create pull request。

**預期：** Files changed 顯示作品標題修改。

**卡住時：** 若預設指向老師 repo，先更改 base repository。No changes 時確認 push 的分支。

### 5. 複製 PR 內文，再補實際結果

**操作位置：** GitHub → PR 的描述欄

貼下方格式，填自己實測結果後送出；測過才把 [ ] 改成 [x]。

```text
## 目的
讓首頁顯示我這組作品的名稱。

## 修改
- src/main.tsx：h1 標題

## 驗收
- [ ] pnpm test（實際結果：）
- [ ] pnpm build（實際結果：）
- [ ] 瀏覽器看過標題（網址／結果：）

## 尚未驗證
- 

## 同學回饋
- 
```

**預期：** 同學可依說明查核改動。

**卡住時：** 不能把未跑過的雲端測試寫成通過。

### 6. 合併後更新本機 main

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

同學驗收後在 GitHub 按 Merge pull request 並確認。回終端機先 git status，若有未保存工作先提交到原分支；乾淨才執行下方命令。

```text
git switch main
git pull --ff-only
git log -1 --oneline
```

**預期：** 本機 main 包含合併後作品名稱，記下最後 commit。

**卡住時：** pull 失敗或有衝突時停下看錯誤，不使用 reset --hard。

### 本堂交付

- 自己 repo 的 PR 連結
- Files changed 與測試結果
- 合併後 main 的 commit SHA

### 驗收重點

- base 是自己的 repo，差異只有本次目的
- 知道本機 commit 與遠端 push 的不同

### 建立作業紀錄

在專案根目錄執行：

```sh
pnpm handin 5
```

打開 submissions/task-5.md 填寫實際結果，交到老師指定平台。檔案已存在時保留原稿；不會自動上傳或評分。舊版教材沒有 handin 時，可直接複製 [空白作業單](assignment-templates/task-5.md)。

<a id="task-6"></a>

## Task 6

### 1. 打開這次要修改的檔案

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

複製這段開檔指令。接下來切換到編輯器分頁，才貼文字或程式。

```text
code --reuse-window schema.sql .env.example CLOUD_SETUP.md
```

**預期：** 指定檔案出現在編輯器分頁。

**卡住時：** 若 code 找不到：VS Code 選「檔案 → 開啟資料夾」，開教材根目錄；按 Ctrl+P（macOS：⌘P）輸入檔名。macOS 也可在命令選擇區執行 Shell Command: Install code command in PATH。

### 2. 將教材 SQL 貼到專用專案

**操作位置：** Supabase Dashboard → 自己新建的教學專案 → SQL Editor → New query

回 VS Code 的 schema.sql：Ctrl+A、Ctrl+C（macOS：⌘A、⌘C）。切到 SQL Editor 貼上，確認專案名稱後按 Run；只在新的專用專案執行一次。

**預期：** Table Editor 可找到 events；SQL 沒有錯誤。

**卡住時：** 已存在 events 就停止核對專案，不刪表、不重複建表。SQL 要貼 SQL Editor，不是終端機。

### 3. 只在本機填兩個設定

**操作位置：** 本頁「執行指令」→ 建立並編輯本機雲端設定

先依上方命令建立 .env.local。從 Supabase Connect／API 設定複製自己的 Project URL 與 publishable key，填入對應等號右邊；保留變數名稱，不要加反引號。

```text
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_REPLACE_ME
```

**預期：** 兩行不再含 YOUR_PROJECT 或 REPLACE_ME。

**卡住時：** 僅使用新版 sb_publishable_ 開頭公開 key；不要貼 secret key。兩個真實值不用放進作業。

### 4. 啟動雲端頁面

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

先在舊伺服器的終端機按 Ctrl+C，再執行。這段保持運作；後續命令要開第二終端機。

```text
pnpm dev:cloud
```

**預期：** 瀏覽器首頁顯示登入表單；本段不會自行結束。

**卡住時：** 仍顯示接線提示時檢查 .env.local 的名稱和值是否正確，儲存後再重啟。

### 5. 設定回跳，再準備兩個帳號

**操作位置：** Supabase → Authentication → URL Configuration／Users

把終端機 Local 網址的 origin（例如 http://127.0.0.1:5173，不含路徑）填入 Site URL 與 Redirect URLs。用自己控制的 A/B 信箱在作品註冊、確認 email；課堂寄信受限時請老師在專用專案 Users 建立已確認測試帳號。

**預期：** 兩個不同帳號都能登入；確認信回到正確的本機網站。

**卡住時：** 收到 Invalid login credentials 請核對帳號密碼與是否已確認；不要關掉 RLS。

### 6. 先手動測，再做 API 驗收

**操作位置：** 瀏覽器 → 雲端首頁；第二終端機 → 教材根目錄

A 登入 → 新增「雲端驗收」→ 編輯 → 完成 → 重整。另一瀏覽器登入 B 應看不到 A 的行程。依上方指令填好 .env.test.local 後，在第二終端機跑下方命令。

```text
pnpm test:cloud
```

**預期：** 測試全部 PASS；保留日期與輸出摘要。

**卡住時：** 會真的連雲端並留下測試行程；沒有準備帳號就先標待驗收。

### 本堂交付

- A 新增、改名、完成、重整的結果
- B 無法讀到 A 的行程及真實 API 測試結果
- 設定位置說明；不繳交帳密或 .env

### 驗收重點

- 以使用者 A/B 驗證，不用管理員畫面代替
- pnpm test:cloud 真正通過，未接線標為待完成

### 建立作業紀錄

在專案根目錄執行：

```sh
pnpm handin 6
```

打開 submissions/task-6.md 填寫實際結果，交到老師指定平台。檔案已存在時保留原稿；不會自動上傳或評分。舊版教材沒有 handin 時，可直接複製 [空白作業單](assignment-templates/task-6.md)。

<a id="task-7"></a>

## Task 7

### 1. 匯入自己的作品

**操作位置：** Vercel → Add New → Project → Import Git Repository

選自己的 life-dev-lab-course repo。核對帳號與 repo，Framework 選 Vite，Root Directory 為根目錄，Output Directory 為 dist；Install Command 使用 pnpm install --frozen-lockfile。Build Command 核對下方。

```text
pnpm test && pnpm build
```

**預期：** 專案連到自己的 repo，建置先跑測試。

**卡住時：** 這個命令填到 Vercel Build Command 欄位；不是 JSON，也不是貼到網站內容。

### 2. 填公開設定、部署、驗收登入

**操作位置：** Vercel Project → Settings → Environment Variables

從自己的 .env.local 填兩個 VITE_* 值，分別選 Preview 和 Production。部署後開正式 URL；Supabase Site URL 設正式 origin，Redirect URLs 加正式與要驗收的 Preview origin。設定變更後重新部署。

**預期：** 正式首頁可登入、新增、重整、登出。

**卡住時：** 第一次匯入可能直接發布。先確認這是自己的教學專案；Preview 若受保護請使用平台授權的分享方式。

### 3. 建立測試失敗的獨立分支

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

先確認 git status 乾淨且 Task 5 PR 已合併。執行後把 git branch --show-current 的結果記下；必須是 practice/ci-gate。

```text
git switch main
git pull --ff-only
git switch -c practice/ci-gate
git branch --show-current
```

**預期：** 目前在 practice/ci-gate，不在 main。

**卡住時：** 若分支已存在，改用 git switch practice/ci-gate；不要在 main 進行破壞條件的練習。

### 4. 打開這次要修改的檔案

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

複製這段開檔指令。接下來切換到編輯器分頁，才貼文字或程式。

```text
code --reuse-window src/validation.js
```

**預期：** 指定檔案出現在編輯器分頁。

**卡住時：** 若 code 找不到：VS Code 選「檔案 → 開啟資料夾」，開教材根目錄；按 Ctrl+P（macOS：⌘P）輸入檔名。macOS 也可在命令選擇區執行 Shell Command: Install code command in PATH。

### 5. 只在練習分支把 <= 改成 <

**操作位置：** VS Code 編輯器 → src/validation.js（不是終端機）

搜尋 if(end<=start)，只把 <= 改為 <。存檔後執行下一步。這次修改正式雲端驗證，與 Task 3 的 exercises 檔案不同。

```text
if(end<start) return '同一天的結束時間必須晚於開始時間。';
```

**預期：** 一個比較運算子被改壞；測試應能偵測。

**卡住時：** 找不到時搜尋「同一天的結束時間」；不要修改測試檔。

### 6. 執行 pnpm test

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

伺服器保持運作時，另開同一資料夾的終端機。這段跑完會回到提示字元；記下結果再進下一步。

```text
pnpm test
```

**預期：** 預期 4/5 通過，reversed and equal times rejected 失敗；這次失敗是練習目標。

**卡住時：** 遇到找不到 package.json：先確認左側檔案總管是教材根目錄。

### 7. 將故意失敗版本只推到練習分支

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

先確認仍在 practice/ci-gate。此段僅為觀察 CI 失敗而提交；一般作業要測試通過才提交。到 Vercel Deployments 點這次 Preview → Build Logs。

```text
git add src/validation.js
git commit -m "test: demonstrate equal-time CI failure"
git push -u origin practice/ci-gate
```

**預期：** Preview 因 pnpm test 失敗；正式版仍是原版本。

**卡住時：** 若有 PR，先保持未合併。建置意外成功就檢查 Vercel buildCommand 是否真的包含測試。

### 8. 恢復正確條件並存檔

**操作位置：** VS Code 編輯器 → src/validation.js（不是終端機）

將剛才那行換回下方；不要刪除測試。

```text
if(end<=start) return '同一天的結束時間必須晚於開始時間。';
```

**預期：** 拒絕等時行程的規則恢復。

**卡住時：** 保留失敗部署連結，修正會建立新部署，便於比較。

### 9. 執行 pnpm test

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

伺服器保持運作時，另開同一資料夾的終端機。這段跑完會回到提示字元；記下結果再進下一步。

```text
pnpm test
```

**預期：** 5/5 通過後才能進下一步。

**卡住時：** 遇到找不到 package.json：先確認左側檔案總管是教材根目錄。

### 10. 執行 pnpm build

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

伺服器保持運作時，另開同一資料夾的終端機。這段跑完會回到提示字元；記下結果再進下一步。

```text
pnpm build
```

**預期：** 建置成功後才能推送修正版。

**卡住時：** 遇到找不到 package.json：先確認左側檔案總管是教材根目錄。

### 11. 推送修復，對照兩次部署

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

執行後重新看同一分支的最新 Preview。確認新部署成功，實際開頁面操作，記下兩次部署與 commit。此練習分支可保留，不必合併。

```text
git add src/validation.js
git commit -m "fix: restore equal-time validation"
git push origin practice/ci-gate
git log -2 --oneline
```

**預期：** 失敗與成功兩筆紀錄都能追溯；正式版沒有被故意失敗版本取代。

**卡住時：** 新 Preview 的登入回跳設定也需核對。

### 本堂交付

- 正式網址與 PR Preview 網址
- 失敗部署及修好後部署的連結
- 兩次 commit SHA 與 Build Logs 結果

### 驗收重點

- 故意失敗只在功能分支；修好才合併
- 能解釋 Vercel build 內測試如何阻止這次發布

### 建立作業紀錄

在專案根目錄執行：

```sh
pnpm handin 7
```

打開 submissions/task-7.md 填寫實際結果，交到老師指定平台。檔案已存在時保留原稿；不會自動上傳或評分。舊版教材沒有 handin 時，可直接複製 [空白作業單](assignment-templates/task-7.md)。

<a id="task-8"></a>

## Task 8

### 1. 先確認要交付哪個版本

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

在自己確認要展示的分支執行。若仍在 Task 7 練習分支，先保存工作；回到已通過驗收的 main 後再整理正式作業。

```text
git status
git branch --show-current
git log -1 --format=%H
```

**預期：** 記下 main 的 SHA，並到 Vercel 正式部署核對其來源 commit。

**卡住時：** 最新 main 不一定就是目前正式部署；兩邊都要核對。

### 2. 打開這次要修改的檔案

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

複製這段開檔指令。接下來切換到編輯器分頁，才貼文字或程式。

```text
code --reuse-window worksheets/evidence.md README.md
```

**預期：** 指定檔案出現在編輯器分頁。

**卡住時：** 若 code 找不到：VS Code 選「檔案 → 開啟資料夾」，開教材根目錄；按 Ctrl+P（macOS：⌘P）輸入檔名。macOS 也可在命令選擇區執行 Shell Command: Install code command in PATH。

### 3. 建立最終報告檔

**操作位置：** VS Code → 新增檔案 → 另存為 FINAL_REPORT.md

在教材根目錄建立新檔；已存在就更新內容。貼下方格式並填寫自己的資料。

```text
# 我的全端作品

## 使用者與問題
[一句話說明]

## 可重現的交付
- 正式網址：
- GitHub repo：
- PR：
- 正式部署的 commit SHA：
- 設定與啟動：參考 SETUP.md、CLOUD_SETUP.md

## 驗收結果
| 項目 | 預期 | 實際／證據 | 日期 |
|---|---|---|---|
| 新增、編輯、完成、重整 | 保存成功 | 待測 | |
| 空白、逆序、等時 | 拒絕 | 待測 | |
| A/B 權限 | 相互隔離 | 待測 | |
| 手機與鍵盤 | 可完成核心流程 | 待測 | |

## AI 協作的一次修正
- 我的需求：
- AI 建議與實際差異：
- 我發現的問題：
- 驗證方式與結果：

## 已知限制與未完成
- 

## 同學重現紀錄
- 對方照哪些步驟操作：
- 卡住的位置與我的修正：
```

**預期：** 報告含真實連結、結果和限制。

**卡住時：** 不要把本機 localhost 網址當成正式網址，也不要貼 .env 或帳密。

### 4. 執行 pnpm test

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

伺服器保持運作時，另開同一資料夾的終端機。這段跑完會回到提示字元；記下結果再進下一步。

```text
pnpm test
```

**預期：** 正式測試通過；記錄實際輸出。

**卡住時：** 遇到找不到 package.json：先確認左側檔案總管是教材根目錄。

### 5. 執行 pnpm build

**操作位置：** VS Code → 終端機 → 新增終端機；位置是含 package.json 的教材根目錄

伺服器保持運作時，另開同一資料夾的終端機。這段跑完會回到提示字元；記下結果再進下一步。

```text
pnpm build
```

**預期：** 建立成功；此結果仍不代替真實雲端驗收。

**卡住時：** 遇到找不到 package.json：先確認左側檔案總管是教材根目錄。

### 6. 按三分鐘順序展示

**操作位置：** 正式網站＋FINAL_REPORT.md

0:00–0:30 說明使用者；0:30–1:30 操作登入、新增、重整；1:30–2:30 展示一次失敗與修正；2:30–3:00 說限制。請同學用 README 重現一次。

**預期：** 講得出自己做的判斷，有成功與失敗證據。

**卡住時：** 網路不穩時播放預先保存的畫面紀錄，清楚標示錄製展示。

### 本堂交付

- 正式網址、repo、PR、對應部署 commit
- FINAL_REPORT.md：需求、AI 協作、驗收、限制
- 三分鐘展示與一次同學重現紀錄

### 驗收重點

- 每項結果有版本與證據；失敗與待測如實記錄
- 別人依 README 能啟動並理解作品

### 建立作業紀錄

在專案根目錄執行：

```sh
pnpm handin 8
```

打開 submissions/task-8.md 填寫實際結果，交到老師指定平台。檔案已存在時保留原稿；不會自動上傳或評分。舊版教材沒有 handin 時，可直接複製 [空白作業單](assignment-templates/task-8.md)。


## 官方參考（核對日期 2026-10-19）

- [VS Code 開檔 CLI](https://code.visualstudio.com/docs/configure/command-line)
- [Vercel GitHub 部署](https://vercel.com/docs/git/vercel-for-github)
- [Supabase React 接線](https://supabase.com/docs/guides/getting-started/quickstarts/reactjs)
