/* Array.prototype.toLocaleString(locales?, options?) */

//  - 설명:
//   - 배열의 요소를 지역화된 문자열로 변환하여 반환. 배열의 각 요소를 쉼표로 구분하여 결합하되, 각 요소의 toLocaleString 메서드를 사용하여 지역화된 표현을 생성함
//   - 배열의 요소를 지역화된 문자열로 변환할 때 유용하게 사용됨

//  - 활용:
//   - 다양한 지역의 숫자, 날짜 및 통화 형식을 표시할 때 유용
//   - 다국어 지원을 고려할 때 배열의 내용을 적절하게 표현할 수 있음

//  - 주의 사항:
//   - 원본 배열은 변경되지 않으며, 새로운 문자열이 반환됨
//   - 배열이 비어 있다면 빈 문자열('')을 반환함

//      - locales: 선택 사항으로, 사용할 언어를 나타내는 문자열 또는 문자열 배열입니다.
//      - options: 선택 사항으로, 출력 형식을 지정하는 객체입니다.

// 1. 사용 예
const numbers = [1000, 2000, 3000]

const numberString = numbers.toLocaleString() // 기본적으로 쉼표로 구분된 문자열 반환

console.log(numberString) // 1,000,2,000,3,000 (환경에 따라 다를 수 있음)

// 2. 활용 예시

// - 다국어 사용자 인터페이스 - 다양한 언어와 지역의 사용자에게 숫자 데이터를 보여줄 때 사용할 수 있음
const sales = [2500.5, 3000.75, 1500.0]

const usSales = sales.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
})
console.log(usSales) // $2,500.50,$3,000.75,$1,500.00
const resultArray = usSales.match(/\$[0-9,]+\.[0-9]+/g)
console.log(resultArray) // ['$2,500.50', '$3,000.75', '$1,500.00']
