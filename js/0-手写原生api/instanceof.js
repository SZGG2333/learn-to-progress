function instance_of(L, R) {
  const P = R.prototype;
  while (true) {
    if (L.__proto__ === null) {
      return false;
    }
    if (L.__proto__ === P) {
      return true;
    }
    L = L.__proto__;
  }
}

let flag = instance_of([], Object);
console.log(flag);