/* Array.prototype.sort([compareFunction?]) */

//  - 설명:
//   - 배열의 요소를 문자열 기준으로 정렬하는 메서드. 기본적으로 배열의 요소를 문자열로 변환한 후 유니코드 코드 포인트 순서에 따라 정렬

//  - 활용:
//   - 배열의 요소를 오름차순 또는 내림차순으로 정렬할 때 사용됨
//   - 사용자 정의 정렬 기준을 적용할 수 있음

//  - 주의 사항:
//   - 원본 배열을 직접 수정하며, 정렬된 새로운 배열을 반환하지 않음
//   - 기본적으로 문자열 정렬을 사용하므로 숫자 정렬을 할 때는 비교 함수를 제공해야 함

// 1. 사용 예
const numbers = [5, 3, 8, 1, 2]

numbers.sort()
console.log(numbers) // [1, 2, 3, 5, 8] (문자열 기준 정렬)

const numArray = [5, 3, 8, 1, 2]
numArray.sort((a, b) => a - b) // 오름차순 정렬
console.log(numArray) // [1, 2, 3, 5, 8]

numArray.sort((a, b) => b - a) // 내림차순 정렬
console.log(numArray) // [8, 5, 3, 2, 1]

// 2. 커스텀 정렬
const items = ['10', '2', '1', '21']
items.sort() // 기본 정렬
console.log(items) // ['1', '10', '2', '21']

items.sort((a, b) => a - b) // 숫자 정렬
console.log(items) // ['1', '2', '10', '21']
