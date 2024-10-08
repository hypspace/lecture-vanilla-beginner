/* String.prototype.trim() */

//  - 설명:
//   - 문자열의 앞뒤에서 공백(스페이스, 탭, 개행 등)을 제거한 새로운 문자열을 반환. 원본 문자열은 변경되지 않음
//   - 사용자 입력을 정리하거나 데이터 처리 시 공백으로 인한 오류를 방지하는 데 자주 활용됨

//  - 활용:
//   - 문자열의 앞뒤에서 공백을 제거하는 데 유용함

//  - 주의 사항:
//   - trim() 메서드는 문자열의 앞과 뒤에서만 공백을 제거하며, 문자열 중간의 공백은 영향을 받지 않음
//   - 이 메서드는 Unicode의 공백 문자도 처리함

// 1. 사용 예
const str = '     hello, world    '
const trimmedStr = str.trim()
console.log(trimmedStr) // hello, world

// 2. 여러 종류의 공백 제거
const string = '\n\t   js is great!   \n\t'
const trimmedString = string.trim()
console.log(trimmedString) // js is great!
