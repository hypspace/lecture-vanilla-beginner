/* Array.prototype.toReversed() */

//  - 설명:
//   - 배열의 요소를 역순으로 배열한 새로운 배열을 반환하는 메서드. 배열의 요소를 역순으로 나열한 새로운 배열을 생성함
//   - 원래 배열은 변경되지 않음. 이 메서드는 ECMAScript 2023(ES14)에서 추가됨
//   - 배열의 순서를 쉽게 반전할 수 있는 유용한 메서드

//  - 활용:
//   - 배열의 원본 순서를 변경하지 않고, 역순으로 나열된 새로운 배열이 필요할 때 유용

//  - 주의 사항:
//   - 원본 배열은 변하지 않음
//   - 새로운 배열을 반환하므로, 반환된 배열을 사용해야 함
//   - reverse()는 원본 배열을 변경하고, toReversed는 원본 배열을 변경하지 않음

// 1. 사용 예
const arr = [1, 2, 3, 4, 5]
const reversedArr = arr.toReversed()
console.log(reversedArr) // [5, 4, 3, 2, 1]
console.log(arr) // [1, 2, 3, 4, 5] (원본 배열은 변경되지 않음)

// ... Array.prototype.reverse.js 참고
