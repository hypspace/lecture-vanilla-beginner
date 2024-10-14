/* Array.prototype.slice([begin?[, end?]]) */

//  - 설명:
//   - 배열의 일부를 선택하여 새로운 배열을 생성. 원본 배열은 변경되지 않으며, 선택된 요소의 복사본이 포함된 새로운 배열을 반환합
//   - 배열의 특정 부분을 쉽게 가져올 수 있는 유용한 도구

//  - 활용:
//   - 배열의 특정 부분을 추출하여 새로운 배열로 만들고 싶을 때 사용
//   - 배열을 깊은 복사할 필요 없이 일부 요소를 가져올 때 유용

//  - 주의 사항:
//   - slice()는 원본 배열을 변경하지 않음
//   - 매개변수로 제공된 인덱스는 시작 인덱스와 종료 인덱스가 있음. 종료 인덱스는 포함되지 않음
//   - 인덱스가 음수인 경우, 배열의 끝에서부터 요소를 선택함

// 1. 사용 예
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']

const citrus = fruits.slice(1, 4)
console.log(citrus) // ['banana', 'cherry', 'date']

const lastTwo = fruits.slice(-2)
console.log(lastTwo) // ['date', 'elderberry']

// 2. 활용 예시

// - 배열 복사
const numbers = [1, 2, 3, 4, 5]
const numbersCopy = numbers.slice() // 전체 배열을 복사
console.log(numbersCopy) // [1, 2, 3, 4, 5]

// - 부분 배열 만들기
const animals = ['cat', 'dog', 'rabbit', 'hamster']
const pets = animals.slice(0, 2) // 처음 두 개의 요소 추출
console.log(pets) // ['cat', 'dog']

// - 마지막 요소 제거
const colors = ['red', 'green', 'blue', 'yellow']
const withoutLast = colors.slice(0, -1) // 마지막 요소를 제외한 배열
console.log(withoutLast) // ['red', 'green', 'blue']
