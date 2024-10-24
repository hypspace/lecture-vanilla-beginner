/* Number.MAX_SAFE_INTEGER */

//  - 설명:
//   - JS에서 안전하게 표현할 수 있는 가장 큰 정수 값
//   - JS에서 안전하게 다룰 수 있는 최대 정수 값을 제공하는 중요한 정적 속성
//   - 이 값보다 큰 정수는 정밀도 손실이 발생할 수 있음

//  - 활용:
//   - 안전한 정수 연산이 필요한 경우 사용. 예를 들어, 큰 숫자를 다룰 때 이 한계를 넘어서는지 확인하는 데 유용
//   - 데이터베이스의 ID, 카운터, 기타 정수 연산에서 정밀도를 보장하기 위해 이 값을 기준으로 사용할 수 있음

//  - 주의 사항:
//   - Number.MAX_SAFE_INTEGER를 초과하는 정수를 사용할 경우, 결과가 예상과 다를 수 있으며, 정밀도 손실이 발생할 수 있음
//   - 안전한 정수 범위를 벗어나는 연산을 수행할 때는 BigInt 타입을 사용하는 것이 좋음

// 1. 최대 안전 정수 확인
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// 2. 안전한 범위 내의 숫자 사용
const safeInteger = Number.MAX_SAFE_INTEGER
console.log(safeInteger + 1) // 9007199254740992 (여전히 안전한 범위)
console.log(safeInteger + 2) // 9007199254740992 (정밀도 손실 발생)

// 3. 안전하지 않은 정수 연산 확인
const bigNumber = Number.MAX_SAFE_INTEGER + 1
console.log(bigNumber === Number.MAX_SAFE_INTEGER + 2) // true, (정밀도 손실로 인해서 같은 값으로 평가됨)

// 4. 안전한 덧셈 함수
function safeAdd(a, b) {
  if (a > Number.MAX_SAFE_INTEGER || b > Number.MAX_SAFE_INTEGER) {
    throw new Error('값이 최대 안전 정수를 초과합니다.')
  }
  return a + b
}
