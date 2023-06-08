// ??= 空值赋值运算符  左边的值为null或undefined才会进行赋值
// 按数量给数组分组
function chunk(list, size) {
	const l = [];
	for (let i = 0; i < list.length; i++) {
		const index = Math.floor(i / size);
		l[index] ??= [];
		l[index].push(list[i]);
	}
	return l;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
