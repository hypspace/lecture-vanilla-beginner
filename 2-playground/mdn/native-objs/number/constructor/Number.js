/* Number() 생성자 */

const instance = new Number(11)
console.log(instance, toString.call(instance)) // [Number: 11] [object Number]

console.log(instance.valueOf()) // 11
console.log(instance + 0) // 11
console.log(Number(instance.toString())) // 11
