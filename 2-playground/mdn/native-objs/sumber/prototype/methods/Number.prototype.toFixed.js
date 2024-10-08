/* Number.prototype.toFixed(fractionDigits: 소수점 아래 몇 자리까지 표시할 지) */

//  - 설명:
//   - 숫자를 고정 소수점 표기법인 문자열로 표시

//  - 활용:
//   - 주로 금액, 비율, 과학적 데이터의 소수점 조정 등에서 사용
//   - UI 표시를 위해 숫자를 특정 형식으로 표현할 때 유용

//  - 주의 사항:
//   - toFixed에서 인자는 반올림을 적용함
//   - 결과는 항상 문자열로 반환되고, 숫자로 다시 사용하려면 Number()나 parseFloat()를 사용해야 함
//     - Number(price.toFixed())
//     - parseFloat(price.toFixed())
//   - toFixed에 0~20까지 자리수는 정상 처리하며, 21부터는 20으로 자동 조정됨. 101부터는 RangeError 에러가 발생함

// 1. 소수점 두 자리로 표시
const price = 1
console.log(price.toFixed(2)) // "1.00"

// 2. 정수 부분만 표시 (큰 숫자 처리)
const value = 3.14
console.log(value.toFixed(0)) // "3"
