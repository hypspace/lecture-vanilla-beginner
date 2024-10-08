/* String.prototype.toLocaleLowerCase(locales?) */

//  - 설명:
//   - 문자열을 해당 지역의 대소문자 변환 규칙에 따라 소문자로 변환
//   - 이 메서드는 언어 및 지역에 맞게 대소문자를 처리해야 할 필요가 있는 경우에 유용
//   - 소문자로 변환된 변환된 문자열 값을 반환

//  - 활용:
//   - 여러 언어와 지역의 특성을 고려해야 하는 경우 유용하게 사용할 수 있음

//  - 주의 사항:
//   - toLocaleLowerCase()는 문자열의 대소문자를 변환할 때 언어의 규칙을 따르므로, 특정 언어에 특화된 변환이 가능함
//   - 특정 언어를 명시하지 않으면, 시스템의 기본 언어 설정을 사용함
//   - locale 인수가 올바른 언어 태그가 아닌 경우 RangeError ("잘못된 언어 태그: xx_yy")가 발생함

//   - 매개변수
//      - locales: 문자열의 언어 설정을 지정하는 지역 코드. 예를 들어 "en-US"는 미국 영어를, "tr"은 터키어를 나타냄
//      - options: 대소문자 변환을 위한 추가 옵션을 설정할 수 있는 객체

// 1. 사용 예
const str = 'Hello, World'
const lowerStr = str.toLocaleLowerCase()
console.log(lowerStr) // hello, world

// 2. 특정 지역 코드 사용
const string = 'İstanbul' // 터키어에서 'I'와 'i'의 대소문자 규칙
const lowerString = string.toLocaleLowerCase('tr')
const lowerString2 = string.toLocaleLowerCase()
console.log(lowerString) // istanbul
console.log(lowerString2) // i̇stanbul

// 3. 기본 설정을 사용하는 경우
const text = 'Çocuk'
const lowerText = text.toLocaleLowerCase('tr')
console.log(lowerText) // çocuk

// 4. 활용 예시

// - 사용자 입력 처리
const userInput = 'Hello WORLD'
const normalizedInput = userInput.toLocaleLowerCase()
console.log(normalizedInput) // hello world

// - 언어에 맞는 대소문자 변환
const str1 = 'Istanbul'
const str2 = 'İstanbul'
console.log(str1.toLocaleLowerCase('tr')) // ıstanbul
console.log(str2.toLocaleLowerCase('tr')) // istanbul

// - 정렬 및 비교 작업
const names = ['MUSTAFA', 'ayşe', 'ali']
const sortedNames = names.map(name => name.toLocaleLowerCase('tr')).sort()
console.log(sortedNames) // [ 'ali', 'ayşe', 'mustafa' ]
