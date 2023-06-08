// 延迟函数 延迟一段时间后返回函数执行结果
function delay(func, seconds, ...args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Promise.resolve(func(...args)).then(resolve).catch(reject);
        }, seconds)
    })
}