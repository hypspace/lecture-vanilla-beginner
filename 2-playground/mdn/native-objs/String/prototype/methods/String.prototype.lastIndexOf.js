/* String.prototype.lastIndexOf(searchValue, position?) */

//  - 설명:
//   - 특정 문자열이 마지막으로 나타나는 인덱스를 반환. 만약 문자열이 존재하지 않는 경우 -1을 반환
//   - 대소문자를 구분하며, 선택적으로 검색을 시작할 인덱스를 지정할 수 있음
//   - 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환

//  - 활용:
//   - 문자열 내에서 특정 서브스트링이 마지막으로 등장하는 위치를 찾을 때 유용
//   - 여러 문자열 검색 및 텍스트 분석에 사용됨
//   - 문자열 내에서 특정 서브스트링이 마지막으로 나타나는 위치를 찾는 데 유용한 메서드. 여러 검색과 분석 작업에서 매우 유용

//  - 주의 사항:
//   - 첫 번째 인자는 찾고자 하는 문자열, 두 번째 인자는 선택적이며 검색을 시작할 인덱스를 지정함. 기본값은 문자열의 길이 - 1
//   - 원본 문자열을 변경하지 않음

// 1. 사용 예
const str = 'hello world'

console.log(str.lastIndexOf('d')) // 10
console.log(str.lastIndexOf('d', 10)) // 10
console.log(str.lastIndexOf('d', 11)) // 10
console.log(str.lastIndexOf('d', 9)) // -1

// 2. 예시 활용
function findLastSubString(input, substring) {
  return input.lastIndexOf(substring)
}

console.log(findLastSubString('js is good', 'good')) // 6
console.log(findLastSubString('js is good', 'bad')) // -1
