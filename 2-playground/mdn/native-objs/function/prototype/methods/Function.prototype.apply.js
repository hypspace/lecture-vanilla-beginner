/* Function.prototype.apply(thisArg, [argsArray]) */

//  - 설명:
//   - 메서드 호출 방식의 차이를 만들어 냄. 특정 컨텍스트에서 함수를 실행할 수 있도록 해줌. 주어진 this 값과 배열 또는 유사 배열 객체의 인수 목록을 사용하여 함수를 호출함.
//   - 이 함수의 구문은 거의 call() 구문과 유사함. 근본적인 차이점은 call() 은 함수에 전달될 인수 리스트를 받는데 비해, apply() 는 인수들의 단일 배열을 받는다는 점. call은 인수를 개별적으로 call(null, 'wang', 'long'), apply는 배열로 전달한다는 점이 중요한 차이 apply(null, ['wang', 'long'])
//   - 함수를 특정 this 값과 배열 형태의 인수 목록을 사용해 호출하는 데 유용함. 다양한 상황에서 함수의 동작을 유연하게 조정할 수 있는 강력한 도구

//  - 활용:
//   -

//  - 주의 사항:
//   - apply()는 함수 호출 시 인수를 배열 형태로 전달해야 하며, 단일 인수로 전달할 수 없음
//   - ES6에서 도입된 spread 문법(...)을 사용하면 apply() 대신 더 간결하게 함수를 호출할 수 있음

//   - 문법:
//      - thisArg: 함수가 실행될 때 사용할 this 값
//      - argsArray: 함수에 전달할 인수 배열 또는 유사 배열 객체

// 1. 사용 예

// - apply 메서드 사용 예
function sum(a, b, c) {
  return a + b + c
}
const numbers = [1, 2, 3]
const resultUsingApply = sum.apply(null, numbers)
console.log(resultUsingApply) // 6

// - ES6에 도입된 spread operator 사용 예
const resultUsingSpread = sum(...numbers)
console.log(resultUsingSpread) // 6

// 2. 컨텍스트 확인하기
const obj = { name: 'wang', age: 31 }

function getContext() {
  return this
}

console.log(getContext()) // Object [global]
console.log(getContext.apply(obj)) // { name: 'wang', age: 31 }

// 3. 활용 예시

// - 배열의 최대값 찾기
const numberArr = [1, 2, 5, 10]
const max = Math.max.apply(null, numberArr)
console.log(max) // 10

// - 다양한 객체에 동일한 함수 적용
const obj1 = { value: 10 }
const obj2 = { value: 20 }

function displayValue() {
  console.log(this.value)
}
displayValue.apply(obj1) // 10
displayValue.apply(obj2) // 20

// 4. 실제 개발에서 유용한 사례

// - 이벤트 핸들러에서 this 바인딩: DOM 이벤트 핸들러에서 this를 특정 객체에 바인딩할 때 사용할 있음
function handleClick() {
  console.log(this.name)
}

const person = { name: 'Wang' }
// document.querySelector('button').addEventListener('click', function () {
//   handleClick.apply(person)
// }) // nodemon으로는 document를 찾을 수 없기 때문에 주석 처리함

// - 상속 구현과 메서드 호출: 서브클래스에서 부모 클래스의 메서드를 호출할 때 apply()를 사용하여 this 바인딩을 설정할 수 있음
function Parent(name) {
  this.name = name
}

Parent.apply.greet = function () {
  console.log(this.name)
}

function Child(name) {
  Parent.apply(this, [name]) // 부모 생성자 호출
}

Child.prototype = Object.create(Parent.prototype) // Parent {}
Child.prototype.sayHello = function () {
  return this.name + ', hello there'
}

const child = new Child('Wang')
console.log(child.sayHello()) // Wang, hello there

// - 유틸리티 함수에서 this 바인딩: 일반적인 유틸리티 함수에서 여러 객체에 동일한 작업을 수행할 때 사용될 수 있음. 다양한 객체에 메서드를 적용할 수 있기 때문에 코드 재사용성을 높일 수 있음. 객체의 메서드를 다형적으로 사용할 수 있음. 여러 종류의 객체가 동일한 메서드를 가지고 있을 때 유용함
const obj10 = { value: 10 }
const obj20 = { value: 20 }

function showValue() {
  console.log(this.value)
}

showValue.apply(obj10) // 10
showValue.apply(obj20) // 20

// - 함수의 동적 인수 처리: 배열 형태로 인수를 처리해야 하는 함수에서 apply()를 사용할 수 있음
function sum() {
  return Array.prototype.reduce.call(arguments, (prev, sum) => prev + sum, 0)
}

const arr = [1, 2, 3]
const total = sum.apply(null, arr) // 하지만 요즘에는 대부분 spread operator를 사용함
console.log(total) // 6
