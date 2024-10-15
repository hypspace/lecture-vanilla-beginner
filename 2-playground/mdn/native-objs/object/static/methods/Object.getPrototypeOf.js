/* Object.getPrototypeOf(obj) */

//  - 설명:
//   - 주어진 객체의 프로토타입을 반환. 상속받고 있는 부모 객체를 찾는 데 유용. ES5에 도입됨
//   - 객체의 프로토타입을 조회하는 데 사용되는 유용한 메서드. 객체 지향 프로그래밍에서 상속과 프로토타입 체인을 이해하는 데 중요한 역할을 함. 객체의 메서드와 속성에 대한 접근을 용이하게 함
//   - 객체의 프로토타입을 조회하는 기능을 제공함. 이를 통해 객체의 상속 관계(구조)를 더 쉽게 탐색할 수 있게됨

//  - 활용:
//   - 객체의 프로토타입 체인을 탐색할 때 유용. 객체의 상속 관계를 이해하는 데 도움을 줌. 객체의 메서드나 속성을 확인할 때 사용할 수 있음

//  - 주의 사항:
//   - 주어진 객체가 null인 경우 null을 반환함

// 1. 사용 예

const parent = {
  greet() {
    return 'hi'
  },
}

const child = Object.create(parent)
console.log(Object.getPrototypeOf(child)) // {greet: [Function: greet]}
console.log(Object.getPrototypeOf(child) === parent) // true

// 2. 프로토타입 메서드 호출 - 프로토타입 메서드를 호출하겠다는 명시적인 방법
console.log(Object.getPrototypeOf(child).greet()) // hi

// 3. null 반환
const obj = {}
console.log(Object.getPrototypeOf(obj)) // [Object: null prototype] {}
console.log(Object.getPrototypeOf(Object.prototype)) // null
