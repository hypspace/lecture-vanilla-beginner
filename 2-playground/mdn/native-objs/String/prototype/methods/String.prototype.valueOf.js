/* String.prototype.valueOf() */

//  - 설명:
//   - 문자열 객체의 원시 값을 반환. 문자열 객체에서 기본 문자열 값을 추출하는 데 사용됨
//   - 문자열 객체의 원시 값을 반환하는 데 사용됨. 원시 문자열과 동일한 값을 제공함
//   - 일반적으로는 문자열 리터럴을 사용할 때 직접적으로 valueOf()를 호출할 필요는 없음

//  - 활용:
//   - 문자열 객체를 다룰 때 유용하게 활용됨

//  - 주의 사항:
//   - 일반적으로 문자열 객체에 대해 valueOf()를 사용하는 것이 일반적이며, 문자열 리터럴에 대해 사용할 필요는 없음
//   - valueOf() 메서드는 문자열 객체의 기본 형식을 반환하는 메서드

//   - toString()과 valueOf()의 차이
//    - 두 메서드는 같은 값을 반환하지만, 사용 용도와 의도가 다름
//      - toString(): 문자열 객체를 문자열로 표현할 때 사용. 주로 출력이나 결합에 적합
//      - valueOf(): 문자열 객체의 원시 값을 반환. 내부적으로 값이 필요할 때 사용

// 1. 사용 예
const strObj = new String('hello, world')
const value = strObj.valueOf()
console.log(value) // hello, world
console.log(typeof value) // string

// ... String.prototype.toString.js 참고
