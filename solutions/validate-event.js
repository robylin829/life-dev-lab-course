// 課後參考：先完成自己的修正，再對照這個條件。
export function validateEvent(title, start, end) {
 if (!title.trim()) return '請填寫行程名稱。';
 if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(start) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(end)) return '請填寫有效時間。';
 if (end <= start) return '結束時間必須晚於開始時間。';
 return '';
}
