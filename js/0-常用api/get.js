// 实现可选链操作符，若没有找到对应的值，返回一个默认值
const get = (source, path, defaultValue = undefined) => {
  // a[3].b => a.3.b => [a, 3, b]
  const paths = path
		.replace(/\[(\w+)\]/g, '.$1')
		.replace(/\["(\w+)"\]/g, '.$1')
		.replace(/\['(\w+)'\]/g, '.$1')
		.split('.');
  let result = source;
  for (const i of paths) {
    result = result?.[i];
  }
  return result || defaultValue;
}