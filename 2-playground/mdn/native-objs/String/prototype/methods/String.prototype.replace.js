/* String.prototype.replace(searchValue: 검색할 문자열 또는 정규 표현식, replaceValue: 교체할 문자열 또는 함수) */

//  - 설명:
//   - 메서드는 문자열에서 특정 패턴(문자열 또는 정규 표현식)에 일치하는 부분을 다른 문자열로 교체
//   - 첫 번째 일치 항목만 교체하며, 전체 문자열을 수정하지 않고 새로운 문자열을 반환함
//   - 문자열 내에서 특정 패턴을 찾아 교체하는 강력한 메서드. 문자열과 정규 표현식 모두 사용 가능하며, 다양한 상황에서 문자열 조작에 매우 유용

//  - 활용:
//   - replace는 텍스트 교체, 대소문자 변환, 숫자 형식 변환, URL 파라미터 수정, 템플릿 문자열로 변환, HTML 태그 제거, 특정 패턴의 모든 발생 횟수 변경 등 다양한 상황에서 유용하게 사용됨
//   - 이 메서드를 활용하면 문자열을 더 쉽게 처리하고, 필요한 형태로 변환할 수 있음

//  - 주의 사항:
//   - replace()는 원본 문자열을 변경하지 않고 새로운 문자열을 반환함
//   - 정규 표현식을 사용할 경우, g 플래그를 추가하면 모든 일치 항목을 교체할 수 있음
//   - replaceValue에 함수를 사용할 수도 있음. 이 함수는 일치하는 부분에 대한 정보를 제공하고, 해당 정보를 기반으로 교체할 문자열을 생성함

// 1. 사용 예
const str = 'hello, world'

const newStr = str.replace('world')
console.log(newStr) // hello, undefined

const newStr2 = str.replace('world', 'js')
console.log(newStr2) // hello, js

// 2. 정규 표현식 사용 예
const text = 'lorem is lorem is lorem...'

const newText = text.replace('lorem', 'lor')
console.log(newText) // lor is lorem is lorem...

const newText2 = text.replace(/lorem/g, 'lor')
console.log(newText2) // lor is lor is lor...

// 2. 함수 사용 예
const string = 'hello, world'
const newString = str.replace(/(hello|world)/g, match => {
  return match === 'hello' ? 'hi' : 'everyone'
})

console.log(newString) // hi, everyone

// 3. 예시 활용

// - 문자열 내 텍스트 교체
const text1 = 'The cat.'
const newText1 = text1.replace('cat', 'dog')
console.log(newText1) // The dog.

// - 대소문자 변환
const str3 = 'Hello, world'
const newStr3 = str3.replace(/hello/i, match => match.toUpperCase())
console.log(newStr3) // HELLO, world

// - 숫자 형식 변환
const price = '1000'
const formattedPrice = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
console.log(formattedPrice) // 1,000

// - URL 파라미터 수정
const url = 'https://example.com?user=123&active=true'
const updateUrl = url.replace(/(user=)\d+/, '$11234') // user 파라미터를 1234로 변경
console.log(updateUrl) // https://example.com?user=1234&active=true

// - 템플릿 문자열로 변환
const template = 'Hello, {{name}}! You have {{count}} new messages.'
const data = { name: 'Wang', count: 8 }

const result = template.replace(/{{(.*?)}}/g, (match, key) => {
  return data[key.trim()] || match
})

console.log(result) // Hello, Wang! You have 8 new messages.

// - HTML 태그 제거
const htmlString = '<h1>Title</h1><p>This is a paragraph.</p>'
const plainText = htmlString.replace(/<[^>]*>/g, '')
console.log(plainText) // TitleThis is a paragraph.

// - 특정 패턴의 모든 발생 횟수 변경
const sentence = 'The rain in Spain stays mainly in the plain.'
const newSentence = sentence.replace(/ain/g, '___')
console.log(newSentence) // The r___ in Sp___ stays m___ly in the pl___.
