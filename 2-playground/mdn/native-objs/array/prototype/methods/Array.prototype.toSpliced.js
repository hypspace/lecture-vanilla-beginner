/* Array.prototype.toSpliced(start[, deleteCount?[, item1?[, item2?[, ...?]]]]) */

//  - 설명:
//   - 배열의 요소를 삭제하거나 추가한 새로운 배열을 반환하는 메서드. 이 메서드는 원본 배열을 변경하지 않으며, ECMAScript 2023(ES14)에서 추가됨
//   - 배열은 0부터 시작하는 인덱스로 변경되며, 정수로 변환됨

//  - 활용:
//   - 배열의 원본을 변경하지 않고, 요소를 삭제하거나 추가한 새로운 배열이 필요할 때 유용함

//  - 주의 사항:
//   - 원본 배열은 변하지 않음
//   - 새로운 배열을 반환하므로, 반환된 배열을 사용해야 함
//   - splice()는 원본 배열을 변경하고, toSpliced는 원본 배열을 변경하지 않음

// 1. 사용 예
const arr = [1, 2, 3, 4, 5]
const splicedArr = arr.toSpliced(2, 2, 6, 7)
console.log(splicedArr) // [1, 2, 6, 7, 5]
console.log(arr) // [1, 2, 3, 4, 5] (원본 배열은 변경되지 않음)

// ... Array.prototype.splice.js 참고
