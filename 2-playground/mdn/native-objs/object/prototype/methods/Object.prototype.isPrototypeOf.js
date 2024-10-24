/* Object.prototype.isPrototypeOf(obj) */

//  - 설명:
//   - 특정 객체가 다른 객체의 프로토타입 체인에 포함되어 있는지를 확인하는 데 사용되는 메서드. 이 메서드는 두 객체 간의 상속 관계를 확인하는 데 유용함. ECMAScript 3 (1999) 도입
//   - 특정 객체가 다른 객체의 프로토타입 체인에 포함되어 있는지를 확인하는 메서드로, 객체 간의 상속 관계를 이해하는 데 매우 유용함. 상속 구조를 확인하고, 객체 지향 프로그래밍에서의 관계를 파악하는 데 도움을 줌

//  - 주의 사항:
//   - 상속 구조 확인: isPrototypeOf 메서드는 객체의 프로토타입 체인을 기반으로 하므로, 객체가 어떤 클래스의 인스턴스인지 확인하는 데 유용함
//   - 직접적인 속성 확인 아님: 이 메서드는 객체가 직접 소유하고 있는 속성이 아닌, 프로토타입 체인에 속한 속성을 확인함
//   - hasOwnProperty와 비슷하지만 hasOwnProperty는 해당 객체에 직접 정의된 속성을 확인하고 isPrototypeOf는 다른 객체의 프로토타입 체인에 포함되어 있는지를 확인하는 데 사용됨. 하나는 자신의 속성을 확인하고 하나는 자신 객체 자체가 상속 관계인지 확인함

// 1. 사용 예(프로토타입 관계 확인)
const parent = {}
const child = Object.create(parent)

console.log(parent.isPrototypeOf(child)) // true
console.log(Object.prototype.isPrototypeOf.call(Array.prototype, [])) // true

// 2. 복잡한 프로토타입 체인 확인(부모 생성자의 프로토타입에 자식 인스턴스가 상속되어 있는지 확인)
function Parent() {}
function Child() {}
Child.prototype = Object.create(Parent.prototype)

const myChild = new Child()
console.log(Parent.prototype.isPrototypeOf(myChild)) // true

// 3. 사용자 정의 객체 확인
function Person2(name) {
  this.name = name
}
const wang = new Person2('Wang')

console.log(Object.prototype.isPrototypeOf.call(Person2.prototype, wang)) // true

// 4. 현업 예제 - isPrototypeOf 메서드는 프로토타입 체인 관계를 명시적으로 확인하기 위해 사용됨. 상속 구조를 명확히 하여 코드의 목적과 동작을 이해하는 데 도움을 줌
function Parent2(name) {
  this.name = name
}

Parent2.prototype.sayHello = function () {
  console.log(`내 이름은 ${this.name}`)
}

function Child2(name, age) {
  Parent.call(this, name) // 부모 생성자 호출
  this.age = age
}

Child2.prototype = Object.create(Parent2.prototype)
Child2.prototype.constructor = Child2 // 자식 클래스가 부모 클래스를 상속하도록 설정

Child2.prototype.sayAge = function () {
  console.log(`저는 ${this.age}살 입니다`)
}

const parentInstance = new Parent2('Wang')
const childInstance = new Child2('Long', 10)

console.log(Parent2.prototype.isPrototypeOf(childInstance)) // true
console.log(Child2.prototype.isPrototypeOf(childInstance)) // true
console.log(Child2.prototype.isPrototypeOf(parentInstance)) // false

parentInstance.sayHello() // 내 이름은 Wang
childInstance.sayHello() // 내 이름은 undefined
childInstance.sayAge() // 저는 10살 입니다
