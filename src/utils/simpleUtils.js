export async function sleep(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

export function noop() {
  return () => {};
}

export function printLog(...message) {
  console.log(message.join(', '));
}

export function isObjEmpty(obj) {
  return Object.keys(obj ?? {}).length === 0;
}

export function combineClasses(...args) {
  return args.filter(Boolean).join(' ');
}
