/* String.prototype.startsWith(searchString, position?) */

//  - 설명:
//   - 문자열이 특정 문자열로 시작하는지 여부를 확인하고, 그 결과를 Boolean 값으로 반환
//   - 문자열이 특정 문자열로 시작하는지 확인하는 데 유용
//  -  이 문자열의 시작 부분에서 검색할 문자. 정규식이 될 수 없음. 정규식이 아닌 모든 값은 문자열로 강제로 변환되므로 이를 생략하거나 undefined를 전달하면 startsWith()가 'undefined' 문자열을 검색하게 되는데, 이는 원하는 경우가 거의 없음

//  - 활용:
//   - 문자열 검증, 사용자 입력 처리, 파일 형식 확인 등 다양한 상황에서 활용될 수 있음

//  - 주의 사항:
//   - searchString은 대소문자를 구분함
//   - start 인덱스가 문자열 길이보다 크면 false를 반환

//   - 매개변수
//      - searchString: (필수) 확인할 시작 문자열
//      - start: (선택) 검색을 시작할 인덱스. 기본값은 0

// 1. 사용 예
const str = 'hello, world'
const result = str.startsWith('hello')
console.log(result) // true

// 2. 대소문자 구분
const result2 = str.startsWith('Hello')
console.log(result2) // false

// 3. 인덱스 사용
const result3 = str.startsWith('world', 6)
const result4 = str.startsWith('world', 7)
console.log(result3) // false
console.log(result4) // true

// 4. 활용 예시

// - 파일 확장자 확인
const filename = 'document.pdf'
const isDocument = filename.startsWith('document')
console.log(isDocument) // true

// - URL 프로토콜 확인
const url = 'https://example.com'
const isHttps = url.startsWith('https')
console.log(isHttps) // true

// - 사용자 입력 확인
const userInput = 'admin1123'
const isAdmin = userInput.startsWith('admin')
console.log(isAdmin) // true
