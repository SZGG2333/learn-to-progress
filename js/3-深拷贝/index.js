// https://zhuanlan.zhihu.com/p/432726048
// https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel
// MessageChannel node不支持，浏览器中支持
function deepClone(obj) {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel(); // 创建消息通道
    port1.postMessage(obj);
    port2.onmessage = (msg) => {
      resolve(msg.data);
    }
  })
}

let qst = {
  a: 123,
  b: {
    name : '123'
  }
}
qst.c = qst;
deepClone(qst).then(c => console.log(c === qst));