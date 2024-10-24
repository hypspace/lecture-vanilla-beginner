/* String Methods */

// - 설명:
//  - 문자열을 메서드가 추가됨. startsWith, endsWith, includes
//  - 정규표현식 없이 문자열이 있는지 혹은 시작하거나 끝이 나는지 확인하는 메서드가 표준 JS로 추가됨

// 1. 문자열이 있는지 검사하는 과거에서 ES6의 방법 예시

// - 정규표현식(과거)
const str = 'hello world'
const matchStr = 'hello'

const regex = new RegExp(`^${matchStr}`).test(str)
console.log(regex) // true

// - 새로운 메서드(ES6)
// - startsWith
const result = str.startsWith(matchStr)
console.log(result)

// - endsWith
const result2 = str.endsWith(matchStr)
console.log(result2) // false

// - includes
const result3 = str.includes('hello')
console.log(result3) // true
