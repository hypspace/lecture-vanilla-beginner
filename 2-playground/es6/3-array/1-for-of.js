/* for of */

// - 설명:
//  - 기존의 for-in은 객체 타입을 순회할 때 쓰는 것. 하지만 배열 타입의 데이터도 순회가 가능한데 이에 예기치 못한 동작이 발생할 수 있음. 중간에 누군가 프로토타입 객체에 메서드나 특정 데이터를 추가하면 해당 데이터도 순회가 되어 출력이 됨. 이는 for in 루프 자체가 객체 또는 배열에서 모든 열거 가능한 속성을 순회하기 때문. 프로토타입 체인에서 상속된 속성까지 포함해서 순회하기 때문에 예기치 못한 동작이라고 볼 수도 있음
//  - 이에 VSCode 자체에서 for-in에 대한 인텔리센스 기능을 제공함. 여러 기능 중에 하나인 자동완성 구문을 제공함. for-in 내부에 Object.prototype.hasOwnProperty.call를 써서 상속된 속성에 대한 필터링 작업을 하는 구문을 제공함
//  - ES6에서는 프로토타입 체인에서 상속된 속성까지 순회되는 현상을 방지하고 다소 길게 작성해야하는 구문의 편의성을 제공하고자 for-of를 추가한 것으로 보임

// 1. 객체뿐만 아니라 배열도 순회 가능한 for-in에서 발생하는 예기치 못한 동작과 해결 방법
const arr = [1, 2, 3]

// - 기존 for-in 동작
for (const key in arr) {
  console.log(arr[key])
}
/** 출력 결과:
 * 1
 * 2
 * 3
 */

// - 예기치 못한 동작: 프로토타입 체인에 상속된 속성을 추가하면서 발생하는 for-in 루프의 출력 결과
Array.prototype.add = function () {}
Array.prototype.number = '1'

for (const key in arr) {
  console.log(arr[key])
}
/** 출력 결과:
 * 1
 * 2
 * 3
 * add [Function (anonymous)]
 * "1"
 */

// - 예기치 못한 동작 해결하기: for-in + Object.prototype.hasOwnProperty.call
for (const key in arr) {
  if (Object.prototype.hasOwnProperty.call(arr, key)) {
    console.log(arr[key])
  }
}
/** 출력 결과:
 * 1
 * 2
 * 3
 */

// 2. 예기치 못한 동작 해결하기: ES6 for-of
for (const element of arr) {
  console.log(element)
}
/** 출력 결과:
 * 1
 * 2
 * 3
 */
