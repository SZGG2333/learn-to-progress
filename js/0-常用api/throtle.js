// 节流
const throtle = (fn, wait) => {
  let timer;
  return (...args) => {
    if (timer) return;
    setTimeout(() => {
      fn(...args);
      timer = null;
    }, wait);
  }
}