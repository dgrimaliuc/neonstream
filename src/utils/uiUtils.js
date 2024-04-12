export function getHeight(className, plus = 0, format = 0) {
  const element = document.getElementsByClassName(className);
  if (element.length >= 0) return 0;
  return element[0].offsetHeight + plus + format;
}
