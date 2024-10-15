/* Array.prototype.every(callbackFn, thisArg?) */

//  - 설명:
//   - 주어진 조건을 만족하는지 배열의 모든 요소를 검사함
//   - 모든 요소가 조건을 만족하면 true를 반환하고, 하나라도 조건을 만족하지 않으면 false를 반환함
//   - 배열의 요소가 특정 조건을 만족하는지 검증하는 데 유용하게 사용됨

//  - 활용:
//   - 배열의 모든 요소가 특정 조건을 만족하는지 확인할 때
//   - 데이터 유효성 검사, 조건 체크 및 필터링 등 다양한 현업 상황에서 유용하게 사용됨

//  - 주의 사항:
//   - 빈 배열에 대해 every 메서드는 true를 반환함

//   - 구문: array.every(callback(element, index, array), thisArg)
//      - callback: 각 요소에 대해 실행할 함수. 이 함수는 다음 인수를 받음:
//          - element: 현재 검사하고 있는 요소
//          - index: 현재 요소의 인덱스 (옵션)
//          - array: every 메서드를 호출한 배열 (옵션)
//      - thisArg: callback 함수에서 this로 사용할 값 (옵션)

// 1. 사용 예
const numbers = [1, 2, 3]

const allLessThanThree = numbers.every(num => num < 3)
const allLessThanFive = numbers.every(num => num < 4)
console.log(allLessThanThree) // false
console.log(allLessThanFive) // true

// 2. 활용 예시

// - 데이터 유효성 검사 - 이메일 유효성 검사
const emailList = ['user@example.com', 'admin@domain.com', 'invalid-email']

const allValidEmails = emailList.every(email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
})
console.log(allValidEmails) // false

// - 객체 배열의 특정 속성 검사 - 모든 제품이 재고가 있는지 확인
const products = [
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Phone', price: 800, inStock: true },
  { name: 'Tablet', price: 300, inStock: true },
]

const allInStock = products.every(product => product.inStock)
console.log(allInStock) // true

// - 조건에 따른 필터링 전 체크 - 모든 점수가 75 이상인지 확인
const scores = [85, 92, 78, 88]

if (scores.every(score => score >= 75)) {
  console.log('모든 점수가 합격입니다.')
} else {
  console.log('일부 점수가 실패함.')
}

// - 환경 설정 검사 - 배포 전에 모든 설정이 유효한지 확인
const configurations = {
  apiEndpoint: 'https://api.example.com',
  apiKey: '12345',
  timeout: 5000,
}

const isValidConfiguration = Object.values(configurations) //
  .every(value => {
    return value !== undefined && value !== null
  })
console.log(isValidConfiguration) // true

// - 폼 유효성 검사 - 폼의 모든 필드가 유효한지 확인. 모든 필드가 값이 있는지 확인
const formInputs = [
  { name: 'username', value: 'john_doe' },
  { name: 'password', value: 'securepassword123' },
  { name: 'email', value: 'john@example.com' },
]

const allFieldsFilled = formInputs.every(input => input.value !== '')
console.log(allFieldsFilled) // true
