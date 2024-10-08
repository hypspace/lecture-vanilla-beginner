/* String.prototype.indexOf(searchValue, position?) */

//  - 설명:
//   - 특정 문자열이 처음으로 나타나는 인덱스를 반환
//   - 문자열이 존재하지 않는 경우 -1을 반환. 이 메서드는 대소문자를 구분함
//   - 문자열 내에서 특정 서브스트링이 처음 나타나는 위치를 찾는 데 유용한 메서드. 직관적인 사용법 덕분에 문자열 검색과 분석에서 널리 사용됨

//  - 활용:
//   - 특정 서브스트링이 문자열 내에서 처음으로 등장하는 위치를 찾을 때 유용
//   - 여러 문자열 검색 및 텍스트 분석에 사용됨

//  - 주의 사항:
//   - 첫 번째 인자는 찾고자 하는 문자열, 두 번째 인자는 선택적이며 검색을 시작할 인덱스를 지정함. 기본값은 0
//   - 원본 문자열을 변경하지 않음

// 1. 사용 예
const str = 'hello world h'

console.log(str.indexOf('h', 0)) // 0
console.log(str.indexOf('h', 12)) // 12
console.log(str.indexOf('h', 13)) // -1

// 2. 예시 활용
function findSubStringIndex(input, subString) {
  return input.indexOf(subString)
}

console.log(findSubStringIndex('js is cool', 'is')) // 3
console.log(findSubStringIndex('js is cool', 'bad')) // -1
