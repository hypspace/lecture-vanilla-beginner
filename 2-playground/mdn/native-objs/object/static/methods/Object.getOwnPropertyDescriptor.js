/* Object.getOwnPropertyDescriptor(obj, propertyKey) */

//  - 설명:
//   - 주어진 객체의 특정 속성에 대한 속성 설명자(property descriptor)를 반환함. 속성 설명자는 해당 속성이 가지는 메타데이터로, 속성의 값, 읽기 가능 여부, 쓰기 가능 여부, 열거 가능 여부, 재정의 가능 여부를 포함함. ES5에 도입됨

//  - 활용:
//   - 객체의 속성에 대한 세부 정보를 확인하고 동적으로 객체를 조작할 때 유용함. 예를 들어 속성의 상태를 확인하고 그에 따라 행동을 결정할 수 있음

//  - 주의 사항:
//   - 속성이 존재하지 않으면 undefined를 반환함. 또한 상속된 속성은 반환되지 않음

// 1. 사용 예
const obj = {
  name: 'wang',
  age: 31,
}

const descriptor = Object.getOwnPropertyDescriptor(obj, 'name')
const descriptor2 = Object.getOwnPropertyDescriptor(obj, 'gender')
console.log(descriptor) // {value: 'wang', writable: true, enumerable: true, configurable: true}
console.log(descriptor2) // undefined (속성이 존재하지 않음)

// 2. 객체를 재정의하고 속성 설명자 확인
const viewModel = {}
Object.defineProperty(viewModel, 'property1', {
  value: '42',
  writable: false,
  enumerable: false,
  configurable: false,
})

const descriptorViewModel = Object.getOwnPropertyDescriptor(
  viewModel,
  'property1'
)
console.log(descriptorViewModel) // {value: '42', writable: false, enumerable: false, configurable: false}
