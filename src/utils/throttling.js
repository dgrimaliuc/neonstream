export function throttling(func, wait) {
  let throttle = false;

  return (...args) => {
    if (!throttle) {
      throttle = true;
      func.apply(this, args)
      setTimeout(() => {
        throttle = false;
      }, wait);
    }
  };
}
