/* Array.prototype.includes(value, fromIndex?) */

//  - 설명:
//   - 배열이 특정 값(요소)을 포함하고 있는지를 검사하여 boolean 값을 반환. 배열에 특정 요소가 있는지 확인할 때 사용

//  - 활용:
//   - 배열에 특정 값이 있는지 확인할 때 사용됨. 주로 조건문과 함께 사용됨

//  - 주의 사항:
//   - 비교는 === (엄격한 동등성)로 이루어짐
//   - NaN도 올바르게 검사할 수 있음

//      - value: 검색할 요소
//      - fromIndex: (옵션) 검색을 시작할 인덱스. 기본값은 0. 음수 값을 제공하면 배열의 끝에서부터 계산됨

// 1. 사용 예
const fruits = ['apple', 'banana', 'cherry']

const hasBanana = fruits.includes('banana')
console.log(hasBanana) // true

// 2. fromIndex 사용 예
const numbers = [1, 2, 3, 4, 5]

const includesThree = numbers.includes(3, 2) // 인덱스 2부터 검색
console.log(includesThree) // true

// 2. 활용 예시

// - 조건부 로직
const allowedRoles = ['admin', 'editor', 'user']

function checkUserRole(role) {
  if (allowedRoles.includes(role)) {
    return `${role}`
  } else {
    return `${role}는(은) 허용되는 역할이 아닙니다.`
  }
}

console.log(checkUserRole('admin')) // admin
console.log(checkUserRole('guest')) // guest는(은) 허용되는 역할이 아닙니다.

// - 데이터 필터링
const apiResponse = [
  { id: 1, name: 'Wang', roles: ['admin', 'user'] },
  { id: 2, name: 'Long', roles: ['user'] },
]

// 'admin' 역할을 가진 사용자만 필터링
const admins = apiResponse.filter(user => user.roles.includes('admin'))
console.log(admins) // [{id: 1, name: 'Wang', roles: ['admin', 'user']}]
