/* Array.prototype.splice(start[, deleteCount?[, item1?[, item2?[, ...?]]]]) */

//  - 설명:
//   - 배열의 요소를 추가하거나 제거할 수 있는 메서드로, 배열의 특정 위치에서 요소를 변경할 수 있음

//  - 활용:
//   - 배열의 특정 인덱스에서 요소를 삭제하거나 추가할 때 사용됨
//   - 배열을 수정하는 메서드로, 원본 배열을 변경함

//  - 주의 사항:
//   - splice()는 원본 배열을 직접 수정하므로, 원본 배열이 변경된다는 점에 유의해야 함
//   - 반환값은 삭제된 요소들의 배열
//   - item1, item2, ...는 배열에 추가할 요소들. 이 매개변수는 여러 개를 받을 수 있으며, 추가할 요소가 없으면 배열에 변화가 없음

// 1. 사용 예
const arr = [1, 2, 3, 4, 5]

const removed = arr.splice(2, 2) // 2번째 인덱스부터 2개의 요소 삭제
console.log(removed) // [3, 4]

console.log(arr) // [1, 2, 5]
const result = arr.splice(1, 0, 6, 7) // 1번째 인덱스에 6과 7 추가
console.log(arr) // [1, 6, 7, 2, 5]
console.log(result) // []
