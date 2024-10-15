/* String.prototype.trimStart() */

//  - 설명:
//   - 메서드는 문자열의 앞에서 공백(스페이스, 탭, 개행 등)을 제거한 새로운 문자열을 반환함. 원본 문자열은 변경되지 않음
//   - 문자열 시작 부분의 공백을 제거하고 원본 문자열의 수정 없이 새로운 문자열을 반환함

// 1. 사용 예
const str = '   hello world   '
const trimmedStr = str.trimStart()
console.log(trimmedStr) // hello world
console.log(trimmedStr.length) // 14

// ... String.prototype.trim.js 참고
