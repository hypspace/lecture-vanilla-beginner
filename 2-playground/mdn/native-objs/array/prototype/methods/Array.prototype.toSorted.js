/* Array.prototype.toSorted() */

//  - 설명:
//   - 배열의 요소를 정렬한 새로운 배열을 반환하는 메서드. 원래 배열은 변경되지 않음. 이 메서드는 ECMAScript 2023(ES14)에서 추가됨

//  - 활용:
//   - 배열의 원본 순서를 변경하지 않고, 정렬된 새로운 배열이 필요할 때 유용함

//  - 주의 사항:
//   - 원본 배열은 변하지 않음
//   - 새로운 배열을 반환하므로, 반환된 배열을 사용해야 함. 기본적으로 오름차순으로 정렬되며, 사용자 정의 정렬 함수(compareFunction)를 제공하여 정렬 방식을 변경할 수 있음
//   - sort()는 원본 배열을 변경하고, toSorted는 원본 배열을 변경하지 않음

// 1. 사용 예
const arr = [5, 3, 8, 1, 2]
const sortedArr = arr.toSorted()
console.log(sortedArr) // [1, 2, 3, 5, 8]
console.log(arr) // [5, 3, 8, 1, 2] (원본 배열은 변경되지 않음)

// ... Array.prototype.sort.js 참고
