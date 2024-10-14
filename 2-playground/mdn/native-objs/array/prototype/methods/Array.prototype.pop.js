/* Array.prototype.pop() */

//  - 설명:
//   - 배열의 마지막 요소를 제거하고, 그 제거된 요소를 반환함. 이 메서드는 원본 배열을 직접 수정함
//   - Array 인스턴스의 메서드로, 배열에서 마지막 요소를 제거하고 그 요소를 반환함. 이 메서드는 배열의 길이를 변경함

//  - 활용:
//   - 스택 구조에서 마지막 요소를 제거할 때 유용함
//   - 배열에서 가장 최근에 추가된 데이터를 삭제할 때 사용됨

//  - 주의 사항:
//   - 배열이 비어 있을 경우, pop() 메서드는 undefined를 반환함
//   - 원본 배열을 변경함

// 1. 사용 예(스택 구현)
const numbers = [1, 2, 3]

const lastNumbers = numbers.pop()
console.log(numbers) // [1, 2]
console.log(lastNumbers) // 3 (배열의 길이를 반환함)
