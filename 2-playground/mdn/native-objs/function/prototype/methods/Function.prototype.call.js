/* Function.prototype.call(thisArg[, arg1[, arg2[, ...]]]) */

//  - 설명:
//   - 이 함수 구문은 apply()와 거의 동일하지만, call()은 인수 목록을, 반면에 apply()는 인수 배열 하나를 받는다는 점이 중요한 차이

// 1. 사용 예
function sum(a, b, c) {
  return a + b + c
}

const strangeTotal = sum.call(null, [1, 2, 3]) // apply() 처럼 배열을 넣어본다면
console.log(strangeTotal) //. 1,2,3undefinedundefined

const total = sum.call(null, 1, 2, 3)
console.log(total) // 6

// 2. 자식 클래스에서 부모 클래스 메서드 호출
function Animal(name) {
  this.name = name
}

Animal.apply.move = function () {
  // ...
  return this
}

function Dog(name) {
  Animal.call(this, name)
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.greet = function () {
  return this.name + '!'
}

const dog = new Dog('blank')
console.log(dog) // Dog { name: 'blank' }
console.log(dog.greet()) // blank!

// ... Function.prototype.apply.js 참고
