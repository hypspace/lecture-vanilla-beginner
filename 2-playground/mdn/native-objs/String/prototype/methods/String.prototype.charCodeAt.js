/* String.prototype.charCodeAt(index) */

//  - 설명:
//   - 주어진 인덱스에 있는 문자의 유니코드 값(코드 포인트)을 반환
//   - 인덱스가 문자열의 길이를 초과하거나 음수인 경우 NaN을 반환

//  - 활용:
//   - 문자열에서 특정 문자의 유니코드 값을 확인할 때 유용
//   - 문자 인코딩, 비교, 또는 문자 처리와 관련된 작업에 사용

//  - 주의 사항:
//   - 인덱스가 문자열의 길이를 초과하거나 음수인 경우, NaN이 반환
//   - UTF-16 코드 유닛을 사용하여 반환하므로, 이모지와 같은 일부 문자는 두 개의 코드 유닛으로 표현될 수 있음
//   - 이모지를 올바르게 처리하려면 별도의 방법을 사용해야 할 수 있음

// 1. 사용 예
const str = 'hello world'
console.log(str.charCodeAt(0)) // 104
console.log(str.charCodeAt(-1)) // NaN
console.log(str.charCodeAt()) // 104
console.log(str.charCodeAt(undefined)) // 104
console.log(str.charCodeAt(null)) // 104

// 2. 예시 활용
function getCharCodeAtIndex(str, idx) {
  return str.charCodeAt(idx)
}

console.log(getCharCodeAtIndex('js', 0)) // 106
console.log(getCharCodeAtIndex('🙂', 0)) // 55357
console.log(getCharCodeAtIndex('🙂', 1)) // 56898
console.log(getCharCodeAtIndex('🙂', -1)) // NaN (음수 인덱스)
