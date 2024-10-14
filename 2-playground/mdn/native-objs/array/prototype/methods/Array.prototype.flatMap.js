/* Array.prototype.flatMap(callback(currentValue, index?, array?), thisArg?) */

//  - 설명:
//   - 주어진 함수를 사용하여 배열의 각 요소를 변환한 후, 결과를 평면화하여 새로운 배열을 반환
//   - thisArg를 사용하여 콜백 함수 내부에서 특정 객체를 참조할 수 있음
//   - arr.map(...args).flat()과 동일하지만, 두 메서드를 따로 호출하는 것보다 약간 더 효율적

//  - 활용:
//   - 배열의 각 요소를 변환하고 동시에 평면화할 필요가 있을 때 사용됨
//   - 데이터 변환 및 필터링, 다차원 배열 변환하여 평면화, 중첩된 리스트 변환하여 평면화 등 다양하게 사용됨

//  - 주의 사항:
//   - 기본적으로 1단계 깊이까지 평면화함

// 1. 사용 예
const numbers = [1, 2, 3]

const result = numbers.flatMap(num => [num, num * 2])
console.log(result) // [1, 2, 2, 4, 3, 6]

// 2. 배열 안의 객체 변환
const users = [
  { name: 'Wang', hobbies: ['reading', 'hiking'] },
  { name: 'Long', hobbies: ['cooking', 'traveling'] },
]

const allHobbies = users.flatMap(user => user.hobbies)
console.log(allHobbies) // ['reading', 'hiking', 'cooking', 'traveling']

// 3. 중첩 배열 처리
const nestedArrays = [[1, 2], [3, 4], [5]]

const squared = nestedArrays.flatMap(arr => arr.map(num => num ** 2))
console.log(squared) // [1, 4, 9, 16, 25]

// 4. thisArg를 사용한 flatMap - 콜백 함수 내부에서 특정 객체를 참조할 수 있음
const multiplier = {
  factor: 2,
  multiply(arr) {
    return arr.flatMap(function (num) {
      return num * this.factor // this를 통해 multiplier 객체의 factor에 접근
    }, this) // thisArg에 multiplier 객체를 전달
  },
}

const numbers2 = [1, 2, 3]
const result2 = multiplier.multiply(numbers2)
console.log(result2) // [2, 4, 6]
