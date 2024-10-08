/* String.prototype.endsWith(searchString, endPosition?) */

//  - 설명:
//   - 문자열이 특정 문자열로 끝나는지를 검사하여, 결과를 불리언 값(true 또는 false)으로 반환. 문자열이 이 문자열의 문자로 끝나는지 여부를 결정하여 적절하게 true 또는 false를 반환
//   - 대소문자를 구분하며, 선택적으로 검사할 문자열의 길이를 지정할 수 있음
//   - 문자열의 끝이 특정 문자열로 되어 있는지를 검사하는 유용한 메서드. 간단하게 문자열의 접미사를 확인하고 싶을 때 매우 유용하게 사용할 수 있음

//  - 활용:
//   - 문자열이 특정 접미사로 끝나는지 확인할 때 유용
//   - 파일 확장자 확인, URL 처리 등 다양한 상황에서 활용

//  - 주의 사항:
//   - 첫 번째 인자는 확인할 문자열, 두 번째 인자는 선택적이며, 검사할 문자열의 길이를 지정. 이 값은 문자열의 전체 길이에 영향을 미치지 않음
//   - 기본적으로 메서드는 현재 문자열의 길이를 기준으로 검사하므로, 두 번째 인자를 지정하지 않으면 전체 문자열이 사용됨
//   - searchString가 정규 표현식이라면 TypeError가 발생함

// 1. 사용 예
const str = 'hello world'

console.log(str.endsWith('hello')) // false
console.log(str.endsWith('world')) // true
console.log(str.endsWith('d')) // true

console.log(str.endsWith('world', 10)) // false
console.log(str.endsWith('world', 11)) // true

// 2. 예시 활용
function hasFileExtension(filename, extension) {
  return filename.endsWith(extension)
}

console.log(hasFileExtension('1.txt', '.txt')) // true
console.log(hasFileExtension('1.doc', '.txt')) // false
