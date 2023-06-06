// 数组元素求和
const reduce = (list, fn, ...init) => {
  let next = init.length ? init[0] : list[0];
  for(let i = init.length ? 0 : 1; i < list.length; i++) {
    if (list[i]) next = fn(next, list[i], i);
  }
  return next;
}