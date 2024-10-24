/* Array(arrayLength?) 생성자 */

//  - 설명:
//   - 새로운 Array 객체를 생성할 때 사용

//  - 주의 사항:
//   - Array()는 new를 붙이거나 붙이지 않고 호출할 수 있음. 둘 다 새 Array 인스턴스를 생성함
//   - 숫자인 인자(arrayLength)가 하나뿐이지만, 그 값이 정수가 아니거나 0에서 2의 32승 - 1 (포함) 사이가 아닌 경우 발생함
//   - 배열은 리터럴 표기법으로 생성할 수도 있음

// 1. 사용 예
const arr = new Array(3)
console.log(arr) // [ <3 empty items> ]

const arr2 = new Array(1, 2, 3)
console.log(arr2) // [ 1, 2, 3 ]

const arr3 = new Array()
console.log(arr3) // []

// 2. 인스턴스 생성 없이 배열 생성
const arr4 = Array(1, 2, 3)
console.log(arr4) // [ 1, 2, 3 ]

// 3. 리터럴 표기법으로 배열 생성
const arr5 = []
console.log(arr5) // []
