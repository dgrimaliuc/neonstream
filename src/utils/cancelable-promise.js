function makeCancelable(promise = new Promise(() => {})) {
  let hasCanceled = false;

  const cancelablePromise = new Promise((resolve, reject) => {
    promise
      .then(result => {
        if (!hasCanceled) {
          resolve(result);
        }
      })
      .catch(e => {
        if (!hasCanceled) {
          reject(e);
        }
      });
  });

  cancelablePromise.cancel = () => {
    hasCanceled = true;
  };

  return cancelablePromise;
}

export { makeCancelable };
