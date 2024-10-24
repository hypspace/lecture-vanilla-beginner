/* Object.fromEntries(iterable) */

//  - 설명:
//   - 주어진 배열의 [key, value] 쌍을 객체로 변환. 주로 Object.entries()와 함께 사용됨. 배열 형태의 데이터를 객체로 쉽게 변환할 수 있게 해줌. ECMAScript 2019 (ES10)에서 도입됨
//   - 배열이나 Map에서 객체로 쉽게 변환할 수 있게 해주는 유용한 메서드. 데이터를 다루는 데 매우 편리하게 사용할 수 있음

//  - 활용:
//   - 주로 배열을 객체로 변환하거나, Map 객체에서 객체를 생성할 때 유용함

//  - 주의 사항:
//   - 배열의 각 요소는 [key, value] 형태여야 하며, 열거 가능한 속성만 포함됨

// 1. 사용 예
const obj = {
  name: 'wang',
  age: 31,
  country: 'korea',
}

const entries = Object.entries(obj)
console.log(entries) // [['name', 'wang'], ['age', 31], ['country', 'korea']]

const result = Object.fromEntries(entries)
console.log(result) // {name: 'wang', age: 31, country: 'korea'}

// 2. Map 객체에서 사용
const map = new Map([
  ['name', 'wang'],
  ['age', 31],
])

console.log(map) // Map(2) {'name' => 'wang', 'age' => 31}

const myObj = Object.fromEntries(map)
console.log(myObj) // {name: 'wang', age: 31}

// 3. 배열 변환
const arr = [
  [1, 2],
  [3, 4],
]
const result2 = Object.fromEntries(arr)
console.log(result2) // {'1': 2, '3': 4}
