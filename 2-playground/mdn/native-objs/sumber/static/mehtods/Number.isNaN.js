/* Number.isNaN(value) */

//  - 설명:
//   - 주어진 값이 NaN (Not-a-Number)인지 확인하는 메서드
//   - 전달받은 값이 NaN인지 여부를 결정하고 입력이 Number 유형이 아니라면 false를 반환
//   - Number.isNaN()은 일반적인 isNaN() 함수보다 더 엄격하게 작동함. 이 함수는 원래의 전역 isNaN() 함수보다 강력함

//  - 활용:
//   - 특정 값이 NaN인지 검증할 때 사용

//  - 주의 사항:
//   - Number.isNaN()은 NaN만을 검사하기 때문에, isNaN()과는 다르게 다른 값에 대해서는 false를 반환
//   - isNaN('hello')는 true를 반환하지만, Number.isNaN('hello')는 false를 반환
//   - 타입이 number가 아닌 값에 대해서도 false를 반환

// 1. NaN 확인
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(42)) // false
console.log(Number.isNaN('NaN')) // false (문자열)
console.log(Number.isNaN(undefined)) // false
console.log(Number.isNaN(null)) // false
console.log(Number.isNaN(Infinity)) // false
console.log(Number.isNaN(0)) // false
console.log(Number.isNaN(Number.NaN)) // true

// 2. 예시 활용
function validateNumber(value) {
  if (Number.isNaN(value)) {
    return '입력값이 숫자가 아닙니다 (NaN)'
  }
  return '입력은 유효한 숫자입니다: ' + value
}

console.log(validateNumber(NaN)) // 입력값이 숫자가 아닙니다 (NaN)
console.log(validateNumber(42)) // 입력은 유효한 숫자입니다: 42
console.log(validateNumber('hello')) // 입력은 유효한 숫자입니다: hello (string이지만 false가 아님)
