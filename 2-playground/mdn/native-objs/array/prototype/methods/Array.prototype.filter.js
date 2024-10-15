/* Array.prototype.filter(callback(element, index?, array?), thisArg?) */

//  - 설명:
//   - 주어진 조건을 만족하는 요소들로 구성된 새로운 배열을 생성함. 원본 배열은 변경되지 않음

//  - 활용:
//   - 배열에서 특정 조건을 만족하는 요소를 필터링할 때 사용됨

//  - 주의 사항:
//   - 원본 배열은 변경되지 않고, 새로운 배열이 반환됨

//    - callback: 배열의 각 요소에 대해 실행할 함수
//      - element: 현재 처리 중인 요소
//      - index: 현재 요소의 인덱스 (옵션)
//      - array: filter 메서드를 호출한 배열 (옵션)
//    - thisArg: callback 함수에서 this로 사용할 값 (옵션)

// 1. 사용 예
const numbers = [1, 2, 3]

const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers) // [2]

// 2. 활용 예시

// - 중복 제거
const numbers2 = [1, 1, 2, 2, 3]

const uniqueNumbers2 = numbers2.filter((value, idx, selfArr) => {
  return selfArr.indexOf(value) === idx
})
console.log(uniqueNumbers2) // [1, 2, 3]

// API 응답 데이터 처리 - 재고가 있는 제품만 필터링
const products = [
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Phone', price: 800, inStock: false },
  { name: 'Tablet', price: 300, inStock: true },
]

const availableProducts = products.filter(product => product.inStock)
console.log(availableProducts)
// [{ name: 'Laptop', price: 1200, inStock: true }, { name: 'Tablet', price: 300, inStock: true }]
