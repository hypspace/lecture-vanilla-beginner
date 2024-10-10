/* Function.prototype.bind(thisArg[, arg1[, arg2[, ...]]]) */

//  - 설명:
//   - 함수의 this 값과 초기 인수를 미리 설정하여 새로운 함수를 생성하는 메서드
//   - 이 메서드는 주로 객체의 메서드를 다른 객체에 바인딩할 때 사용

//  - 활용:
//   - 이벤트 핸들러에서 this를 특정 객체로 설정하고 싶을 때
//   - 특정 함수에 대한 초기 인수를 고정하여 새로운 함수를 만들고 싶을 때
//   - 클래스 메서드를 다른 객체에 바인딩하여 메서드를 호출할 때

//  - 주의 사항:
//   - bind로 생성된 새로운 함수는 원래 함수의 프로토타입을 그대로 유지
//   - bind 메서드는 원본 함수를 수정하지 않고 새로운 함수를 반환
//   - 바인딩된 함수는 여전히 인자를 받을 수 있으며, bind로 설정한 인수 뒤에 추가적인 인수를 전달할 수 있음

// 1. 사용 예
const obj = {
  getContext: function () {
    return this
  },
}

const boundGetContext = obj.getContext
const boundGetContext2 = obj.getContext.bind(obj)
console.log(boundGetContext()) // Object [global]
console.log(boundGetContext2()) // { getContext: [Function: getContext] }

// 2. 활용 예시

// - 이벤트 핸들러에서 this를 특정 객체로 설정하고 싶을 때
// const button = document.querySelector('button')
// const obj2 = {
//   name: 'button',
//   handleClick: function () {
//     console.log(this.name)
//   },
// }
// button.addEventListener('click', obj2.handleClick.bind(obj))

// - 특정 함수에 대한 초기 인수를 고정하여 새로운 함수를 만들고 싶을 때
function multiply(a, b) {
  return a * b
}

const double = multiply.bind(null, 2)
console.log(double(5)) // 10

// - 클래스 메서드를 다른 객체에 바인딩하여 메서드를 호출할 때
class Counter {
  constructor() {
    this.count = 0
  }

  increment() {
    this.count++
    console.log(this.count)
  }
}

const counter = new Counter()
const incrementFunc = counter.increment.bind(counter)

// 다른 객체에서 호출
const anotherObject = {
  count: 10,
}

// incrementFunc를 anotherObject에 바인딩하면
incrementFunc() // 1
