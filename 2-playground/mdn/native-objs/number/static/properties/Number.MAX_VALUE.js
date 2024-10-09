/* Number.MAX_VALUE */

//  - 설명:
//   - JS에서 표현할 수 있는 가장 큰 수를 나타내는 정적 속성
//   - 이 값보다 큰 수를 사용하면 Infinity로 처리

//  - 활용:
//   - 매우 큰 수를 다룰 때
//   - 수학적 계산이나 알고리즘에서 최대값을 체크하거나 경계 조건을 설정할 때

//  - 주의 사항:
//   - Number.MAX_VALUE는 양의 유한 숫자의 최대값이며, 이를 초과하는 값은 Infinity로 처리
//   - 이 값은 정수 범위와는 다르기 때문에, 정수 연산에서 사용하는 Number.MAX_SAFE_INTEGER와는 구분해야 함

// 1. 최대값 확인
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308

// 2. Infinity와 비교
const largeNumber = Number.MAX_VALUE * 2
console.log(largeNumber) // Infinity

// 3. 최대값 체크
function checkMaxValue(num) {
  if (num > Number.MAX_VALUE) {
    return '값이 최대값을 초과합니다.'
  }
  return '값이 안전 범위 내에 있습니다.'
}

console.log(checkMaxValue(1e309)) // '값이 최대값을 초과합니다.'
console.log(checkMaxValue(1e308)) // '값이 안전 범위 내에 있습니다.'
