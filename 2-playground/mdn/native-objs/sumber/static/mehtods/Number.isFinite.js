/* Number.isFinite(value) */

//  - 설명:
//   - 주어진 값이 유한한 숫자인지 확인하는 메서드. 주어진 값이 유한수인지 판별
//   - 이 메서드는 값이 숫자이며, Infinity, -Infinity, 또는 NaN이 아닌 경우 true를 반환
//   - 입력값이 실제로 수치 연산에서 유효한지를 체크할 때 정말 유용

//  - 활용:
//   - 값이 유한한 숫자인지 검증할 때 사용
//   - 사용자 입력 또는 API 응답에서 수치의 유효성을 확인할 때 유용

//  - 주의 사항:
//   - Number.isFinite()는 값이 숫자인지 확인하지 않으므로, 문자열이나 다른 타입의 값을 전달할 경우 false를 반환
//   - 비교적 안전한 숫자 검증을 위해 Number.isFinite()를 사용하는 것이 좋음

// 1. 유한한 숫자인지 확인
console.log(Number.isFinite(10)) // true
console.log(Number.isFinite(-1)) // true
console.log(Number.isFinite(0)) // true
console.log(Number.isFinite(NaN)) // false
console.log(Number.isFinite(Infinity)) // false
console.log(Number.isFinite(-Infinity)) // false
console.log(Number.isFinite('hi')) // false
console.log(Number.isFinite(null)) // false
console.log(Number.isFinite(undefined)) // false

// 2. 예시 활용
function validInput(value) {
  if (Number.isFinite(value)) {
    return '입력은 유효한 유한수입니다: ' + value
  }
  return '입력이 유효한 유한수가 아닙니다.'
}

console.log(validInput(10)) // 입력은 유효한 유한수입니다: 10
console.log(validInput(isFinite)) // 입력이 유효한 유한수가 아닙니다.
console.log(validInput(NaN)) // 입력이 유효한 유한수가 아닙니다.
console.log(validInput('hi')) // 입력이 유효한 유한수가 아닙니다.
