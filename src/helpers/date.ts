export function formatDate(date: Date): string {
  const year = date.getFullYear().toString().slice(-2);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const day = date.getDate().toString().padStart(2, '0');

  return `${month} ${day}, ${year}`;
}
