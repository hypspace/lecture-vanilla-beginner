/* Array.prototype.lastIndexOf(searchElement, fromIndex?) */

//  - 설명:
//   - 주어진 값이 배열에서 마지막으로 나타나는 위치(인덱스)를 반환함. 만약 배열에 해당 값이 없다면 -1을 반환함
//   - 배열에서 특정 값의 마지막 인덱스를 쉽게 찾을 수 있게 도와줌

//  - 활용:
//   - 배열에서 특정 요소의 마지막 인덱스를 찾을 때 유용
//   - 중복된 요소가 있는 배열에서 마지막 위치를 확인할 수 있음

//  - 주의 사항:
//   - 검색은 배열의 끝에서부터 시작
//   - 비교는 엄격한 동등(===) 연산자로 수행됨
//   - 반환값은 배열에 있는 searchElement의 마지막 인덱스. 찾을 수 없으면 -1이 반환됨

//   - lastIndexOf와 비슷한 메서드가 많음. findLastIndex, findLastIndex(ES2022에 추가됨), indexOf, lastIndexOf

// 1. 사용 예
const numbers = [2, 5, 9, 2]

const lastIdx = numbers.lastIndexOf(2)
console.log(lastIdx) // 3

// 2. 중복된 요소의 위치 찾기
const arr = [1, 'lor', 2, 'lor']
const lastTextIdx = arr.lastIndexOf('lor')
console.log(lastTextIdx) // 3

// 3. 존재하지 않는 값의 인덱스
const letters = ['a', 'b', 'c']
const idx = letters.lastIndexOf('d')
console.log(idx) // -1 (존재하지 않음)
