export async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export function noop() {
  return () => {};
}
