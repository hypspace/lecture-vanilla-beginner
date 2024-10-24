/* Object.prototype.constructor */

//  - 설명:
//   - constructor 속성은 객체를 생성한 함수(생성자)를 참조함. 기본적으로 모든 객체는 constructor 속성을 가지고 있으며, 이는 해당 객체의 유형을 식별하는 데 유용함

//  - 활용:
//   - 객체가 어떤 생성자에 의해 생성되었는지 확인하거나, 새 객체를 생성할 때 해당 생성자를 참조할 수 있음

//  - 주의 사항:
//   - 객체를 직접 수정하거나 재정의할 경우 constructor 속성이 변경될 수 있음. 이를 염두에 두고 사용해야 함

// 1. 사용 예
const obj = {}
console.log(obj.constructor) // ƒ Object() { [native code] }

// 2. 활용 예시
function Person(name) {
  this.name = name
}

const john = new Person('John')
console.log(john.constructor === Person) // true, john은 Person 생성자로부터 생성됨
