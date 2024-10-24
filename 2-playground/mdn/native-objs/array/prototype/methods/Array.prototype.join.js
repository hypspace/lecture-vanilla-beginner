/* Array.prototype.join(separator?) */

//  - 설명:
//   - 배열의 모든 요소를 연결하여 하나의 문자열로 만듦. 요소들은 지정된 구분자(separator)를 사용하여 구분됨
//   - join은 다른 배열을 포함하여 재귀적으로 각 요소를 문자열로 변환함
//   - 배열이 순환 배열(자체 요소를 포함)인 경우, 브라우저는 순환 참조를 무시하여 무한 재귀를 방지함

//  - 활용:
//   - 배열의 요소를 문자열로 결합할 때 사용됨

//  - 주의 사항:
//   - separator: 배열의 요소를 구분할 문자열. 기본값은 쉼표(,)
//   - 배열이 비어 있으면 빈 문자열을 반환함
//   - 요소가 undefined, null인 경우, 해당 문자열 대신 빈 문자열로 변환됨

// 1. 사용 예
const fruits = ['apple', 'banana', 'cherry']

const fruitString = fruits.join()
console.log(fruitString) // apple,banana,cherry

const fruitStringWithHyphen = fruits.join('-')
console.log(fruitStringWithHyphen) // apple-banana-cherry

const fruitStringWithoutSeparator = fruits.join('')
console.log(fruitStringWithoutSeparator) // applebananacherry

// 2. 다차원 배열 문자열 변환
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(matrix.join()) // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(';')) // 1,2,3;4,5,6;7,8,9

// 3. 활용 예시

// - URL 쿼리 문자열 생성
const params = ['search=apple', 'sort=asc', 'page=1']
const queryString = params.join('&') // search=apple&sort=asc&page=1
console.log(queryString)

// - 다차원 배열 평면화 및 재귀적 처리
const flatMatrix = matrix.flat() // [1, 2, 3, 4, 5, 6, 7, 8, 9]
const result = flatMatrix.join(';') // "1;2;3;4;5;6;7;8;9"
console.log(result)
