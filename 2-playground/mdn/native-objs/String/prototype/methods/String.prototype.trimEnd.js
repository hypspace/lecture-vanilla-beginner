/* String.prototype.trimEnd() */

//  - 설명:
//   - 메서드는 문자열의 끝에서 공백(스페이스, 탭, 개행 등)을 제거한 새로운 문자열을 반환함. 원본 문자열은 변경되지 않음
//   - 문자열 마지막의 공백을 제거하고 원본 문자열의 수정 없이 새로운 문자열을 반환함

// 1. 사용 예
const str = '   hello world   '
const trimmedStr = str.trimEnd()
console.log(trimmedStr) //    hello world

// ... String.prototype.trim.js 참고
