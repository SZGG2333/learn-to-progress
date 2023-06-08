// 数组转对象
const keyBy = (list, by) => {
  return list.reduce((acc, x) => {
    acc[by(x)] = x;
    return acc;
  }, {})
}