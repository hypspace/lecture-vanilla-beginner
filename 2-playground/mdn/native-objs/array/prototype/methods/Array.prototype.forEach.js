/* Array.prototype.forEach(callback(currentValue, index?, array?), thisArg?) */

//  - 설명:
//   - 배열의 각 요소에 대해 제공된 함수를 실행함
//   - 배열의 각 요소에 대해 반복적으로 작업을 수행하는 데 매우 유용하게 사용됨

//  - 활용:
//   - 배열의 각 요소에 대해 특정 작업을 수행할 때 사용함. 예를 들어, 배열의 요소를 출력하거나, 특정 변환을 적용하는 경우에 유용

//  - 주의 사항:
//   - forEach는 항상 undefined를 반환하며, 배열의 새로운 복사본을 만들지 않음
//   - forEach는 배열의 빈 요소를 건너뜀

// 1. 사용 예
const numbers = [1, 2, 3]

numbers.forEach(num => {
  console.log(num)
})
// 1
// 2
// 3

// 2. 인덱스와 배열 사용
numbers.forEach((v, i) => {
  console.log(`value: ${v}, idx: ${i}`)
})
// value: 1, idx: 0
// value: 2, idx: 1
// value: 3, idx: 2

// 2. 활용 예시

// - 데이터 처리 - API 응답 데이터를 처리할 때 각 요소에 대해 특정 작업을 수행할 수 있음
const apiResponse = [
  { id: 1, name: 'Wang' },
  { id: 2, name: 'Long' },
]

apiResponse.forEach(user => {
  console.log(user.name)
})
// Wang
// Long

// - DOM 조작 - HTML 요소를 반복적으로 생성하거나 수정할 때 사용할 수 있음
// const items = ['Item A', 'Item B', 'Item C']
// const ul = document.createElement('ul')

// items.forEach(item => {
//   const li = document.createElement('li')
//   li.textContent = item
//   ul.appendChild(li)
// })

// document.body.appendChild(ul)

// - 집계 작업 - 배열의 요소를 기반으로 집계 작업을 수행할 때 사용할 수 있음
const numbers2 = [10, 20, 30]
let sum = 0

// 각 요소를 더하여 합계를 계산
numbers2.forEach(num => {
  sum += num
})

console.log(sum) // 60
