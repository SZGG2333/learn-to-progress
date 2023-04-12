// 单例函数 通过代理处理，保留类原型上的方法
function singletion(className) {
	let instence;
	return new Proxy(className, {
		construct(target, args) {
			if (!instence) {
				instence = new target(...args);
			}
			return instence;
		}
	});
}

class Video {
	constructor() {
		console.log('video created');
	}
	play() {
		console.log('playing...');
	}
}

const newVideo = singletion(Video);

// 确保是单例模式
const v1 = new newVideo();
const v2 = new newVideo();

console.log(v1 === v2);
v1.play()