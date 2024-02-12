export function useTimer(callback, timeout) {
  const timer = setTimeout(callback, timeout);

  const clearTimer = () => {
    clearTimeout(timer);
    // callback();
  };

  return [clearTimer, callback];
}
