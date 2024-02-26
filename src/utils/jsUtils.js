export async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export function splitArray(array, chunkSize) {
  return Array.from(
    { length: Math.ceil(array.length / chunkSize) },
    (_, index) => array.slice(index * chunkSize, (index + 1) * chunkSize)
  );
}
