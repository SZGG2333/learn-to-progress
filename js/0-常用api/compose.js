// 函数合成
const compose = (...fns) => {
    fns.reduce((f, g) => (...args) => f(g(...args)));
}