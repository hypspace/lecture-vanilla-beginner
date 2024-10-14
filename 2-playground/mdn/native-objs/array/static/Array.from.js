/* Array.from(arrayLike, mapFn?, thisArg?) */

//  - 설명:
//   - 유사 배열 객체나 iterable 객체(예: Set, Map 등)로부터 새로운 배열을 생성하는 메서드
//   - 두 번째 인자로 배열을 생성할 때 특정 변환을 수행할 수 있음
//   - Array.from() 메서드는 범용 팩토리 메서드. 유연한 입력 처리, 맵핑 기능, 길이 지정 또한 가능하기 때문

//  - 활용:
//   - 배열이 아닌 데이터 구조를 배열로 변환할 때 사용
//   - 특정 변환 함수를 적용하여 배열을 생성할 때 사용

//  - 주의 사항:
//   - Array.from은 문자열도 iterable로 간주하여 각 문자를 배열의 요소로 변환함. 예를 들어 Array.from('12')는 [ '1', '2' ]이 됨
//   - 두 번째 인자로 제공하는 맵 함수는 각 요소에 대해 호출되며, 배열의 각 요소에 적용됨
//   - thisArg는 mapFn 실행 시에 this로 사용할 값입니다.

//   - Array.from 말고도 유사 배열 객체를 배열로 만드는 방법은 다양함:
//      - spread operator (at ES6)
//      - Array.prototype.slice.call (고전 방식)
//      - forEach

// 1. 사용 예
const str = 'hello'
const arr = Array.from(str)
console.log(arr) // [ 'h', 'e', 'l', 'l', 'o' ]

// - Set(iterable 객체)을 배열로 변환
const set = new Set([1, 1, 2, 3])
console.log(set) // Set(3) { 1, 2, 3 }

const arrFromSet = Array.from(set)
console.log(arrFromSet) // [ 1, 2, 3 ]

// 2. Array.from 말고도 유사 배열 객체를 배열로 만드는 방법

// - Spread Operator
const arr1 = [...set]
console.log(arr1) // [ 1, 2, 3 ]

// - Array.prototype.slice.call - NodeList와 같은 유사 배열 객체에 적용할 수 있음
// const lis = document.querySelectorAll('li')
// const arr2 = Array.prototype.slice.call(lis)
// console.log(arr2) // [li, li, li]

// - forEach를 사용하여 수동으로 배열 생성
const arr2 = []

set.forEach(v => {
  arr2.push(v)
})
console.log(arr2) // [ 1, 2, 3 ]

// 3. 활용 예시

// - 배열을 생성할 때 특정 변환을 수행하면서 생성1
const numbers = [1, 2, 3]

const squares = Array.from(numbers, x => x * x)
console.log(squares) // [ 1, 4, 9 ]

// - 배열을 생성할 때 특정 변환을 수행하면서 생성2 - map, split & forEach, reduce를 통해서도 가능함
const upperCaseChars = Array.from('hello', char => char.toUpperCase())
console.log(upperCaseChars) // [ 'H', 'E', 'L', 'L', 'O' ]

// - API 응답 데이터 처리 - API로부터 받은 데이터가 배열이 아닐 경우, 이를 배열로 변환하여 처리할 수 있음
const apiResponse = {
  0: { id: 1, name: 'wang' },
  1: { id: 2, name: 'long' },
  length: 2,
}

const userArray = Array.from(apiResponse)
console.log(userArray) // [ { id: 1, name: 'wang' }, { id: 2, name: 'long' } ]

// - DOM 요소 수집 - DOM API를 활용하여 가져온 데이터의 일부는 유사 배열 객체로 분류됨.(예: NodeList) 이를 배열로 변환하여 처리할 수 있음
// const elms = document.getElementsByClassName('btn')
// const btnsArray = Array.from(elms, e => getTextContext(e))

// function getTextContext(e) {
//   return e.getTextContext
// }

// - 이벤트 핸들러 등록
// const buttons = document.querySelectorAll('button')
// buttonArray = Array.from(buttons)

// buttonArray.forEach(btn => {
//   btn.addEventListener('click', () => console.log('clicked'))
// })

// - 길이 지정하여 배열 생성 - Array 생성자 & fill로도 가능함
const myArray = Array.from({ length: 2 }, (v = 1) => v)
const myArray2 = Array(2).fill(1)

console.log(myArray) // [ 1, 1 ]
console.log(myArray2) // [ 1, 1 ]
