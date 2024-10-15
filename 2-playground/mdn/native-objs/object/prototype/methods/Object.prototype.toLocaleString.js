/* Object.prototype.toLocaleString(locales?) */

//  - 설명:
//   - 객체를 특정 로케일에 맞는 문자열 표현으로 변환. ECMAScript 3 (1999) 도입
//   - 객체에 따라 다르게 구현되며, 주로 날짜, 숫자 등의 형식화에 사용됨

//  - 활용:
//   - 주로 숫자, 날짜, 시간 등을 사용자 지정 형식으로 출력할 때 사용됨
//   - 사용자의 지역에 따라 날짜나 숫자의 형식을 자동으로 조정할 수 있음

//  - 주의 사항:
//   - Object 객체에서 상속받지만, 구체적인 형식은 객체의 구현에 따라 다를 수 있음
//   - 로케일 및 옵션에 따라 결과가 달라질 수 있음

// 1. 사용 예
const date = new Date()
console.log(date.toLocaleString()) // 2024. 10. 14. 오후 9:26:02 (지역에 따라 다르게 출력)

// 2. 활용 예시 - 사용자 인터페이스에서 사용자 지정 형식으로 날짜나 통화 값을 표시할 때 활용함. 예를 들어, 전자상거래 사이트에서 사용자의 지역에 맞춰 가격을 포맷팅할 수 있음
const price = 1234567.89
const formattedPrice = price.toLocaleString('ko-KR', {
  style: 'currency',
  currency: 'KRW',
})
console.log(formattedPrice) // ₩1,234,568
