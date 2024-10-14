/* Array.prototype.reverse() */

//  - 설명:
//   - 배열의 요소 순서를 반전시킴. 원본 배열이 변경되며, 반전된 배열을 반환
//   - 배열의 순서를 쉽게 변경할 수 있는 유용한 기능

//  - 활용:
//   - 배열의 순서를 뒤집고 싶을 때 사용함. 예를 들어, 역순으로 정렬하거나 최근 항목을 먼저 보여줄 때 유용함

//  - 주의 사항:
//   - 원본 배열을 직접 변경함. 즉, reverse()를 호출한 배열이 그대로 수정됨
//   - 빈 배열에 대해 호출하면 여전히 빈 배열을 반환함

// 1. 사용 예
const numbers = [1, 2, 3, 4, 5]

numbers.reverse()
console.log(numbers) // [5, 4, 3, 2, 1]

const fruits = ['apple', 'banana', 'cherry']
fruits.reverse()
console.log(fruits) // ['cherry', 'banana', 'apple']
