import React from 'react';

export async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export function splitArray(array, chunkSize) {
  return Array.from(
    { length: Math.ceil(array.length / chunkSize) },
    (_, index) => array.slice(index * chunkSize, (index + 1) * chunkSize)
  );
}

export function renderArray(array, lastItemIndex = array.length - 1) {
  const slicedArray = array.slice(0, lastItemIndex);
  const components = slicedArray.flat();
  if (lastItemIndex === 0) return null;
  return (
    <>
      {components.map((c, i) => (
        <React.Fragment key={i}>{c}</React.Fragment>
      ))}
    </>
  );
}

export function noop() {
  return () => {};
}
