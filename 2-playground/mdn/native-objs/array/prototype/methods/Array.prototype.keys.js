/* Array.prototype.keys() */

//  - 설명:
//   - 배열의 인덱스(키)로 이루어진 새로운 Array Iterator 객체를 반환. 배열의 각 인덱스를 포함하는 이터레이터 객체를 반환함

//  - 활용:
//   - 주로 배열의 인덱스를 반복할 때 유용하게 사용됨. 배열의 인덱스를 반복하거나, 인덱스와 값을 함께 처리할 때 사용됩

//  - 주의 사항:
//   - 반환된 이터레이터는 for...of 루프나 스프레드 연산자와 함께 사용할 수 있음
//   - keys 메서드는 배열의 길이에 따라 0부터 시작하는 인덱스를 반환함

// 1. 사용 예
const fruits = ['apple', 'banana', 'cherry']

const keys = fruits.keys()
console.log(keys) // Object [Array Iterator] {}

for (const key of keys) {
  console.log(key) //
}
// 출력:
// 0
// 1
// 2

// 2. 활용 예시

// - 인덱스와 값 함께 출력
const items = ['Item A', 'Item B', 'Item C']

const keys2 = items.keys()
for (const key of keys2) {
  console.log(`Index: ${key}, Value: ${items[key]}`)
}
// 출력:
// Index: 0, Value: Item A
// Index: 1, Value: Item B
// Index: 2, Value: Item C

// - 맵핑 작업 - 인덱스를 기반으로 다른 배열을 생성할 때 유용
const numbers = [10, 20, 30]
const keys3 = numbers.keys()

const doubled = []
for (const index of keys3) {
  doubled.push(numbers[index] * 2)
}

console.log(doubled) // [20, 40, 60]
