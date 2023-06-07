// 深拷贝  递归、内置对象Date、Map等复制，循环引用
const deepClone = (source, memory) => {
  const isPrimitive = value => /Number|Boolean|String|Null|Undefined|Symbol|Function/.test(Object.prototype.toString(value));
  let result = null;
  
  memory || (memory = new WeakMap());
  // 处理原始数据类型及函数类型
  if (isPrimitive(source)) {
    result = source;
  } else if (Array.isArray(source)) {
    result = source.map(value => deepClone(value, memory));
  } else if (Object.prototype.toString.call(source) === '[object Date]') {
    result = new Date(source);
  } else if (Object.prototype.toString.call(source) === '[object Regex]') {
    result = new RegExp(source);
	} else if (Object.prototype.toString.call(source) === '[object Set]') {
    result = new Set();
    for (const value of source) {
      result.add(deepClone(value,memory));
    }
  } else if (Object.prototype.toString.call(source) === '[object Map]') {
    result = new Map();
    for (const [key, value] of source.entries()) {
      result.set(key, deepClone(value, memory));
    }
  } else {
    if (memory.has(source)) {
      result = memory.get(source);
    } else {
      result = Object.create(null);
      memory.set(source, result);
      Object.keys(source).forEach(key => {
        const value = source[key];
        result[key] = deepClone(value, memory);
      })
    }
  }
  return result;
}