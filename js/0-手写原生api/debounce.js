// 防抖
const debounce = (fn, wait) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    setTimeout(() => {
      fn(...args);
    }, wait);
  }
}