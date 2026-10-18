# Task 7：把自己的作品部署並驗收

[線上互動版](https://life-development-lab.vercel.app/#/tasks/7) · [任務目錄](README.md)

## 任務目標

得到可登入的正式網址、分支預覽與能阻止壞版本的建置檢查。

- 操作時間：約 45 分鐘
- 開始前：完成 Task 6，真實雲端測試通過；GitHub 副本可推送。

## 先理解：Development / Preview / Production

本機用來修改；Preview 給每個變更做驗收；Production 是交付使用者的版本。Vercel Preview 仍通常執行正式的 Vite build。

## 步驟 1：先讓本機能通過建置

在全端起始專案完成本機與 Supabase 實作，再執行測試與建置。範本 vercel.json 的 buildCommand 先執行測試；失敗就不產生可發布的新版本。

```text
pnpm test
pnpm build
pnpm preview
```

**預期結果**

可開 preview 顯示的本機網址，完成登入 → 新增 → 重整 → 登出流程。

<details>
<summary>卡住了？查看排錯提示</summary>

找不到環境變數時確認 .env.local；建置時設定必須存在。純單元測試成功仍不代表雲端登入與 RLS 已驗證。

</details>

## 步驟 2：把自己的 repo 匯入 Vercel

在 Vercel → Add New → Project 匯入自己的 life-dev-lab-course 副本。確認帳號、repo、production branch main、Framework Vite、Root Directory 為專案根目錄。第一次匯入可能直接建立正式部署，先確認教材與虛構資料可公開。

**預期結果**

專案設定對應自己的 repo；安裝使用 pnpm lockfile，輸出目錄 dist。

<details>
<summary>卡住了？查看排錯提示</summary>

找不到 repo 時檢查 GitHub integration 的 repo 授權。不要把所有私人 repo 都開放，只選此專案。

</details>

## 步驟 3：設定環境變數與登入回跳

在 Vercel Project Settings → Environment Variables 加入下列兩項，選 Preview 與 Production；正式作品可使用不同的測試／正式 Supabase 專案。新增或修改後建立新部署。在 Supabase URL Configuration 設正式 Site URL，並加入這次正式與預覽的精確 origin 作 Redirect URLs。

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY

# 這是名稱；值只填到自己的 Vercel 設定頁。
# 不設定 secret key、service_role 或資料庫密碼。
```

**預期結果**

新部署出現登入畫面；確認信回到正確網站而非 localhost。

<details>
<summary>卡住了？查看排錯提示</summary>

舊部署不會因改環境變數自動更新。重啟本機或重新部署後再測。預覽網址可能要求 Vercel 登入，先確認老師能開正式網址。

</details>

## 步驟 4：用 PR Preview 練習驗收

開新分支改作品副標題，commit 並 push，再開 PR。等待 Vercel bot 的 Preview 連結。用手機、鍵盤和兩個測試帳號驗收後，再合併 main；確認正式網址對應新的部署。

```text
git switch -c feature/project-subtitle
# 改 src/main.tsx 的副標題後
git add src/main.tsx
git commit -m "docs: 說明作品用途"
git push -u origin feature/project-subtitle
```

**預期結果**

分支有獨立預覽 URL，合併後正式網址顯示新副標題；記下 commit SHA 與部署連結。

<details>
<summary>卡住了？查看排錯提示</summary>

Preview 的環境變數、Auth redirect 與部署保護可不同；不要只用 localhost 的結果推論預覽一定正常。

</details>

## 步驟 5：驗證測試真的能擋住壞版本

僅在功能分支把 <= 改成 <，push 後觀察 Vercel build 因 pnpm test 失敗。修回 <=、再次提交，確認預覽成功後才考慮合併。進階者加入範本 ci.yml，讓 GitHub PR 上也顯示驗證結果。

```text
pnpm test
# 範本 vercel.json：
"buildCommand": "pnpm test && pnpm build"
```

**預期結果**

壞版本建置失敗，既有正式網址繼續服務；修復後新版本成功。沒有以移除測試解決。

<details>
<summary>卡住了？查看排錯提示</summary>

單獨新增 GitHub Actions YAML 不會自動阻擋 Vercel 正式網域指派。若改為獨立 CI，需到 Vercel Deployment Checks 選取該 GitHub check；GitHub merge gate 也須另設。

</details>

## 步驟 6：上線後，留下回復方法

在 Vercel Deployments 查看版本、狀態與 build logs；確認登入與資料流程。若需要回復，先辨識最後正常部署與對應 commit，再依平台的 Rollback 操作回到已確認版本。這裡先演練判斷，不必真的回復正式網站。

**預期結果**

作品記錄包含正式 URL、版本、驗收日期與已知限制。能說明回復前端不會自動回復資料庫資料。

<details>
<summary>卡住了？查看排錯提示</summary>

環境變數修改後要新建部署；回復舊程式可能不相容新資料結構。課堂範本不進行破壞性資料遷移。

</details>

## 驗收與提交

- [ ] 正式網址與 PR Preview 都已操作驗收
- [ ] 在功能分支觀察過失敗測試阻止建置

在 [操作證據](../worksheets/evidence.md) 記下：記錄正式 URL、Preview URL、commit SHA、測試成功與失敗的建置紀錄。

此清單是自評，不代表教師網站已連線驗證你的專案。

## 觀念檢核

修改 Vercel 的 VITE_* 環境變數後，已建好的網頁會自動換值嗎？

1. 會，所有頁面即時更新
2. 不會，需要重新建置部署
3. 只要改 GitHub repo 名稱

<details>
<summary>作答後查看解析</summary>

答案：2。Vite 在 build 時將 VITE_* 放進瀏覽器 bundle；變更後需要新部署。

</details>

## 進階挑戰

另外設定 Deployment Checks；說明它與單純新增 Actions YAML 有何不同。

---

[← Task 6](task6.md) · [Task 8 →](task8.md)


## 可直接複製的當堂指令

[Windows · PowerShell](../RUNBOOK.md#windows-task7)


## 可直接複製的當堂指令

[macOS · Terminal](../RUNBOOK.md#mac-task7)


## 可直接複製的當堂指令

[Ubuntu／WSL · bash](../RUNBOOK.md#linux-task7)
