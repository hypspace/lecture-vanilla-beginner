/* Number.prototype.toLocaleString() */

//  - 설명:
//   - 숫자를 로케일에 맞는 형식의 문자열로 변환

//  - 활용:
//   - 국제화된 사용자 인터페이스(UI)에서 이하 웹 애플리케이션에서 숫자를 표시할 때 특히 유용
//   - 통화, 퍼센트, 숫자 포맷 등을 로케일에 맞춰 변환할 수 있음

//  - 주의 사항:
//   - toLocaleString()의 출력 결과는 사용자의 로케일 설정에 따라 다를 수 있음
//   - 특정 로케일과 옵션을 지정하면, 해당 형식에 맞춰 숫자를 표현할 수 있음
//   -

// 1. 기본 사용
const number = 1232189
console.log(number.toLocaleString()) // '1,232,189' (로케일에 따라 다름)

// 2. 특정 로케일 지정
console.log(1, number.toLocaleString('de-DE')) // '1.232.189' (독일 형식)
console.log(number.toLocaleString('fr-FR')) // '1 232 189' (프랑스 형식)

// 3. 통화 형식 사용
const price = 1234567.89
console.log(
  price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
) // '$1,234,567.89'

// 4. 퍼센트 형식 사용
const percent = 0.12
console.log(percent.toLocaleString('en-US', { style: 'percent' })) // '12%'

// 5. 소수점 자리수 지정
const number2 = 1234567.89
console.log(
  number2.toLocaleString('en-US', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  })
) // '1,234,567.8900'
