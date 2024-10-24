/* Array.prototype[@@iterator] */

//  - 설명:
//   - 배열이 이터러블(iterable) 객체임을 정의하는 메서드. Array.prototype[@@iterator] 또는 Array.prototype[Symbol.iterator]는 배열의 이터레이터를 정의하는 메서드로, 배열을 순회할 수 있게 해줌
//   - 배열을 순회(iterate)할 수 있게 해주며, for...of 루프, 스프레드 연산자(...), Array.from(), 등에서 사용됨
//   - JS의 배열은 내부적으로 키-값 쌍으로 구성된 객체임. 해서 배열은 곧 키와 쌍으로 이터러블 객체로, 이터레이터를 통해 다양한 방식으로 요소를 쉽게 순회할 수 있음

//  - 활용:
//   - 배열의 이터레이터를 직접 호출할 수도 있지만, 일반적으로 for...of 루프와 함께 사용. 다양한 반복 구조와 함께 사용할 수 있음

//  - 주의 사항:
//   - 이터러블 객체는 Symbol.iterator 메서드를 구현한 객체. 이 메서드는 객체의 기본 이터레이터를 반환함
//   - 배열은 기본적으로 이터러블이며, Array.prototype[Symbol.iterator] 메서드를 사용하여 배열의 각 요소를 순회할 수 있음

//      - 배열이 아닌 객체에 대한 사용: Symbol.iterator 메서드는 배열에만 기본적으로 정의되어 있음. 일반 객체에서는 정의되지 않으므로, 일반 객체를 이터레이터로 사용하려면 직접 구현해야 함
//      - 비어 있는 배열: 비어 있는 배열을 이터레이트하면 { value: undefined, done: true }를 반환하지만, 이 경우 반복이 진행되지 않음. 즉, 아무 값도 출력되지 않음
//      - Mutable 상태: 이터레이터를 생성한 후, 배열이 변경되면 이터레이터의 동작에 영향을 줄 수 있음. 예를 들어, 배열에 요소를 추가하거나 삭제하면, 이전에 생성한 이터레이터가 더 이상 예상대로 작동하지 않을 수 있음
//      - for...of와의 호환성: for...of 루프는 이터러블 객체에 대해 작동하지만, 내부적으로 Symbol.iterator 메서드를 호출하여 이터레이터를 얻음. 따라서 이터러블이 아닌 객체에서 for...of를 사용하면 오류가 발생함
//      - 커스텀 이터레이터: 배열 이외의 객체에서 사용자 정의 이터레이터를 구현할 수 있지만, 이터레이터 규약을 준수해야 함. 즉, next() 메서드는 { value, done } 형식의 객체를 반환해야 함
//      - 중복 호출 주의: Symbol.iterator를 호출할 때마다 새로운 이터레이터 인스턴스가 반환되므로, 동일한 이터레이터를 재사용하지 않도록 주의해야 함

// 1. 사용 예
const arr = [1, 2, 3]

const iterator = arr[Symbol.iterator]() // 이터레이터 메서드 호출

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
console.log(iterator.next()) // { value: 3, done: false }
console.log(iterator.next()) // { value: undefined, done: true }

// for...of 루프를 사용한 예
for (const value of arr) {
  console.log(value)
}
// 출력:
// 1
// 2
// 3

// 2. 활용 예시
const arr2 = [1, 2, 3]
const iterator2 = arr2[Symbol.iterator]()

console.log(iterator2.next()) // { value: 1, done: false }
arr2.push(4) // 배열 수정
console.log(iterator2.next()) // 여전히 2를 반환함
