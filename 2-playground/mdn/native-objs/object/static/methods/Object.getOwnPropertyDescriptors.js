/* Object.getOwnPropertyDescriptors(obj) */

//  - 설명:
//   - 주어진 객체의 모든 직접적인 속성에 대한 속성 설명자를 포함하는 객체를 반환. ECMAScript 2019 (ES10)에 도입됨
//   - 객체의 모든 속성에 대한 속성 설명자를 쉽게 조회할 수 있도록 도와주는 유용한 메서드. 이를 통해 객체의 구조를 이해하고, 동적으로 속성을 조작하는 데 활용할 수 있음
//   - 객체의 모든 직접적인 속성에 대한 설명자를 한 번에 조회할 수 있는 기능을 제공함. 이를 통해 객체 조작이 더 간편해짐

//  - 활용:
//   - 객체의 모든 속성에 대한 세부 정보를 한 번에 확인하고, 이를 기반으로 객체를 복사하거나 조작할 때 유용

//  - 주의 사항:
//   - 상속된 속성은 반환하지 않으며 객체에 속성이 없으면 해당 속성은 반환값에 포함되지 않음

// 1. 사용 예
const obj = {
  name: 'wang',
  age: 31,
}

const descriptors = Object.getOwnPropertyDescriptors(obj)
console.log(descriptors) // {name: {value: 'wang', writable: true, enumerable: true, configurable: true}, age: {value: 31, writable: true, enumerable: true, configurable: true }}

// 2. 상속된 속성은 포함되지 않음
const parent = {
  inheritedProperty: 'this is inherited',
}

const child = Object.create(parent)
child.ownProperty = 'this is own'

const result = Object.getOwnPropertyDescriptors(child) // inheritedProperty 속성은(상속된 속성) 반환되지 않음
console.log(result) // {ownProperty: {value: 'this is own', writable: true, enumerable: true, configurable: true}}

// ... Object.getOwnPropertyDescriptor.js 참고
