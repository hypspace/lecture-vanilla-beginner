/* Function.prototype.toString() */

//  - 설명:
//   - Function.prototype.toString() 메서드는 함수의 소스 코드를 문자열로 반환함. 이 메서드는 모든 JS 함수 객체에서 사용할 수 있으며, 함수 정의를 포함한 문자열을 제공함. 함수의 정의를 문자열로 표현할 수 있음

//  - 활용:
//   - 함수의 내용을 문자열로 확인할 때 유용. 주로 디버깅이나 로깅, 또는 함수 동작을 이해하는데 사용될 수 있음

//  - 주의 사항:
//   - 반환되는 문자열은 함수의 구현 방식에 따라 다를 수 있으며 브라우저나 JS 환경에 따라 약간의 차이가 있을 수 있음
//   - 일부 환경에서는 보안상의 이유로 함수의 내용을 제한할 수 있음. 또한 toString 메서드는 항상 함수의 원본 내용을 반환하지 않을 수도 있음. 예를 들어, 최적화로 인해 실제로 실행되는 코드는 다를 수 있음

// 1. 사용 예
function sum(a, b) {
  return a + b
}

console.log(sum.toString()) // function sum(a, b) { return a + b }

// 3. 예시 활용

// - 다른 데이터 형의 메서드 동작 확인
console.log(String.prototype.match.toString()) // function match() { [native code] }
