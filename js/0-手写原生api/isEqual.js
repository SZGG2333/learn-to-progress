// 深比较
const isEqual = (x, y) => {
  if (x === y) {
    return true;
  } else if (typeof x === 'object' && x !== null && typeof y === 'object' && y !== null) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) return false;
    for (const key of xKeys) {
      if (!isEqual(x[key], y[key])) return false;
    }
    return true;
  } else {
    return false;
  }
}