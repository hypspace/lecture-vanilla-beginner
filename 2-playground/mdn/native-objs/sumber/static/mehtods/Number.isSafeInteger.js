/* Number.isSafeInteger(testValue) */

//  - 설명:
//   - 주어진 값이 '안전한 정수'인지 확인하는 메서드. 전달된 값이 안전한 정숫값인지 확인. 안전한 정수 검증을 위해 유용
//   - 안전한 정수는 JS에서 정확하게 표현할 수 있는 정수를 의미하며, 이 범위는 -2^53 + 1에서 2^53 - 1 사이의 정수
//   - 값이 정수이고 안전한 정수 범위 내에 있을 때 true를 반환. 그 외의 경우에는 false를 반환

//  - 활용:
//   - 정수가 안전한 범위 내에 있는지를 확인할 때 사용
//   - 대규모 계산이나 데이터 처리에서 정밀도를 보장하기 위해 유용

//  - 주의 사항:
//   - Number.isSafeInteger()는 값이 숫자인지 확인하지 않으므로, 문자열이나 다른 타입의 값을 전달할 경우 false를 반환
//   - 안전한 정수 범위를 벗어나는 큰 정수는 정확히 표현할 수 없기 때문에, false를 반환

// 1. 안전한 정수 확인
console.log(Number.isSafeInteger(42)) // true
console.log(Number.isSafeInteger(-3)) // true
console.log(Number.isSafeInteger(0)) // true
console.log(Number.isSafeInteger(2 ** 53 - 1)) // true
console.log(Number.isSafeInteger(2 ** 53)) // false (정확하게 표현할 수 없는 정수)
console.log(Number.isSafeInteger(2 ** 53 + 1)) // false
console.log(Number.isSafeInteger(3.14)) // false
console.log(Number.isSafeInteger(NaN)) // false
console.log(Number.isSafeInteger(Infinity)) // false
console.log(Number.isSafeInteger('42')) // false (문자열)
console.log(Number.isSafeInteger(null)) // false
console.log(Number.isSafeInteger(undefined)) // false

// 2. 예시 활용
function validateSafeInteger(value) {
  if (Number.isSafeInteger(value)) {
    return '입력은 유효한 안전한 정수입니다: ' + value
  }
  return '입력이 유효한 안전 정수가 아닙니다.'
}

console.log(validateSafeInteger(42)) // 입력은 유효한 안전한 정수입니다: 42
console.log(validateSafeInteger(2 ** 53)) // 입력이 유효한 안전 정수가 아닙니다.
console.log(validateSafeInteger(3.14)) // 입력이 유효한 안전 정수가 아닙니다.
console.log(validateSafeInteger('100')) // 입력이 유효한 안전 정수가 아닙니다.
