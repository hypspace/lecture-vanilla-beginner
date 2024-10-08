/* String.prototype.padStart(targetLength, padString?) */

// 1. 사용 예
const str = 'hello'
console.log(str.padStart(10, '!')) // !!!!!hello
console.log(str.padStart(10, '123123')) // 12312hello
console.log(str.padStart(10, '12')) // 12121hello

// ... String.prototype.padEnd.js 참고
