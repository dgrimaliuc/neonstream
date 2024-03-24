export function getYear(date) {
  return date ? new Date(date).getFullYear() : '';
}

export function getPlayTime(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
}
