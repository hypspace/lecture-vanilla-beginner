/* Array.prototype.push(element1[, ...[, elementN?]]) */

//  - 설명:
//   - 배열의 끝에 하나 이상의 요소를 추가하고, 새로운 배열의 길이를 반환함. 이 메서드는 원본 배열을 직접 수정함

//  - 활용:
//   - 배열에 새로운 데이터를 추가할 때 유용함
//   - 스택 구조를 구현할 때 사용될 수 있음

//  - 주의 사항:
//   - 원본 배열을 변경함
//   - push() 메서드는 반환값으로 배열의 새로운 길이를 반환함

//   - element1[, ...[, elementN]]:
//     - 대괄호([])는 선택적 매개변수를 의미함. 즉, element2, element3 등 추가적인 요소들은 선택적으로 제공할 수 있음. ...는 나머지 매개변수를 나타내며, 여러 개의 요소를 한 번에 추가할 수 있다는 것을 의미함
//      - element1: 필수 요소. 반드시 제공해야 함
//      - ...: 더 많은 선택적 요소
//      - element2, element3, ..., elementN: 선택적 요소들. 필요에 따라 여러 개를 추가할 수 있음

// 1. 사용 예
const array = [1, 2]

array.push(3) // 3은 element1. 필수 요소인 element1을 제공
console.log(array) // [1, 2, 3]

array.push(4, 5) // 4는 element2. 5는 element3
console.log(array) // [1, 2, 3, 4, 5]

array.push() // 여기서는 아무 요소도 제공하지 않았음. element1 없이 호출하면 에러가 발생
console.log(array) // [1, 2, 3, 4, 5] (기존 상태 유지)
