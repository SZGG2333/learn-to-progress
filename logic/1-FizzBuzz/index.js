// 能否被3或5整除,均能被整除返回Fizz Buzz
const fizzbuzz = (n) => {
    let str = ''
    if (n % 3 === 0) {
        str += 'Fizz'
    }
    if (n % 5 ==0) {
        str += 'Buzz'
    }
    return str || n
}