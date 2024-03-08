export function throttling(func, wait) {
  let throttle = false;

  return () => {
    if (!throttle) {
      throttle = true;
      func();
      setTimeout(() => {
        throttle = false;
      }, wait);
    }
  };
}
