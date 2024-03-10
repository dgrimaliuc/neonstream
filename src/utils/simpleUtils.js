export async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export function noop() {
  return () => {};
}

export function printLog(...message) {
  console.log(message.join(', '));
}
