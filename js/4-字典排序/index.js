// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
const arr = ['上海', '北京', '广东', '深圳', '青岛', '西安'];

arr.sort((a, b) => a - b); // sort默认按编码排序

arr.sort((a, b) => a.localeCompare(b)); // localeCompare返回0或1，表示两个字符串谁更大，更靠前