/* Array.prototype.flat(depth?) */

//  - 설명:
//   - 중첩된 배열을 평면화하여 새로운 배열을 반환
//   - 기본적으로 1단계 깊이까지 평면화하며, 깊이를 조정할 수도 있음

//  - 활용:
//   - 중첩된 배열을 간단하게 평면화할 때 사용됨

//  - 주의 사항:
//   - 원본 배열은 변경되지 않고, 새로운 배열이 반환됨

//   - depth: 평면화할 깊이의 레벨을 지정함. 기본값은 1이며, Infinity로 설정하면 모든 깊이를 평면화함

// 1. 사용 예
const arr = [1, 2, [3, 4], 5]

// 1단계 깊이 평면화
const flatArr = arr.flat()
console.log(flatArr) // [1, 2, 3, 4, 5]

// 2. 깊이를 지정하여 평면화
const arr2 = [1, [2, [3, [4]]]]

// 2단계 깊이 평면화
const flatArr2 = arr2.flat(2)
console.log(flatArr2) // [1, 2, 3, [4]]

// 3. 모든 깊이 평면화
const arr3 = [1, [2, [3, [4]]]]

// 모든 깊이 평면화
const flatArr3 = arr3.flat(Infinity)
console.log(flatArr3) // [1, 2, 3, 4]

// 4. 활용 예시

// - API 응답 데이터 처리 - API에서 받아온 중첩된 데이터를 평면화할 때 사용
const apiResponse = [
  { id: 1, name: 'Alice', hobbies: ['reading', 'hiking'] },
  { id: 2, name: 'Bob', hobbies: ['cooking', 'traveling'] },
]

// 모든 취미를 평면화
const allHobbies = apiResponse.map(user => user.hobbies).flat()
console.log(allHobbies) // ['reading', 'hiking', 'cooking', 'traveling']

// - 다차원 배열 처리 - 다차원 배열을 처리할 때 유용
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

// 2차원 배열을 1차원 배열로 변환
const flatMatrix = matrix.flat()
console.log(flatMatrix) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
