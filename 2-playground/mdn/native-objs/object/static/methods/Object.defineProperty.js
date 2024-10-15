/* Object.defineProperty(obj, prop, descriptor) */

//  - 설명:
//   - 객체의 속성을 재정의하는 메서드. 새 속성을 추가하거나 기존 속성을 수정함. ECMAScript 2009 (ES5)에 도입됨
//   - 속성의 특성을 상세하게 정의할 수 있도록 해줌
//   - 객체에 새로운 속성을 직접 정의하거나 이미 존재하는 속성을 수정한 후, 해당 객체를 반환함

//  - 활용:
//   - 단일 속성을 정의할 때 사용되며, 속성의 value, writable, enumerable, configurable 같은 특성을 개별적으로 설정할 수 있음

//  - 주의 사항:
//   - 이미 존재하는 속성을 수정할 때, 해당 속성의 특성 중 configurable이 false인 경우 변경할 수 없음. 또한, 속성이 writable이 false로 설정되어 있으면 값 변경이 불가능함

//   - Object.create(), Object.defineProperties(), Object.defineProperty()는 각각의 상황에 맞게 사용됨:
//      - Object.create()를 사용하여 속성을 정의할 수 있음. 주로 프로토타입을 설정하여 객체를 생성하는 데 사용됨. 선택적으로 속성을 정의할 수 있지만, 단일 속성을 정의하는 것보다는 여러 속성을 한 번에 정의하는 데 더 적합함
//      - Object.defineProperties()를 사용하여 여러 속성을 정의할 수 있음. 여러 속성을 한 번에 정의하고 그 특성을 세밀하게 조정할 수 있는 데 특화되어 있음. 객체에 속성을 추가하거나 기존 속성을 수정할 수 있음
//      - Object.defineProperty()**를 사용하여 단일 속성을 정의할 수 있음. 단일 속성을 정의하고 그 특성을 자세히 설정할 수 있음. 특정 속성의 writable, enumerable, configurable 같은 특성을 세밀하게 조정하는 데 적합함

// 1. 사용 예 - 속성 수정
const obj = {}

Object.defineProperty(obj, 'name', {
  value: 'Wang',
  writable: true, // 쓰기 가능(false: 읽기 전용 - 변경 불가 무시됨, 기본값: false)
  enumerable: true, // 열거 가능
  configurable: true, // 구성 가능(삭제 가능)
})

console.log(obj.name) // Wang
obj.name = 'Long' // writable: true(변경 가능)
console.log(obj.name) // Long

// 2. 속성 삭제 및 특성 변경
Object.defineProperty(obj, 'age', {
  value: 30,
  configurable: false, // 삭제 불가
})

delete obj.age // 실패, configurable이 false이므로 삭제되지 않음
console.log(obj.age) // 30
