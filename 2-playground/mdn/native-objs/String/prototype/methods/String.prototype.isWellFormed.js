/* String.prototype.isWellFormed() */

//  - 설명:
//   - 이 문자열에 론 서로게이트 포함 여부를 나타내는 불리언을 반환
//   - ECMAScript2024, Since October 2023에 출시
//   - 문자열이 제대로 형태를 갖추지 못한 경우를 대비하여 isWellFormed()를 사용하여 문자열을 테스트할 수 있음

// 1. 사용 예
const strings = [
  // Lone leading surrogate
  'ab\uD800',
  'ab\uD800c',
  // Lone trailing surrogate
  '\uDFFFab',
  'c\uDFFFab',
  // Well-formed
  'abc',
  'ab\uD83D\uDE04c',
]

for (const str of strings) {
  console.log(str.isWellFormed())
}
// Logs:
// false
// false
// false
// false
// true
// true

// 2. encodeURI()에서 오류 피하기
const illFormed = 'https://example.com/search?q=\uD800'

try {
  encodeURI(illFormed)
} catch (e) {
  console.log(e) // URIError: URI malformed
}

if (illFormed.isWellFormed()) {
  console.log(encodeURI(illFormed))
} else {
  console.warn('Ill-formed strings encountered.') // Ill-formed strings encountered.
}
