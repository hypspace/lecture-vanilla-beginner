/* Object(value?) 생성자 */

//  - 설명:
//   - 새로운 객체를 생성하는 생성자 함수. 객체를 생성하는 기본적인 방법 중 하나. 빈 객체를 생성하거나, 특정 값에 기반하여 객체를 생성할 수 있음
//   - Object 생성자는 객체를 생성하는 기본 방법이지만, 객체 리터럴을 사용하는 것이 더 간편하고 직관적. 다양한 상황에 따라 적절한 방법을 선택하여 사용하면 됨

//  - 주의 사항:
//   - 객체를 생성할 때는 {}를 사용하는 것이 일반적이며, new Object()는 추천하지 않는 경우가 많음. 객체 리터럴을 사용하는 것이 더 간단하고 직관적
//   - Object() 생성자는 기본 데이터 타입(문자열, 숫자 등)에서도 사용될 수 있지만, 다른 타입에서는 예상치 못한 결과를 초래할 수 있음

// 1. 사용 예(빈 객체 생성)
const obj = new Object()
console.log(obj) // {}

// 2. 기존 값을 기반으로 객체 생성
const obj2 = new Object({ name: 'Wang', age: 31 })
console.log(obj2) //{ name: 'Wang', age: 31 }

// 3. 프로토타입을 이용한 객체 생성
const proto = { greet: function () {} }
const obj3 = Object.create(proto)
console.log(obj3.greet) // [Function: greet]
