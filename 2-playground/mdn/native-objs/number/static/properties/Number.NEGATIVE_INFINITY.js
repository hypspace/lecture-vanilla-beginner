/* Number.NaN */

//  - 설명:
//   - Number.NEGATIVE_INFINITY는 음의 무한대를 나타냄. 수학적으로 정의되지 않은 값 중 하나로, 무한대로 감소하는 것을 나타냄
//   - 이 값은 주로 수치 연산의 결과가 너무 작아져서 발생 (예를 들어, 어떤 수를 0으로 나누거나, 매우 작은 수에서 매우 큰 수를 빼는 등의 상황에서 생성될 수 있음)
//   - Number.NEGATIVE_INFINITY는 수치 연산의 경계 조건을 나타내는 중요한 값이며, 이를 적절히 처리하는 것이 필요함

//  - 활용:
//   - 무한히 작은 값으로 수치 연산이 실패했음을 나타냄
//   - 알고리즘에서 경계 조건을 설정하거나, 데이터의 한계를 나타낼 때 유용

//  - 주의 사항:
//   - Number.NEGATIVE_INFINITY는 숫자 타입으로, typeof Number.NEGATIVE_INFINITY는 "number"로 반환됨
//   - 수치 연산 결과가 -Infinity가 되는 경우, 해당 상황을 잘 이해하고 처리해야 함

// 1. NEGATIVE_INFINITY 생성
console.log(-1 / 0) // -Infinity
console.log(Math.log(0)) // -Infinity

// 2. NEGATIVE_INFINITY 확인
console.log(Number.NEGATIVE_INFINITY === -Infinity) // true

// 3. 입력 검증
function checkValue(value) {
  if (value === Number.NEGATIVE_INFINITY) {
    return '입력은 음의 무한대입니다.'
  }
  return '입력은 유효한 숫자입니다: ' + value
}

console.log(checkValue(Number.NEGATIVE_INFINITY)) // '입력은 음의 무한대입니다.'
console.log(checkValue(42)) // '입력은 유효한 숫자입니다: 42'
