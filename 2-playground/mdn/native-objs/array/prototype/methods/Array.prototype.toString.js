/* Array.prototype.toString() */

//  - 설명:
//   - 지정된 배열 및 그 요소를 나타내는 문자열을 반환. 배열의 각 요소를 쉼표로 구분하여 결합한 문자열을 생성
//   - 배열의 각 요소를 문자열로 변환한 후, 쉼표로 구분하여 연결한 결과를 반환함

//  - 활용:
//   - 배열을 문자열로 표현하고 싶을 때 유용
//   - 디버깅이나 로그 출력 시 배열의 내용을 쉽게 확인할 수 있음

//  - 주의 사항:
//   - 원본 배열은 변경되지 않으며, 새로운 문자열이 반환됨
//   - 만약 배열이 비어 있다면 빈 문자열('')을 반환함

// 1. 사용 예
const numbers = ['apple', 'banana', 'cherry']

const numbersString = numbers.toString()
console.log(numbersString) // apple,banana,cherry
