Object.prototype.toString.call(''); // [object String]
Object.prototype.toString.call(1); // [object Number]
Object.prototype.toString.call(true); // [object Boolean]
Object.prototype.toString.call(Symbol()); // [object Symbol]
Object.prototype.toString.call(undefined); // [object Undefined]
Object.prototype.toString.call(null); // [object Null]
Object.prototype.toString.call(new Function()); // [object Function]
Object.prototype.toString.call(new Date()); // [object Date]
Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(new RegExp()); // [object RegExp]
Object.prototype.toString.call(new Error()); // [object Error]
Object.prototype.toString.call(window); // [object global] window 是全局对象 global 的引用
Object.prototype.toString.call(document); // [object HTMLDocument]

function isType(type) {
	return function (data) {
		return Object.prototype.toString.call(data) == type; //true
	};
}

var isArray = isType('[object Array]');
var isDate = isType('[object Date]');

console.log(isArray([1, 2, 3]));
console.log(isDate(new Date()));