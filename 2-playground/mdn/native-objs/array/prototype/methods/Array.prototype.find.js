/* Array.prototype.find(callback(element, index?, array?), thisArg?) */

//  - 설명:
//   - 주어진 조건을 만족하는 첫 번째 요소를 반환. 조건을 만족하는 요소가 없으면 undefined를 반환

//  - 활용:
//   - 배열에서 특정 조건을 만족하는 첫 번째 요소를 찾을 때

//  - 주의 사항:
//   - 배열의 첫 번째 요소를 찾으면 그 즉시 탐색을 중단하고 결과를 반환
//   - find or findLast, findIndex or findLastIndex or indexOf or LastIndexOf가 비슷함

// 1. 사용 예
const numbers = [1, 2, 3, 4, 5]

const firstGreaterThanTree = numbers.find(v => v > 3)
console.log(firstGreaterThanTree) // 4

// 2. 활용 예시

// - 객체 배열에서 조건에 맞는 요소 찾기
const users = [
  { id: 1, name: 'Wang', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Long', age: 35 },
]

// 이름이 'Bob'인 사용자 찾기
const user = users.find(user => user.name === 'Bob')
console.log(user) // 출력: { id: 2, name: 'Bob', age: 30 }
