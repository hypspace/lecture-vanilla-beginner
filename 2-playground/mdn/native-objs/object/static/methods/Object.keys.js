/* Object.keys(obj) */

//  - 설명:
//   - 주어진 객체의 모든 열거 가능한 속성 이름(키)을 배열로 반환. 이 메서드는 객체의 키를 배열 형태로 쉽게 가져오고 싶을 때 유용함. ES5에 도입됨
//   - 객체의 열거 가능한 속성 이름을 배열로 반환하는 기능임
//   - 주어진 객체 자체의 열거 가능한 문자열 키를 가진 속성들의 이름을 배열로 반환함

//  - 활용:
//   - 객체의 키를 배열로 쉽게 가져올 수 있도록 해주는 유용한 기능으로, 객체의 구조를 분석하거나 열거할 때 자주 사용됨

//  - 주의 사항:
//   - 열거 가능한 속성만 반환: Object.keys()는 객체의 비열거 속성(non-enumerable property)은 포함하지 않음. 따라서 속성의 enumerable 어트리뷰트가 false로 설정된 경우, 해당 속성은 반환되지 않음
//   - 상속된 속성 무시: Object.keys()는 객체의 프로토타입 체인에서 상속된 속성은 포함하지 않음. 오직 주어진 객체 자신의 속성만 반환함
//   - 정수형 키 순서: 반환되는 배열의 키 순서는 정수형 키(문자열로 표현된)의 경우 오름차순으로 정렬되며, 그 다음에 문자열 키가 추가됨. 이 점은 키의 순서를 보장할 때 유의해야 함
//   - 심볼 키는 포함하지 않음: Object.keys()는 심볼로 정의된 속성을 반환하지 않음. 심볼 키를 포함하려면 Object.getOwnPropertySymbols()를 사용해야 함

// 1. 사용 예
const obj = { a: 1, b: 2, c: 3 }

const keys = Object.keys(obj)
console.log(keys) // ['a', 'b', 'c']

// 2. 빈 객체
const emptyObj = {}
console.log(Object.keys(emptyObj)) // []

// 3. 열거 가능한 속성
const objWithNonEnumerable = Object.create(
  {},
  {
    a: { value: 1, enumerable: true },
    b: { value: 2, enumerable: false },
  }
)

console.log(Object.keys(objWithNonEnumerable)) // ['a']
