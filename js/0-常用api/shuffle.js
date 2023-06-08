// 数组乱序  生成随机数
const shuffle = list => list.sort(() => Math.random() - 0.5);

const shuffle2 = list => {
    const len = list.length;
    let result = [...list];
    for (let i = len - 1; i > 0; i--) {
        const swapIndex = Math.floor(Math.random() * (i + 1));
        [result[i], result[swapIndex]] = [result[swapIndex], result[i]]
    }
    return result;
}