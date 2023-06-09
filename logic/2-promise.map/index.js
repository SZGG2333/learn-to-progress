// 实现promise.map，限制promise并发数量
const pMap = (list, mapper, concurrency = Infinity) => {
  list = Array.from(list);
  return new Promise((resolve, reject) => {
    let currentIndex = 0;
    let result = [];
    let resolveCount = 0;
    let len = list.length;
    const next = () => {
      const index = currentIndex;
      currentIndex++;
      Promise.resolve(list[index].then(o => mapper(o, index).then(o => {
        result[index] = o;
        resolveCount++;
        if (resolveCount === len) resolve(result);
        if (currentIndex < len) next()
      })))
    }
    for (let i = 0; i < concurrency && i < len; i++) {
      next();
    }
  })
}