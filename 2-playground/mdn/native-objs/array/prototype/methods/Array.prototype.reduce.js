/* Array.prototype.reduce(callback(currentValue, index?, arr?), initialValue?) */

//  - 설명:
//   - 배열의 요소를 왼쪽에서 오른쪽으로 순회하며, 각 요소에 대해 제공된 reducer 함수를 실행하여 단일 값으로 누적. 이 메서드는 배열의 마지막 요소부터 시작하여 첫 번째 요소까지 처리
//   - 배열의 왼쪽에서 오른쪽으로 누적할 때 매우 유용

//  - 활용:
//   - 복잡한 데이터 구조를 평탄화하거나 특정 값을 누적할 때 유용
//   - 배열의 요소를 왼쪽부터 오른쪽으로 처리해야 할 때 사용

//  - 주의 사항:
//   - 배열이 비어 있을 경우, 초기값이 제공되지 않으면 TypeError가 발생함
//   - reducer 함수의 첫 번째 호출에서는 accumulator가 초기값이 됨
//   - 배열의 길이에 따라 처리하는 요소의 개수가 달라질 수 있음

// 1. 사용 예
const numbers = [1, 2, 3, 4]

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
console.log(sum) // 10

// 2. 활용 예시

// - 문자열 결합
const words = ['Hello', ' ', 'World', '!']
const sentence = words.reduce((acc, word) => acc + word, '')
console.log(sentence) // Hello World!

// - 배열의 최대값 찾기
const numbers2 = [10, 20, 5, 30, 15]
const max = numbers2.reduce((acc, curr) => {
  return curr > acc ? curr : acc
}, numbers2[0])
console.log(max) // 30
