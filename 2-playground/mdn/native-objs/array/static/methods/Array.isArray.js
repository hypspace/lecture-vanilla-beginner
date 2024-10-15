/* Array.isArray(value) */

//  - 설명:
//   - 주어진 값이 배열인지 여부를 확인하는 JS의 내장 메서드. 배열 타입 확인에 유용하게 활용됨
//   - boolean 값을 반환하며, 배열인 경우 true, 그렇지 않은 경우 false를 반환

//  - 활용:
//   - 데이터 타입 검증 시 배열인지 확인할 때
//   - 함수의 인자나 반환값이 배열인지 체크할 필요가 있을 때

//  - 주의 사항:
//   - 객체와 배열의 구분이 명확하기 때문에, 배열이 아닌 다른 객체(예: 객체 리터럴, Map 등)에 대해 false를 반환
//   - 배열의 인스턴스가 아닌 경우에도 false를 반환. 유사 배열 객체(array-like object)에 대해서도 false를 반환

//   - instanceof 대 Array.isArray():
//      - Array 인스턴스를 확인할 때 Array.isArray()는 교차 영역에서 작동하기 때문에 instanceof보다 선호됨

// 1. 사용 예
console.log(Array.isArray([])) // true
console.log(Array.isArray('')) // false
console.log(Array.isArray({})) // false
console.log(Array.isArray(null)) // false
console.log(Array.isArray(undefined)) // false

// 2. 활용 예시
function processArray(input) {
  if (!Array.isArray(input)) {
    throw Error('입력은 배열이어야 합니다')
  }

  return input.map(item => item * 2)
}

processArray([1, 2, 3])

// 3. instanceof 대 Array.isArray()
function CustomArray(...elements) {
  return Array.from(elements) // 유사 배열을 배열로 생성
}

const arr = new CustomArray(1, 2, 3) // [1, 2, 3]

// 올바른 Array가 맞는지 확인
console.log(Array.isArray(arr)) // true
// arr의 프로토타입은 Array.prototype과 다름
console.log(arr instanceof Array) // false 배열은 맞는데 Array의 인스턴스는 아니고 CustomArray의 인스턴스
console.log(arr instanceof CustomArray) // true
