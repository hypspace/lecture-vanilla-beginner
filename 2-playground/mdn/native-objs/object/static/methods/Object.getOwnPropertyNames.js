/* Object.getOwnPropertyNames(obj) */

//  - 설명:
//   - 주어진 객체의 모든 직접적인 속성 이름을 배열로 반환. 열거 가능한 속성뿐만 아니라 열거 불가능한 속성도 포함됨. ES5에 도입됨
//   - 객체의 모든 직접적인 속성 이름을 배열로 반환해 주며, 객체의 구조를 이해하고 조작하는 데 유용한 메서드. 이 메서드를 통해 객체의 모든 속성을 쉽게 확인할 수 있음
//   - 객체의 모든 직접적인 속성 이름을 조회할 수 있는 기능을 제공함. 이를 통해 객체의 속성을 쉽게 탐색하고 조작할 수 있게 됨

//  - 활용:
//   - 객체의 모든 속성 이름을 조회하고 싶을 때 유용함. 예를 들어 객체의 속성을 기반으로 반복 작업을 수행하거나 특정 속성을 찾는데 사용할 수 있음

//  - 주의 사항:
//   - 상속된 속성은 포함하지 않음

// 1. 사용 예
const obj = {
  name: 'wang',
  age: 31,
}

const propertyNames = Object.getOwnPropertyNames(obj)
console.log(propertyNames) // ['name', 'age']

// 2. 열거 불가능한 속성 포함됨
const obj2 = {}

Object.defineProperty(obj2, 'prop', {
  value: 42,
  enumerable: false, // 열거 불가능
})

const propertyNames2 = Object.getOwnPropertyNames(obj2)
console.log(propertyNames2) // ['prop']

// 3. 상속된 속성은 포함되지 않음
const parent = {
  inheritedProperty: 'this is inherited',
}

const child = Object.create(parent)
child.ownProperty = 'this is own'

const result = Object.getOwnPropertyNames(child) // inheritedProperty 속성은(상속된 속성) 포함(반환)되지 않음
console.log(result) // ['ownProperty']
