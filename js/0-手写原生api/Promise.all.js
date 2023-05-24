function pAll(_promises) {
    return new Promise((resolve, reject) => {
        const promises = Array.from(_promises);
        const res = [];
        const len = promises.length;
        let count = 0;
        for (let i = 0; i < length; i++) {
            // 执行异步函数
            Promise.resolve(promises[i]).then(o => {
                // 结果保存到数组里
                res[i] = o;
                // 都执行完把数据传出去
                if (++count === len) resolve(res);
            }).catch(e => reject(e))
        }
    })
}