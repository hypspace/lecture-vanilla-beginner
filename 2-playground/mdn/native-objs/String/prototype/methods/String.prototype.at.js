/* String.prototype.at(index) */

//  - 설명:
//   - 주어진 인덱스에 해당하는 문자를 반환. 문자열에서 특정 문자를 간편하게 접근할 수 있게 해주는 유용한 메서드
//   - 음수 인덱스를 지원하여, 문자열의 끝에서부터 문자를 선택할 수 있음. 인덱스 -1은 문자열의 마지막 문자를 반환

//  - 활용:
//   - 특정 위치에 있는 문자를 쉽게 가져올 수 있음
//   - 음수 인덱스를 사용하여 문자열의 끝에서부터 문자를 선택할 수 있어 편리

//  - 주의 사항:
//   - at() 메서드는 문자열이 비어있거나, 인덱스가 문자열의 길이를 초과하는 경우 undefined를 반환
//   - 인덱스는 정수여야 하며, 다른 타입(예: 문자열)이 전달되면 NaN으로 변환된 후 해당 인덱스가 사용됨

// 1. 사용 예
const str = 'hello'
console.log(str.at(0)) // 'h' (첫 번째 문자)
console.log(str.at(-1)) // 'o' (마지막 문자)
console.log(str.at('2')) // 'l' (세 번째 문자)
console.log(str.at('21')) // undefined (문자열의 길이를 초과)
console.log(str.at(NaN)) // 'h' (다른 타입(예: 문자열)이 전달 시 NaN으로 변환된 후 해당 인덱스 사용)

// 2. 예시 활용
function getCharacterAtIndex(str, idx) {
  return str.at(idx)
}

console.log(getCharacterAtIndex('js', 0)) // 'j'
console.log(getCharacterAtIndex('js', -1)) // 's'
