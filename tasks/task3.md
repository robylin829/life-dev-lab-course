# Task 3：修好「10:00–10:00」的缺陷

[線上互動版](https://life-development-lab.vercel.app/#/tasks/3) · [任務目錄](README.md)

## 任務目標

讓一個真實失敗測試由紅轉綠，並在行事曆確認修正。

- 操作時間：約 45 分鐘
- 開始前：完成 Task 1 的案例表；開啟 /local.html。

## 先理解：測試在比較預期與實際

exercises/validate-event.js 刻意漏掉時間相等；pnpm task:check 只檢查這個練習。pnpm test 檢查正式雲端程式，兩者通過不互相代替。

## 步驟 1：先重現，再猜原因

在 /local.html 新增「讀書」10:00–10:00，觀察它竟然被接受。執行練習測試，將實際結果寫進 worksheets/cases.md。

```text
pnpm task:check
```

**預期結果**

4 個測試中 3 個通過、1 個失敗；失敗案例是開始等於結束。這是教材刻意保留的缺陷。

<details>
<summary>卡住了？查看排錯提示</summary>

若四項已通過，先確認同學或 AI 是否已修好；不必破壞自己的修改重做。

</details>

## 步驟 2：查看實際被呼叫的驗證函式

開啟 exercises/validate-event.js，追到 src/local.tsx 中的 import。比較 end < start 與 end <= start，先說出兩者的差別，再修改。

```text
// 修改目標：exercises/validate-event.js
// 觀察：< 沒有涵蓋相等；<= 包含相等。
```

**預期結果**

修改只補上相等條件，沒有放寬名稱檢查或移除測試。

<details>
<summary>卡住了？查看排錯提示</summary>

不要直接把驗證函式改成永遠拒絕；有效行程仍必須能新增。

</details>

## 步驟 3：重跑四案例並做一分鐘測試

再次執行 pnpm task:check，再在 /local.html 親自輸入四案例與 10:00–10:01。可用站內互動試教先預測兩個版本結果；但站內模擬不會讀你的檔案。

```text
pnpm task:check
pnpm test
pnpm build
```

**預期結果**

練習測試 4/4 通過；有效與一分鐘可新增，其餘顯示拒絕原因。

<details>
<summary>卡住了？查看排錯提示</summary>

修正沒有反映時確認儲存檔案、dev server 是否還在運作、網址是否為 /local.html。

</details>

## 步驟 4：記錄你如何證明修正

比較 git diff，把失敗輸出、修正行與通過結果寫入 worksheets/ai-log.md。solutions/validate-event.js 提供課後參考，先嘗試再對照。

**預期結果**

同學可依你的輸入與步驟重現，不需要相信「AI 說好了」。

<details>
<summary>卡住了？查看排錯提示</summary>

只貼成功畫面不足以解釋缺陷；加入修正前結果。

</details>

## 驗收與提交

- [ ] 練習測試由 3/4 變成 4/4
- [ ] 在實際本機畫面驗證等時拒絕與一分鐘接受

在 [操作證據](../worksheets/evidence.md) 記下：記錄失敗案例、修改檔案與行為，以及修正後四案例與一分鐘測試結果。

此清單是自評，不代表教師網站已連線驗證你的專案。

## 觀念檢核

把 end < start 改成 end <= start，新增拒絕了哪種情況？

1. 所有有效行程
2. 開始時間等於結束時間
3. 所有一分鐘行程

<details>
<summary>作答後查看解析</summary>

答案：2。<= 同時涵蓋早於與等於；end > start 的行程仍通過。

</details>

## 進階挑戰

增加一個測試保護 10:00–10:01，避免有人用永遠拒絕的實作假裝修好。

---

[← Task 2](task2.md) · [Task 4 →](task4.md)
