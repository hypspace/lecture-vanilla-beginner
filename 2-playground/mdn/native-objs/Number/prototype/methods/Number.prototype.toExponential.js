/* Number.prototype.toExponential(fractionDigits: 소수점 아래 몇 자리까지 표시할 지) */

//  - 설명:
//   - 숫자를 지수 표기법으로 표기해 반환

//  - 활용:
//   - 특별한 상황 빼고는 잘 쓰이지 않는 편
//   - 과학적 계산, 데이터 시각화에서 큰 숫자나 작은 숫자를 표현할 때 (천문학, 물리학, 공학 분야)

// 1. 과학적 데이터 표시
const massOfEarth = new Number(5.972e24)
console.log(massOfEarth.toExponential(2)) // 5.97e+24

// 2. 과학적 계산
const speedOfLight = new Number(299792458)
console.log(speedOfLight.toExponential(3)) // 2.998e+8

// 3. 작은 숫자 표현
const smallNumber = new Number(0.000000123)
console.log(smallNumber.toExponential(2)) //1.23e-7
