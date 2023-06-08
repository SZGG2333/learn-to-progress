// 数组扁平化 reduce+递归
function flatten(list, depth = 1) {
	if (depth === 0) return list;
	return list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b, depth - 1) : b), []);
}
