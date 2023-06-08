// 从数组里随机取N个元素
const shuffle = list => list.sort(() => Math.random() - 0.5)
const sampleSize = (list, n) => shuffle(list).slice(0, n)