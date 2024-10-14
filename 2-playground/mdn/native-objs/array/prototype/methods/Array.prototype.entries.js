/* Array.prototype.entries() */

//  - 설명:
//   - 배열의 각 요소와 해당 인덱스를 포함하는 새로운 배열 반복자 객체를 반환. ES6에서 됨

//  - 활용:
//   - 배열을 반복하면서 인덱스와 값을 동시에 사용할 수 있음
//   - for...of 루프와 함께 사용됨

//  - 주의 사항:
//   - 반환된 반복자 객체는 원본 배열을 변경하지 않음

// 1. 사용 예
const fruits = ['apple', 'banana', 'cherry']

const entries = fruits.entries()
console.log(entries)

for (const entry of entries) {
  console.log(entry)
}
// 출력:
// [0, 'apple']
// [1, 'banana']
// [2, 'cherry']

// 2. 활용 예시

// - 데이터 처리 및 변환 - API로부터 받은 데이터를 처리할 때, 인덱스와 값을 함께 활용하여 새로운 데이터 구조를 만들 수 있음. 배열을 객체로 변환하는 것은 데이터의 의미를 명확히 하고, 더 효율적으로 관리하기 위한 방법
const response = ['user1', 'user2', 'user3']

const users = Object.fromEntries(response.entries())
console.log(users) // {'0': 'user1', '1': 'user2', '2': 'user3'}

// - UI 요소 렌더링 - React 같은 라이브러리에서 배열의 인덱스와 값을 사용하여 UI 컴포넌트를 동적으로 생성할 수 있음. React 환경에서는 return 값으로 문자열이 아닌 태그 자체를 반환할 수 있음. JSX를 사용하려면 React와 Babel을 설정해야 함
const items = ['item A', 'item B', 'item C']

const itemList = [...items.entries()].map(([index, item]) => {
  return `<li key="${index}">${item}</li>`
})
