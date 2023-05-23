/**
 * 步骤：
 * 通过原型链我们知道调用call的肯定是函数
 * 改变this指向
 * 执行当前的函数
 */
// call函数
const call = (fn, context, ...args) => {
    context.fn = fn;
    const r = context.fn(...args);
    delete context.fn;
    return r;
}

// call 绑定到函数原型上
// https://juejin.cn/post/7110891178614079495
Function.prototype.myCall = function(context) {
    const type = typeof context;
    if (context === null || context === undefined) {
        context = window;
    }
    switch(type) {
        case "number":
            context = new Number(context);
            break;
        case "boolean":
            context = new Boolean(context);
            break;
        case "string":
            context = new String(context);
            break;
    }
    const arg = Array.from(arguments).slice(1);
    const key = Symbol("call");
    context[key] = this;
    const result = eval("context[key](" + arg.toString() + ")");
    delete context[key];
    return result;
}

Function.prototype.myCall2 = function (ctx = globalThis) {
    const args = Array.from(arguments).slice(1);
    const key = Symbol("key");
    ctx[key] = this;
    const res=ctx[key](...args);
    delete ctx[key]
    return res
  };