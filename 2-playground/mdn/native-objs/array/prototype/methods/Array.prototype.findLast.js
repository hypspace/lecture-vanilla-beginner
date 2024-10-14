/* Array.prototype.findLast(callback(element, index?, array?), thisArg?) */

//  - 설명:
//   - 주어진 조건을 만족하는 마지막 요소를 반환. 조건을 만족하는 요소가 없으면 undefined를 반환
//   - ES12(ECMAScript2022)에 출시됨

//  - 활용:
//   - 배열에서 특정 조건을 만족하는 마지막 요소를 찾을 때 사용

//  - 주의 사항:
//   - 배열의 마지막 요소부터 탐색을 시작함
//   - 판별 함수를 만족하는 첫번째 인덱스 대신 값을 반환하는 find() 메서드도 참고

// 1. 사용 예
const numbers = [10, 20, 30, 40, 50]

const idx = numbers.findLast(num => num > 30)
console.log(idx) // 50

// ... Array.prototype.find.js 참고
