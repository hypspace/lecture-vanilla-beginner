/* Array.prototype.map(callback(currentValue[, index?[, array?]])[, thisArg]) */

//  - 설명:
//   - 주어진 함수를 배열의 각 요소에 적용하여 새로운 배열을 생성함. 원본 배열은 변경되지 않음

//  - 활용:
//   - 배열의 각 요소를 변환하거나 가공할 때 유용
//   - 데이터 변환 작업에 자주 사용됨

//  - 주의 사항:
//   - map() 메서드는 항상 새로운 배열을 반환
//   - 원본 배열은 변경되지 않음
//   - 빈 요소는 건너뛰지 않고 처리됨. map()은 빈 요소를 처리하지만, filter()와 forEach()는 빈 요소를 건너뛰거나 무시하는 방식

// 1. 사용 예
const numbers = [1, 2, 3, 4]

const squared = numbers.map(num => num * num)
console.log(squared) // [1, 4, 9, 16]

// 2. 활용 예시

// - 데이터 변환
const apiResponse = [
  { id: 1, name: 'Wang' },
  { id: 2, name: 'Long' },
]

const userNames = apiResponse.map(user => user.name.toUpperCase())
console.log(userNames) // ['Wang', 'Long']

// - 리스트 렌더링 - React와 같은 프레임워크에서 컴포넌트를 리스트로 렌더링할 때 유용함
const fruits = ['Apple', 'Banana', 'Cherry']

const fruitList = fruits
  .map((fruit, index) => `<li key=${index}>${fruit}</li>`)
  .join('')
console.log(fruitList) // <li key=0>Apple</li><li key=1>Banana</li><li key=2>Cherry</li>

// - 중복 데이터 제거 및 정렬
const arr = [1, 2, 3, 2, 1, 4]

// 중복 제거 후 정렬 1
const uniqueSortedArr = Array.from(new Set(arr))
  .map(num => num)
  .sort((a, b) => a - b)
console.log(uniqueSortedArr) // [1, 2, 3, 4]

// 중복 제거 후 정렬 2 - 스프레드 연산자, Array.prototype.slice와 call, Array.prototype.concat와 같은 방법으로 해결할 수 있음
const arr2 = [1, 2, 2, 3, 4]
const uniqueArray2 = [].concat(...new Set(arr2))
console.log(uniqueArray2) // 출력: [1, 2, 3, 4]
