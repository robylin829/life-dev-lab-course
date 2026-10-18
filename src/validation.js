// This rule belongs to the application. Database CHECK constraints are a second boundary.
export function validateEvent({title,date,start,end}) {
  if (typeof title !== 'string' || !title.trim()) return '請填寫行程名稱。';
  if (title.trim().length > 80) return '名稱最多 80 字。';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date || '')) return '請選擇日期。';
  const [y,m,d]=(date || '').split('-').map(Number);
  const day=new Date(y,m-1,d);
  if(day.getFullYear()!==y||day.getMonth()!==m-1||day.getDate()!==d) return '日期不存在。';
  const time=/^(?:[01]\d|2[0-3]):[0-5]\d$/;
  if(!time.test(start||'')||!time.test(end||'')) return '請填寫完整的開始與結束時間。';
  if(end<=start) return '同一天的結束時間必須晚於開始時間。';
  return '';
}
