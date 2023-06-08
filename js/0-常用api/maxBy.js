// 返回数组中的最大值
const maxBy = (list, keyBy) => {
  return list.slice(1).reduce((acc, x) => {
    if (keyBy(x) > keyBy(acc[0])) {
      return [ x ]
    }
    if (keyBy(x) === keyBy(acc[0])) {
      return [ ...acc, x ]
    }
  }, list[0]);
}