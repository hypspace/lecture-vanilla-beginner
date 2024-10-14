/* Array.prototype.shift() */

//  - 설명:
//   - 배열의 첫 번째 요소를 제거하고 그 값을 반환. 이 메서드는 배열의 길이를 1 줄이며, 빈 배열에서 호출할 경우 undefined를 반환
//   - 배열의 첫 번째 요소를 제거하고, 제거된 요소의 값을 반환함
//   - 첫 번째 요소를 쉽게 제거하고, 필요한 작업을 수행하는 데 유용하게 사용됨
//  - 활용:
//   - 배열에서 첫 번째 요소를 제거하고, 그 값을 사용할 때 유용
//   - 큐(Queue) 자료구조를 구현할 때 사용할 수 있음

//  - 주의 사항:
//   - 원본 배열이 변경됨. 즉, 첫 번째 요소가 제거되므로, 다른 요소의 인덱스가 변경됨
//   - 배열이 비어 있을 경우 undefined를 반환합니다.

// 1. 사용 예
const numbers = ['1', '2', '3']

const firstNumber = numbers.shift()

console.log(firstNumber) // '1'
console.log(numbers) // ['2', '3']

// 2. 활용 예시

// - 큐(Queue) 구현 - 요청을 처리하는 순서대로 데이터를 처리할 때 사용할 수 있음
const queue = []

// 새로운 요청 추가
queue.push('Request 1')
queue.push('Request 2')
queue.push('Request 3')

// 첫 번째 요청 처리
const nextRequest = queue.shift()
console.log(nextRequest) // Request 1
console.log(queue) // ['Request 2', 'Request 3']
