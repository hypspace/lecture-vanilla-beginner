/* Array.prototype.findIndex(callback(element, index?, array?), thisArg?) */

//  - 설명:
//   - 주어진 조건을 만족하는 첫 번째 요소의 인덱스를 반환. 조건을 만족하는 요소가 없으면 -1을 반환

//  - 활용:
//   - 배열에서 특정 조건을 만족하는 첫 번째 요소의 인덱스를 찾을 때 사용

//  - 주의 사항:
//   - 배열의 첫 번째 요소를 찾으면 그 즉시 탐색을 중단하고 결과를 반환
//   - 판별 함수를 만족하는 첫번째 인덱스 대신 값을 반환하는 find() 메서드도 참고

// 1. 사용 예
const numbers = [10, 20, 30, 40, 50]

const idx = numbers.findIndex(num => num > 30)
console.log(idx) // 3 (요소: 40)
