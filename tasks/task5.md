# Task 5：把修改送進自己的 Pull Request

[線上互動版](https://life-development-lab.vercel.app/#/tasks/5) · [任務目錄](README.md)

## 任務目標

完成自己的 repo、功能分支、PR 與一次可追溯的回復。

- 操作時間：約 45 分鐘
- 開始前：完成 Task 0–4，自己的 GitHub Fork 或 ZIP 副本已準備。

## 先理解：Git ≠ GitHub

Git 在本機記錄版本；GitHub 託管遠端儲存庫與協作。commit 只留下本機版本，push 後同伴才看得到。

## 步驟 1：確認自己的教材來源

先完成 Task 0。Clone 路線：已從自己的 Fork clone，直接查看 git status 與 git remote -v，origin 應指向自己的 repo。ZIP 路線：沒有 .git，先在 GitHub 建立空的 life-dev-lab-course（不另外建立 README），再 git init -b main，設定作者與 origin。兩種路線擇一。

```text
git status
git remote -v

# 只有 ZIP 路線才執行下列三行
# git init -b main
# git remote add origin https://github.com/YOUR-USERNAME/life-dev-lab-course.git
# git status
```

**預期結果**

目前工作目錄是自己的教材；origin 為自己的 repo。Clone 後不用再 init 或 add origin。

<details>
<summary>卡住了？查看排錯提示</summary>

origin 若指向老師的 repo，先在 GitHub Fork，再用 git remote set-url origin 加上自己的副本 URL。不要往老師 main 推送。

</details>

## 步驟 2：保存前四堂的練習成果

把作者名稱與 email 換成自己的，檢查 .gitignore，再暫存前四堂的修改。先用 git diff --cached 確認只有教材與練習；.env.local 和 node_modules 不應出現。Clone 路線若尚未改任何檔案，先在 worksheets/spec.md 填寫需求。

```text
git config user.name "你的提交名稱"
git config user.email "你的 GitHub 提交 email"
git status
git add .
git diff --cached
git commit -m "feat: 完成前四堂本機練習"
git push -u origin main
```

**預期結果**

自己的 GitHub repo 能看到需求、畫面修改與驗證修正。

<details>
<summary>卡住了？查看排錯提示</summary>

Nothing to commit 表示沒有新變更。作者可用 GitHub noreply email；若暫存意外包含秘密，先停止提交並取消暫存該檔案。

</details>

## 步驟 3：做一個小修改，再開 PR

開分支；在 src/main.tsx 將主標題「我的一週」改為自己的作品名稱。檢查差異並執行測試。push 後到 GitHub 選 Compare & pull request；base repository 選自己的 Fork（不要選老師的 repo），base 選 main、compare 選此分支。填寫改動目的、驗證方式，邀同學檢視 Files changed。

```text
git switch -c feature/project-title
# 在編輯器修改 src/main.tsx 的 h1
git diff
pnpm test
pnpm build
git add src/main.tsx
git commit -m "feat: 設定我的作品名稱"
git push -u origin feature/project-title
```

**預期結果**

PR 只顯示有目的的修改。等同學看過且驗證通過，再按 Merge pull request。

<details>
<summary>卡住了？查看排錯提示</summary>

No changes 表示尚未儲存或未提交；PR 不會自動代表測試成功，也不一定代表已正式發布。

</details>

## 步驟 4：用新版本回復，而非抹除歷史

合併後更新本機 main，再開回復練習分支。在 git log 找到剛才修改 h1 的普通提交 SHA（不要選 merge commit）。用真實 SHA 取代下方佔位文字。

```text
git switch main
git pull --ff-only
git switch -c practice/revert-title
git log --oneline
git revert --no-edit YOUR_TITLE_COMMIT_SHA
git log --oneline
pnpm test
```

**預期結果**

新增一筆 Revert 提交，原提交仍存在。比較標題回到原樣；不必把練習分支合回 main。

<details>
<summary>卡住了？查看排錯提示</summary>

先確保工作區乾淨。若產生衝突，停下與同學檢查差異，不使用 reset --hard 清除作品。

</details>

## 驗收與提交

- [ ] PR 在自己的 repo，差異與驗收清楚
- [ ] 知道 origin、commit、push 與 revert 的用途

在 [操作證據](../worksheets/evidence.md) 記下：貼上自己的 PR URL、commit SHA 與同學驗收結果。

此清單是自評，不代表教師網站已連線驗證你的專案。

## 觀念檢核

commit 完成後，GitHub 一定已經看得到變更嗎？

1. 是，commit 就是上傳
2. 否，還需要 push 到遠端
3. 只要關掉編輯器就會上傳

<details>
<summary>作答後查看解析</summary>

答案：2。commit 先記錄在本機；push 才把本機版本送到遠端。

</details>

## 進階挑戰

在獨立分支做一次 revert，觀察新舊提交都保留。

---

[← Task 4](task4.md) · [Task 6 →](task6.md)


## 可直接複製的當堂指令

[Windows · PowerShell](../RUNBOOK.md#windows-task5)


## 可直接複製的當堂指令

[macOS · Terminal](../RUNBOOK.md#mac-task5)


## 可直接複製的當堂指令

[Ubuntu／WSL · bash](../RUNBOOK.md#linux-task5)


## 逐格操作與作業

[開檔、修改、驗收、繳交：Task 5](../HOMEWORK.md#task-5) · [空白作業單](../assignment-templates/task-5.md)
