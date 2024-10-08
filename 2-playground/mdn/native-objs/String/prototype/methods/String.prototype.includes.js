/* String.prototype.includes(searchString, position?) */

//  - 설명:
//   - 문자열 내에 특정 문자열이 포함되어 있는지를 검사하여, 결과를 불리언 값(true 또는 false)으로 반환. 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환
//   - 대소문자를 구분하며, 선택적으로 검색을 시작할 인덱스를 지정할 수 있음
//   - 문자열 내에 특정 서브스트링이 포함되어 있는지를 검사하는 유용한 메서드. 간단하고 직관적인 사용법 덕분에 다양한 문자열 처리 상황에서 유용하게 사용할 수 있음

//  - 활용:
//   - 문자열에 특정 하위 문자열(서브스트링)이 포함되어 있는지 확인할 때 유용
//   - 사용자 입력 검증, 텍스트 검색 등 다양한 상황에서 활용됨

//  - 주의 사항:
//   - 첫 번째 인자는 확인할 문자열, 두 번째 인자는 선택적이며, 검색을 시작할 인덱스를 지정합니다. 기본값은 0
//   - includes() 메서드는 원본 문자열을 변경하지 않고, 불리언 값만 반환함
//   - searchString이 정규식일 경우 TypeError가 발생함

// 1. 사용 예
const str = 'Hello, World'
console.log(str.includes(',')) // true
console.log(str.includes(',', 5), str[5]) // true (콤마부터 검사)
console.log(str.includes(',', 6), str[6]) // false (공백부터 검사)

// 2. 대소문자 구분
console.log(str.includes('hello')) // false
console.log(str.includes('Hello')) // true

// 3. 예시 활용
function containsSubString(input, subString) {
  return input.includes(subString)
}

console.log(containsSubString('js is great', 'great')) // true
console.log(containsSubString('js is great', 'bad')) // false
