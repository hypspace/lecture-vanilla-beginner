/* String.prototype.split(separator, limit?) */

//  - 설명:
//   - 주어진 구분자(delimiter)를 기준으로 문자열을 분할하여, 그 결과를 배열로 반환. 이 메서드는 원본 문자열을 변경하지 않음

//  - 활용:
//   - 문자열을 주어진 구분자로 분할하여 배열로 반환하는 데 유용
//   - 다양한 용도로 활용할 수 있으며, 특히 데이터 처리나 문자열 조작에서 자주 사용됨

//  - 주의 사항:
//   - 구분자로 빈 문자열 ""을 사용하면 문자열의 각 문자로 분할된 배열을 반환
//   - 만약 구분자가 문자열에 없다면, 원본 문자열을 포함한 배열을 반환

//   - 매개변수
//      - separator: 문자열을 분할할 때 사용할 구분자. 문자열 또는 정규 표현식을 사용할 수 있음
//      - limit: 반환할 배열의 최대 길이. 이 값을 설정하면, 이 길이를 초과하는 요소는 포함되지 않음

// 1. 사용 예
const str = 'apple, banana, cherry'
const fruits = str.split(', ')
console.log(fruits) // [ 'apple', 'banana', 'cherry' ]

// 2. 공백을 기준으로 분할하기
const sentence = 'hello world, this is js'
const words = sentence.split(' ')
console.log(words) // [ 'hello', 'world,', 'this', 'is', 'js' ]

// 3. 정규 표현식 사용
const text = 'one1two2three3four'
const numbers = text.split(/\d/)
console.log(numbers) // [ 'one', 'two', 'three', 'four' ]

// 4. limit 사용
const string = 'a,b,c,d,e'
const limited = string.split(',', 3)
console.log(limited) // [ 'a', 'b', 'c' ]

// 5. 활용 예시

// - CSV 데이터 처리
const csv = 'name,age,city'
const headers = csv.split(',')
console.log(headers) // [ 'name', 'age', 'city' ]

// - URL 파라미터 분할
const url = 'https://example.com/page?name=John&age=30'
const params = url.split('?')[1].split('&')
console.log(params) // [ 'name=John', 'age=30' ]

// - 문장 단위로 나누기
const paragraph = 'This is the first sentence. This is the second sentence.'
const sentences = paragraph.split('. ')
console.log(sentences) // [ 'This is the first sentence', 'This is the second sentence.' ]
