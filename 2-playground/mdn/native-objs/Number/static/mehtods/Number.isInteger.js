/* Number.isInteger(value) */

//  - 설명:
//   - 주어진 값이 정수인지 확인하는 메서드. 주어진 값이 정수인지 판별
//   - 값이 숫자이며 소수점 이하가 없는 경우, 즉 정수일 때 true를 반환. 그렇지 않은 경우에는 false를 반환

//  - 활용:
//   - 입력값이 정수인지 검증할 때 사용
//   - 사용자 입력 또는 수치 계산의 결과가 정수인지 확인할 때 유용

//  - 주의 사항:
//   - Number.isInteger()는 값이 숫자인지 확인하지 않으므로, 문자열이나 다른 타입의 값을 전달할 경우 false를 반환
//   - NaN, Infinity, 또는 -Infinity는 모두 정수가 아니므로 false를 반환

// 1. 정수 확인 예
console.log(Number.isInteger(3.14)) // false
console.log(Number.isInteger(-3.14)) // false

// 2. 예시 활용
function validateInteger(value) {
  if (Number.isInteger(value)) {
    return '입력은 유효한 정수입니다: ' + value
  }
  return '입력이 유효한 정수가 아닙니다.'
}

console.log(validateInteger(42)) // 입력은 유효한 정수입니다: 42
console.log(validateInteger(3.14)) // 입력이 유효한 정수가 아닙니다.
console.log(validateInteger(NaN)) // 입력이 유효한 정수가 아닙니다.
console.log(validateInteger('hello')) // 입력이 유효한 정수가 아닙니다.
