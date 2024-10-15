/* Array.prototype.some(callbackFn(element, index?, array?), thisArg?) */

//  - 설명:
//   - 배열의 요소 중 적어도 하나가 주어진 테스트 함수를 통과하는지 확인. 결과는 true 또는 false로 반환

//  - 활용:
//   - 배열의 요소 중 특정 조건을 만족하는 요소가 존재하는지 확인할 때 사용됨
//   - 주로 조건을 체크하는 용도로 활용됨

//  - 주의 사항:
//   - 배열이 비어있으면 항상 false를 반환
//   - 메서드가 호출되면, 배열의 각 요소에 대해 테스트 함수를 호출하며, 첫 번째로 true를 반환하는 요소가 발견되면 그 즉시 실행을 종료

// 1. 사용 예
const numbers = [1, 2, 3, 4, 5]

const hasGreaterThanThree = numbers.some(num => num > 3)
console.log(hasGreaterThanThree) // true

// 2. callback 함수의 인수(=인자) 사용 예
const numbers2 = [1, 2, 3, 4, 5]

const hasEven = numbers2.some((element, index, array) => {
  console.log(`idx: ${index}, el: ${element} thisArg: ${array}`)
  return element % 2 === 0
})
// 출력:
// idx: 0, el: 1 thisArg: 1,2,3,4,5
// idx: 1, el: 2 thisArg: 1,2,3,4,5

console.log(hasEven) // true
