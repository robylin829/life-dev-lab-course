// Task 3：這個練習刻意漏掉「時間相同」。先執行 pnpm task:check 再修改。
// 本函式只用在 local.html；正式雲端程式使用 src/validation.js。
export function validateEvent(title, start, end) {
 if (!title.trim()) return '請填寫行程名稱。';
 if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(start) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(end)) return '請填寫有效時間。';
 if (end < start) return '結束時間必須晚於開始時間。';
 return '';
}
