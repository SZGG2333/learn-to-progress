Function.prototype.myApply = function (ctx = globalThis) {
    const args = arguments[1];
    const key = Symbol("key");
    ctx[key] = this;
    const res=ctx[key](...args);
    delete ctx[key]
    return res
};