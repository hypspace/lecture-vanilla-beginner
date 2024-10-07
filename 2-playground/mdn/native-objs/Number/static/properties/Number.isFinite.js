/* Number.EPSILON */

//  - 설명:
//   - 가장 작은 양의 부동 소수점 숫자와 1 사이의 차이를 나타내는 상수

//  - 활용:
//   - 부동 소수점 수의 비교에서 유용하게 사용될 수 있는 정적 속성
//   - 부동 소수점 숫자 계산에서 정밀도를 확인하는 데 유용 동 소수점 수의 비교에서 유용
//   - 특정 임계값을 기준으로 두 수의 차이가 Number.EPSILON보다 작으면 두 수를 같다고 판단

//  - 주의 사항:
//   - 부동 소수점 연산에서 비교를 수행할 때는 항상 오차 범위를 고려해야 함

// 1. 동일성 확인
const a = 0.1 + 0.2
const b = 0.3

console.log(Math.abs(a - b)) // 5.551115123125783e-17

const areEqual = Math.abs(a - b) < Number.EPSILON // 작으면 두 수를 같다고 판단!
console.log(areEqual) // true
