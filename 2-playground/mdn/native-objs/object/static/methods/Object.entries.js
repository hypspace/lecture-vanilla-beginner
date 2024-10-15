/* Object.entries(obj) */

//  - 설명:
//   - 주어진 객체 자신이 가진 속성을 [key, value] 쌍을 배열로 반환함. 객체의 속성을 배열 형태로 쉽게 다룰 수 있게 해줌. ECMAScript 2017 (ES8)에서 도입됨
//   - for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환합니다. (for-in 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점)
//   - 객체의 속성을 배열 형태로 쉽게 다룰 수 있게 해주는 유용한 메서드. 객체의 내용을 반복하고 조작하는 데 매우 유용하게 사용할 수 있음

//  - 활용:
//   - 객체의 속성을 반복(iterate)할 때 유용하며, for...of 루프나 배열 메서드와 함께 사용할 수 있음
//   - 객체의 속성을 배열 형태로 쉽게 다루고 변형할 수 있게 해주므로, 현업에서 데이터 처리, UI 생성, 설정 관리 등 다양한 상황에서 매우 유용하게 사용됨

//  - 주의 사항:
//   - Object.entries()는 열거 가능한 속성만 반환. 즉, enumerable 속성이 true인 속성만 포함됨
//   - Object.entries() 에 의해 반환된 배열(array)의 순서는 객체가 정의된 방법과 관련이 없음. 배열 순서가 쓸 곳이 있다면, 다음과 같이 정렬을 먼저 하는 것이 좋음 (Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));)

// 1. 사용 예
const obj = {
  name: 'Wang',
  age: 31,
  city: 'Pusan',
}

console.log(Object.entries(obj)) // [['name', 'Wang'], ['age', 31], ['city', 'Pusan']]

// 2. 속성 반복
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`)
}
// 출력:
// name: Wang
// age: 31
// city: Pusan

// 3. 배열 메서드와 함께 사용
const updatedEntries = Object.entries(obj).map(([key, value]) => [
  key,
  value + 1,
])

console.log(updatedEntries) // [['name', 'Wang1'], ['age', 32], ['city', 'Pusan1']]

// 2. 활용 예시

// - 정렬 및 필터링 - 객체의 속성을 배열 형태로 변형하여 데이터 처리할 수 있음
const scores = {
  wang: 85,
  long: 92,
  shane: 78,
}

const highScores = Object.entries(scores)
  .filter(([key, value]) => value > 80)
  .sort((a, b) => b[1] - a[1])

console.log(highScores) // [['long', 92], ['wang', 85]]
