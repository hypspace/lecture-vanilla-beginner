/* Array.prototype.indexOf(searchElement, fromIndex?) */

//  - 설명:
//   - 특정 요소의 첫 번째 인덱스를 반환. 요소가 배열에 존재하지 않으면 -1을 반환

//  - 활용:
//   - 배열에서 특정 요소의 위치를 찾고자 할 때 사용

//  - 주의 사항:
//   - fromIndex: 검색을 시작할 인덱스. 기본값은 0. 음수 값을 제공하면 배열의 끝에서부터 계산됨. 검색을 시작할 0 기반 인덱스로, 정수로 변환됨(예: 1.1은 1로 변환됨)
//   - 비교는 === (엄격한 동등성)으로 이루어짐
//   - NaN은 자기 자신과 동등하지 않으므로, indexOf로 찾을 수 없음

// 1. 사용 예
const fruits = ['apple', 'banana', 'cherry']

const indexBanana = fruits.indexOf('banana')
console.log(indexBanana) // 1

const indexGrape = fruits.indexOf('grape')
console.log(indexGrape) // -1

// 2. fromIndex로 사용 예
const index = fruits.indexOf('banana', 1.1)
console.log(index) // 1
