function resolvingPromise(millis) {
  var d = millis !== undefined ? millis : 100;
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), d);
  });
}
