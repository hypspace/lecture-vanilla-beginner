/* Object.create(proto[, propertiesObject?]) */

//  - 설명:
//   - 지정된 프로토타입 객체와 선택적 속성 객체를 사용하여 새 객체를 생성. 주로 프로토타입을 설정하면서 객체를 생성하는 데 사용함. propertiesObject를 사용하여 속성을 추가할 수 있지만, 주된 목적은 프로토타입 기반의 상속을 지원하는 것
//   - 객체의 프로토타입을 명시적으로 설정할 수 있게 해주어, 상속을 구현하는 데 유용
//   - 객체지향 상속 패턴을 다루는 가장 표준적인 방법. ECMAScript 2009 (ES5)에서 도입됨. 프로토타입 체인을 활용한 상속 구현이 간편해짐

//  - 활용:
//   - 객체 생성 시 특정 프로토타입을 갖도록 하거나, 새로운 객체에 특정 속성을 추가할 때 사용

//  - 주의 사항:
//   - Object.create()로 생성된 객체는 지정된 프로토타입의 속성을 상속받지만, 기본 속성(예: constructor)은 상속받지 않음
//   - 생성된 객체는 얕은 복사이므로, 중첩 객체의 경우 주의해야 함

//      - proto: 필수 매개변수로, 새로 생성될 객체의 프로토타입을 지정함
//      - propertiesObject: 선택적 매개변수로, 새로 생성된 객체에 추가할 속성과 그 속성의 특성을 정의할 수 있음. 이 매개변수를 제공하지 않으면, 새로 생성된 객체는 프로토타입만을 상속받게 됨

//    - Object.create()는 객체의 프로토타입을 설정하며 객체를 생성하는 데 중점을 두고, Object.defineProperties()는 여러 속성을 동시에 정의하고 그 특성을 조정하는 데 유용함. 이 두 메서드는 각각의 필요에 맞춰 제공되어, 다양한 객체 조작 작업을 지원함. 의도를 명확히 하겠다는 것으로 구분지어서 하겠다는 것으로 사료됨

// 1. 사용 예
const prototypeObj = {
  greet() {
    return 'hi'
  },
}
const newObj = Object.create(prototypeObj)
console.log(newObj) // {}
console.log(newObj.__proto__) // {greet: [Function: greet]}
console.log(newObj.greet()) // hi!
console.log(newObj instanceof Object) // true

// 2. 참고 예
function PrototypeObj2() {}
PrototypeObj2.prototype.greet = function () {
  return 'hi'
}

const newObj2 = Object.create(PrototypeObj2.prototype)
console.log(newObj2) // PrototypeObj2 {}
console.log(newObj2.__proto__) // { greet: [Function (anonymous)] }
console.log(newObj2.greet()) // hi!
console.log(newObj2 instanceof PrototypeObj2) // true

// 3. propertiesObject를 제공한 경우
const obj = Object.create(
  {},
  {
    name: {
      value: 'Wang',
      writable: true,
      enumerable: true,
      configurable: true,
    },
    age: {
      value: 30,
      writable: false, // 읽기 전용
      enumerable: true,
      configurable: true,
    },
  }
)

console.log(obj.name) // Wang
console.log(obj.age) // 30

obj.name = 'Long' // 수정 가능
console.log(obj.name) // Long

obj.age = 35 // 실패, 읽기 전용이므로 수정 무시됨
console.log(obj.age) // 여전히 30

delete obj.name // 가능, configurable이므로 삭제됨
console.log(obj.name) // undefined

delete obj.age // 실패, configurable이 false이므로 삭제되지 않음
console.log(obj.age) // 30
