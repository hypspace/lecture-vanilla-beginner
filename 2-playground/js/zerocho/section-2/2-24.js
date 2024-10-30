// 1. 실습

// - 배열 at 메서드(ECMAScript 2022(ES13))
const arr = [1, 2, 3]

console.log(arr.at(0)) // 1
console.log(arr.at(-1)) // 3
console.log(arr.at(10)) // undefined

console.log(arr.at('0')) // 1
