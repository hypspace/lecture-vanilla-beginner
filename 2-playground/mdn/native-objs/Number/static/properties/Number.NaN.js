/* Number.NaN */

//  - 설명:
//   - 'Not-a-Number'를 나타내는 특별한 값으로, 수치 연산이 실패했거나 정의되지 않은 수치 결과를 표현
//   - 숫자가 아닌 값을 수치 연산에 사용하거나, 수학적으로 정의되지 않은 연산이 발생했을 때 NaN이 생성됨

//  - 활용:
//   - 수치 연산의 결과가 유효하지 않을 때 이를 나타내는 데 사용
//   - 입력 값이 유효한 숫자인지 검증할 때 유용

//  - 주의 사항:
//   - NaN은 숫자 타입으로, typeof NaN은 'number'로 반환
//   - NaN을 다룰 때는 항상 Number.isNaN() 또는 isNaN() 함수를 사용하여 확인해야 하며, 단순 비교는 피해야 함

// 1. NaN 생성
console.log(0 / 0)
console.log(Math.sqrt(-1))
console.log(parseInt('hi'))

// 2. NaN 확인
console.log(NaN === NaN) // false
console.log(Number.isNaN(NaN)) // true

// 3. 입력 검증
function checkNumber(value) {
  if (Number.isNaN(value)) {
    return '입력한 숫자가 유효하지 않습니다.'
  }
  return '입력한 숫자는 유효한 숫자입니다: ' + value
}

console.log(checkNumber(NaN)) // 입력한 숫자가 유효하지 않습니다.
console.log(checkNumber(36)) // 입력한 숫자는 유효한 숫자입니다: 36
