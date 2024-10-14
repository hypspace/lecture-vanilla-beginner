/* Array.prototype.findLastIndex(callback(element, index?, array?), thisArg?) */

//  - 설명:
//   - 주어진 조건을 만족하는 마지막 요소의 인덱스를 반환. 조건을 만족하는 요소가 없으면 -1을 반환
//   - ES12(ECMAScript2022)에 출시됨

// 1. 사용 예
const numbers = [10, 20, 30, 40, 50]

const idx = numbers.findLastIndex(num => num > 30)
console.log(idx) // 4 (요소: 50)

// ... Array.prototype.findIndex.js 참고
