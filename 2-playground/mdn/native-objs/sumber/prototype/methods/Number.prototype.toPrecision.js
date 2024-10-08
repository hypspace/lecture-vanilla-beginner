/* Number.prototype.toPrecision() */

//  - 설명:
//   - 숫자를 지정한 자릿수에 맞춰 문자열로 변환
//   - 이 메서드는 전체 자릿수를 기준으로 포맷을 적용하여, 특정한 자릿수로 반올림하거나 표시할 수 있음

//  - 활용:
//   - 숫자의 전체 자릿수를 조정할 때 유용
//   - 과학적 계산에서 유용하게 사용되며, 특정 정밀도로 숫자를 표시할 필요가 있을 때 사용
//   - 수치 데이터의 정확한 표현이 필요한 경우에 적합

//  - 주의 사항:
//   - toPrecision에 지정한 자릿수가 현재 숫자의 자릿수보다 작으면 반올림하여 표시
//   - 지정할 수 있는 자릿수는 1에서 21까지입니다. 그 이상을 지정하면 RangeError가 발생
//   - 항상 문자열로 반환되므로, 숫자로 다시 사용하려면 Number()나 parseFloat()를 사용해야 함

// 1. 기본 사용
const num = 123.456
console.log(num.toPrecision(3)) // '123'
console.log(num.toPrecision(4)) // '123.5'
console.log(num.toPrecision(5)) // '123.46'

// 2. 전체 자릿수 조정
const decimalPointNum = 0.123456
console.log(decimalPointNum.toPrecision(3)) // '0.123'
console.log(decimalPointNum.toPrecision(4)) // '0.1235'

// 3. 과학적 표기법 사용 (큰 숫자 처리할 때 과학적 표기법으로 나타낼 수 있음)
const num2 = 123456789
console.log(num2.toPrecision(5)) // '1.2346e+8' (과학적 표기법) - 전체 자릿수가 5인 경우에 해당. 이는 1.2346 뒤에 8이라는 지수를 붙여서 과학적 표기법으로 반환되는 것
