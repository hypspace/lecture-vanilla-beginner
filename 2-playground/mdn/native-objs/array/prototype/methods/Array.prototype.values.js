/* Array.prototype.values() */

//  - 설명:
//   - 배열의 요소 값을 포함하는 새로운 Array Iterator 객체를 반환
//   - 배열의 인덱스(키)로 이루어진 새로운 Array Iterator 객체를 반환하려면 keys()를 사용할 것
//   - 배열의 요소를 쉽게 반복하고, 필요한 처리를 할 수 있음

//  - 활용:
//   - 배열의 각 요소를 순회하는 데 유용. 배열의 값을 반복하거나, 요소를 처리할 때 사용됨
//   - 주로 for...of 루프와 함께 사용하여 배열의 모든 요소에 접근할 수 있음

//  - 주의 사항:
//   - 반환된 이터레이터는 원본 배열과 연결되어 있으며, 배열의 길이에 따라 작동함
//   - 이터레이터는 한 번만 사용할 수 있으며, 재사용하려면 새로 생성해야 함. 즉, 같은 이터레이터를 다시 사용할 수는 없음

// 1. 사용 예
const fruits = ['apple', 'banana', 'cherry']
const valuesIterator = fruits.values() // values()를 사용하여 배열의 값을 반복하기

for (const fruit of valuesIterator) {
  console.log(fruit)
}
// 출력:
// apple
// banana
// cherry

// 2. 활용 예시
const scores = [90, 85, 78, 92, 88]
const scoresIterator = scores.values()
const doubledScores = []

for (const score of scoresIterator) {
  doubledScores.push(score * 2)
}
console.log(doubledScores) // [180, 170, 156, 184, 176]
