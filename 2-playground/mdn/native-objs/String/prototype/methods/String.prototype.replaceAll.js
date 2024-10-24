/* String.prototype.replaceAll(searchValue(=pattern), replaceValue(=replacement)) */

//  - 설명:
//   - 문자열 내에서 특정 패턴(문자열 또는 정규 표현식)에 일치하는 모든 부분을 다른 문자열로 교체. 문자열 내에서 특정 패턴을 찾아 모두 교체할 수 있는 유용한 메서드
//   - replace() 메서드와의 차이점은 replace()가 첫 번째 일치 항목만 교체하는 반면, replaceAll()은 모든 일치 항목을 교체함
//   - pattern의 모든 일치 항목이 replacement로 대체된 새 문자열을 반환. pattern은 문자열 또는 RegExp일 수 있으며 replacement는 각 일치 항목에 대해 호출되는 문자열 또는 함수일 수 있음. 원래 문자열은 변경되지 않음

//  - 활용:
//   - 텍스트 교체, HTML 태그 제거 등 다양한 상황에서 쉽게 활용할 수 있음

//  - 주의 사항:
//   - replaceAll()은 원본 문자열을 변경하지 않고 새로운 문자열을 반환
//   - 정규 표현식을 사용할 경우, g 플래그는 필요하지 않지만, 다른 플래그는 사용할 수 없음

//   - 매개변수:
//      - searchValue: (필수) 검색할 문자열 또는 정규 표현식. 정규 표현식을 사용할 경우, g 플래그는 필요하지 않음
//      - replaceValue: (필수) 교체할 문자열 또는 함수

// 1. 사용 예
const str = 'lorem is lorem is...'
const newStr = str.replaceAll('lorem', 'lor')
console.log(newStr) // lor is lor is...

// 2. 정규 표현식 사용
const text = 'abcbcabc'
const newText = text.replaceAll(/abc/g, 'ABC')
console.log(newText) // ABCbcABC

// 3. 함수 사용
const string = 'hello, world'
const newString = string.replaceAll(/o/g, match => {
  return match.toUpperCase()
})

console.log(newString) // hellO, wOrld

// 4. 활용 예시

// - 모든 특정 단어 교체
const sentence = 'the cat is cat'
const newSentence = sentence.replaceAll('cat', 'dog')
console.log(newSentence) // the dog is dog

// - HTML 태그 제거
const htmlString = '<div>hello</div> <div>world</div>'
const plainText = htmlString.replaceAll(/<[^>]*>/g, '')
console.log(plainText) // hello world

// - 전화번호 형식 변경
const phoneNumber = '123-456-7890'
const formattedNumber = phoneNumber.replaceAll('-', '.')
console.log(formattedNumber) // 123.456.7890
