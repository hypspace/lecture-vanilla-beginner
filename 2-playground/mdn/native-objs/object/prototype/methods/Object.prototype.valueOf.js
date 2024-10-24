/* Object.prototype.valueOf() */

//  - 설명:
//   - valueOf() 메서드는 객체의 원시 값을 반환. 기본적으로 모든 객체는 이 메서드를 가지고 있으며, 객체가 원시 값으로 변환될 때 호출됨. ECMAScript 1 (1997) 도입

//  - 활용:
//   - 객체의 값이 필요할 때, 또는 객체를 원시 값으로 변환해야 할 때 사용. 예를 들어, 숫자, 문자열, 논리값 등과 같은 원시 데이터 타입으로 변환할 때 유용

//  - 주의 사항:
//   - 기본 객체의 valueOf()는 일반적으로 객체 자신을 반환. 사용자 정의 객체의 경우, 메서드를 오버라이드하여 다른 값을 반환하도록 할 수 있음

// 1. 사용 예
const obj = { name: 'wang' }
console.log(obj.valueOf()) // { name: 'wang' }

// 2. 활용 예시 - 객체의 원시 값을 필요로 할 때 유용. 예를 들어, 계산을 위해 숫자 객체를 사용할 때 valueOf()를 호출하여 원시 숫자를 얻을 수 있음. 객체의 원시 값을 반환하며, 사용자 정의 객체에서도 오버라이드하여 특정한 값을 반환하도록 할 수 있음
const numObj = new Number(10)
console.log(numObj.valueOf()) // 10

const customObj = {
  valueOf: function () {
    return 42
  },
}

console.log(customObj.valueOf()) // 42
console.log(customObj + 10) // 52 (자동으로 valueOf()가 호출됨. 사용자 정의 객체에서도 오버라이드하여 특정한 값을 반환하도록 할 수 있음)
