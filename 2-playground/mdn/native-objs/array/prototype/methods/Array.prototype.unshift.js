/* Array.prototype.unshift([...elementN]) */

//  - 설명:
//   - 배열의 시작 부분에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환. 이 메서드는 기존 배열을 변경함
//   - 배열의 시작 부분에 추가할 요소들을 인수로 받음

//  - 활용:
//   - 배열의 첫 번째 위치에 요소를 추가할 때 유용
//   - 큐(Queue) 자료구조의 맨 앞에 요소를 삽입할 때 사용할 수 있음

//  - 주의 사항:
//   - 원본 배열이 변경됨
//   - 배열의 새로운 길이를 반환함

// 1. 사용 예
const numbers = ['1', '2']

const newLength = numbers.unshift('vim') // 배열의 시작 부분에 요소 추가
console.log(newLength) // 3
console.log(numbers) // ['vim', '1', '2']

// 2. 활용 예시
// - 큐(Queue) 구현 - 요청을 처리하는 시스템에서, 새로운 요청을 큐의 맨 앞에 추가할 때 사용할 수 있음
const requestQueue = []

requestQueue.unshift('Request 1')
requestQueue.unshift('Request 2')
console.log(requestQueue) // ['Request 2', 'Request 1']
