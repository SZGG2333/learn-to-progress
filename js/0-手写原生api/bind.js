Function.prototype.myBind = function(obj, ...args) {
    return (...rest) => this.call(obj, ...args, ...rest)
}

// es3实现
Function.prototype.myBind = function(o) {
    var self = this, boundArgs = arguments;
    return function () {
        var i, args = [];
        for (i = 1; i < boundArgs.length; i++) {
            args.push(boundArgs[i])
        }
        for (i = 0; i < arguments.length; i++) {
            args.push(arguments[i])
        }
        return self.apply(o, args)
    }
}