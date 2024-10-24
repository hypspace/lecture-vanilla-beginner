/* Object.prototype.hasOwnProperty(propertyName) */

//  - 설명:
//   - 객체가 특정 속성을 직접 가지고 있는지를 확인하는 데 사용되는 메서드. ECMAScript 3 (1999) 도입
//   - 객체의 프로토타입 체인에 있는 속성이 아닌, 객체 자체에 정의된 속성만을 확인함
//   - 객체가 특정 속성을 직접 소유하고 있는지를 확인하는 데 유용하며, 프로토타입 체인을 무시하고 객체 자체의 속성만을 검사함

//  - 활용:
//   - 안전하게 객체 속성에 접근하고 확인하는 데 활용될 수 있음

//  - 주의 사항:
//   - 상속된 속성은 확인하지 않음: hasOwnProperty는 해당 객체에 직접 정의된 속성만 확인하므로, 프로토타입 체인에 있는 속성은 체크하지 않음
//   - 오버라이드 가능성: 객체의 속성으로 hasOwnProperty를 정의하면 기본 동작을 오버라이드할 수 있음. 따라서 이 메서드를 사용할 때는 객체의 원래 프로토타입 메서드를 사용하기 위해 call이나 apply로 호출하는 것이 좋음
//   - Object.hasOwn()가 권장됨. hasOwnProperty() 는 이를 지원하는 브라우저에서만 사용됨

// 1. 사용 예
const obj = { name: 'wang', age: 25 }
console.log(obj.hasOwnProperty('name')) // true
console.log(obj.hasOwnProperty('gender')) // false

// 2. 프로토타입 체인 확인
const parent = { inherited: 'inherited text' }
const child = Object.create(parent)
child.ownProperty = 'own property text'

console.log(child.hasOwnProperty('inherited')) // false (해당 객체에 직접 정의된 속성만 확인함)
console.log(child.hasOwnProperty('ownProperty')) // true

// 3. 안전한 속성 접근
function getProperty(obj, prop) {
  return obj.hasOwnProperty(prop) ? obj[prop] : undefined
}

const person = { name: 'wang' }

console.log(getProperty(person, 'name')) // wang
console.log(getProperty(person, 'age')) // undefined

// 4. 기본 동작 오버라이드 가능 예
const obj4 = { hasOwnProperty: () => false }
console.log(Object.prototype.hasOwnProperty.call(obj4, 'key')) // false
