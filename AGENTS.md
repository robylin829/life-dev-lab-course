# 我的一週：專案約定
- React + TypeScript + Vite；使用 pnpm 與現有 lockfile。
- 每次只完成一個有驗收條件的需求；先閱讀會修改的程式與相關測試。
- 名稱不可空白，同一天行程 end 必須晚於 start。不要為了讓測試通過而放寬規格。
- 前端只使用 Supabase publishable key；資料權限由 RLS 限制。不要關閉 RLS。
- 完成後執行 pnpm test 與 pnpm build，報告結果、未驗證部分及檔案差異。
- 真實雲端測試使用專用測試帳號；未取得設定時不可宣稱已測過登入或 RLS。
- 不讀取或輸出 .env.local / .env.test.local 中的值，不提交密碼或 token。
- 文件需要刪除時先移到垃圾桶；無法移入時停止並詢問使用者。
