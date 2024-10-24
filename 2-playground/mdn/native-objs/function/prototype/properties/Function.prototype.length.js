/* Function.prototype.length */

//  - 설명:
//   - 함수 인스턴스의 length 속성은 함수가 기대하는 인자의 수를 나타냄
//   - 함수가 얼마나 많은 인수를 기대하는지 나타냄. 즉 형식 매개변수의 수. 이 수는 나머지 매개변수를 포함하지 않음. 그에 반해, arguments.length는 함수에 지역(local)이고 실제로 함수에 전달된 인수의 수를 제공함

// 1. 사용 예
function sum() {}
function sum2(a, b) {}
function sum3(...numbers) {}

console.log(sum.length) // 0
console.log(sum2.length) // 2
console.log(sum3.length) // 0
