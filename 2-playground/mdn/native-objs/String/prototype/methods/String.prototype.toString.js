/* String.prototype.toString() */

//  - 설명:
//   - 문자열 객체를 문자열로 변환하여 반환. 객체의 문자열 표현을 반환
//   - 문자열 객체의 기본 형식을 반환하는 역할을 하며, 원시 문자열과 동일한 값을 반환
//   - 문자열 객체를 문자열로 변환하는 간단한 방법. 원시 문자열과 동일한 값을 반환하므로, 문자열 객체를 다룰 때 유용하게 사용할 수 있음

//  - 활용:
//   - 문자열 객체에서 원시 문자열로 변환, 타입 변환 확인, 연산에 사용 등 다양한 상황에서 활용될 수 있음

//  - 주의 사항:
//   - 일반적인 문자열 리터럴에 대해 toString()을 호출하면 원래 문자열이 반환됨
//   - 문자열 객체에 대해서만 toString()을 사용하는 것이 일반적임
//   - 일반적으로는 문자열 리터럴을 사용할 때 직접적으로 toString()을 호출할 필요는 없음

// 1. 사용 예
const strObj = new String('hello, world')
console.log(typeof strObj) // object

const str = strObj.toString()
console.log(str) // hello, world
console.log(typeof str) // string

// 2. 원시 문자열과의 비교
const strPrimitive = 'hello world'
const strObj2 = new String('hello world')

console.log(strPrimitive.toString()) // hello world
console.log(strObj2.toString()) // hello world
console.log(strPrimitive === strObj) // false (다른 타입)
console.log(strPrimitive.toString() === strObj2.toString()) // true

// 3. 활용 예시

// - 문자열 객체에서 원시 문자열로 변환
const stringObj = new String('hello, world')
const normalizedStr = stringObj.toString()
console.log(normalizedStr) // hello, world

// - 타입 변환 확인
const value = new String('example')
console.log(value.toString()) // example
console.log(typeof value.toString()) // string

// - 연산에 사용
const stringObj2 = new String('hello')
const combined = stringObj2.toString() + ', world'
console.log(combined) // hello, world
