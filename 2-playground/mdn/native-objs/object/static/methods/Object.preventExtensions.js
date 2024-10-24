/* Object.preventExtensions(obj) */

//  - 설명:
//   - 주어진 객체에 대해 새로운 속성을 추가하지 못하도록 방지함. 그러나 기존 속성의 값 수정 및 삭제는 여전히 가능함. 이 메서드는 객체의 구조를 보호하려는 경우에 유용함. ES5에 도입됨
//   - 객체에 새로운 속성을 추가하지 못하도록 하여 객체의 구조를 보호하는 기능을 제공함. 기존 속성의 수정 및 삭제는 허용되므로, 부분적으로 객체의 불변성을 관리할 수 있음
//   - 새로운 속성이 이제까지 객체에 추가되는 것을 방지함(객체의 장래 확장을 막음)

//  - 활용:
//   - 새로운 속성이 이제까지 객체에 추가되는 것을 방지할 때 사용함

//  - 주의 사항:
//   - 새 속성 추가 불가: 이 메서드를 사용한 객체에는 새로운 속성을 추가할 수 없음. 기존 속성의 값은 수정 가능하지만, 추가는 불가능함
//   - 상태 변화: 객체의 확장 가능 상태는 Object.preventExtensions() 호출 후 변경할 수 없음. 즉, 이미 방지된 상태로 변하지 않음
//   - 기존 속성의 수정 및 삭제 가능: 객체의 기존 속성 값은 수정할 수 있으며, 삭제도 가능함. 따라서 불변성을 완전히 보장하지는 않음
//   - 비어 있는 객체: 비어 있는 객체에 대해 Object.preventExtensions()를 호출하면, 그 객체는 추가 속성을 가질 수 없음
//   - 상속된 속성: 객체의 프로토타입 체인에서 상속된 속성은 영향을 받지 않음. 따라서 부모 객체에서 상속된 속성은 여전히 접근 가능하고 수정 가능함

//   - Object.seal()과 Object.preventExtensions()는 비슷하지만, 중요한 차이가 있음:
//      - Object.seal()은 속성 추가 및 삭제를 막고, 기존 속성의 configurable 속성을 false로 설정하여 속성 메타데이터를 변경할 수 없도록 함
//      - Object.preventExtensions()는 속성 추가만 방지하며, 기존 속성의 수정 및 삭제는 허용함

// 1. 사용 예
const obj = { a: 1 }

console.log(Object.preventExtensions(obj)) // {a: 1}
console.log(Object.isExtensible(obj)) // false

// 2. 속성 추가 불가
const preventedObj = Object.preventExtensions({})

preventedObj.property1 = 'value1' // 추가 불가
console.log(preventedObj.property1) // undefined

// 3. 기존 속성 수정 및 삭제
const anotherObj = Object.preventExtensions({ a: 1 })

anotherObj.a = 2 // 수정 가능
console.log(anotherObj.a) // 2

delete anotherObj.a // 삭제 가능
console.log(anotherObj.a) // undefined
