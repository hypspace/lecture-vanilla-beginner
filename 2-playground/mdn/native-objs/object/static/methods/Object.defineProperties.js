/* Object.defineProperties(obj, props) */

//  - 설명:
//   - 주어진 객체에 여러 개의 속성을 정의. 각 속성의 특성을 개별적으로 설정할 수 있도록 해줌. Object.create()와 같이 ECMAScript 2009 (ES5)에서 도입됨
//   - 객체에 여러 속성을 정의하고 그 특성을 세밀하게 조정할 수 있는 강력한 메서드. 이를 통해 객체의 구조와 동작을 보다 명확하게 제어할 수 있음
//   - 여러 속성을 한 번에 정의하고, 각 속성의 특성을 세밀하게 조정하는 데 초점을 맞춤. 이 메서드는 속성을 동시에 정의하고 속성 특성을 별도로 설정하는 데 유용함

//  - 활용:
//   - 여러 속성을 동시에 정의할 때 유용하며, 각 속성의 value, writable, enumerable, configurable 특성을 개별적으로 설정할 수 있음

//  - 주의 사항:
//   - 기존 속성을 덮어쓸 수 있으며, 속성이 configurable이 false로 설정된 경우 해당 속성의 특성을 변경하거나 삭제할 수 없음
//   - Object.create()와 Object.defineProperties()의 차이점은 의도를 명확히 하고 코드의 가독성을 높이는 것이 두 메서드의 주된 차별점임

// 1. 사용 예
const obj = {}

Object.defineProperties(obj, {
  prop1: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  prop2: {
    value: 'Hello',
    writable: false, // 읽기 전용
    enumerable: true,
    configurable: true,
  },
})

console.log(obj.prop1) // 42
console.log(obj.prop2) // Hello

obj.prop1 = 100 // 변경 가능
console.log(obj.prop1) // 100

obj.prop2 = 'World' // 변경 불가, 무시됨
console.log(obj.prop2) // Hello

// 2. 속성 삭제 및 특성 변경
delete obj.prop1 // 가능, configurable이므로 삭제 가능
console.log(obj.prop1) // undefined

delete obj.prop2 // 실패, configurable이 false이므로 삭제되지 않음. 여전히 Hello
console.log(obj.prop2) // undefined
