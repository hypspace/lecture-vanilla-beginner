/* String.prototype.match(regexp) */

//  - 설명:
//   - 문자열이 정규식과 매치되는 부분을 검색
//   - 정규 표현식과 일치하는 결과를 검색하여 배열로 반환. 정규 표현식에 일치하는 부분이 없다면 null을 반환
//   - 정규 표현식과 일치하는 문자열을 검색하고 결과를 배열로 반환하는 유용한 메서드. 다양한 문자열 조작 및 검증에 사용될 수 있으며, 정규 표현식의 강력한 기능을 활용할 수 있음

//  - 활용:
//   - 문자열에서 특정 패턴을 찾을 때 유용
//   - 정규 표현식을 활용하여 복잡한 문자열 검색 및 조작을 할 수 있음

//  - 주의 사항:
//   - 일치하는 문자열의 배열: 패턴과 일치하는 모든 결과를 포함
//   - null: 일치하는 부분이 없을 경우

// 1. 사용 예
const str = 'The quick brown fox jumps over the lazy dog.'

// - 정규 표현식으로 "quick" 찾기
const result1 = str.match(/quick/)
console.log(result1) // [ 'quick', index: 4, input: 'The quick brown fox jumps over the lazy dog.', groups: undefined ]

// - 정규 표현식으로 모든 단어 찾기
const result2 = str.match(/\b\w+\b/g)
console.log(result2) // [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog' ]

// - 정규 표현식으로 숫자 찾기 (숫자가 없으므로 일치하는 부분이 없기 때문에 null 반환)
const result3 = str.match(/\d+/)
console.log(result3) // null

// 2. 예시 활용
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return email.match(regex) !== null
}

console.log(isValidEmail('test@example.com')) // true
console.log(isValidEmail('invalid-email')) // false
