/* String.prototype.charAt(index) */

//  - 설명:
//   - 주어진 인덱스에 해당하는 문자를 반환. 문자열에서 특정 문자를 간편하게 접근할 수 있게 해주는 유용한 메서드
//   - 인덱스가 문자열의 길이를 초과하는 경우 빈 문자열을 반환하고, 음수 인덱스는 항상 0으로 간주함
//   - 음수 인덱스를 지원하지 않으므로, 만약 음수 인덱스를 사용하고 싶다면 String.prototype.at()를 사용하는 것이 좋음

//  - 활용:
//   - 특정 위치에 있는 문자를 가져올 때 유용
//   - 인덱스를 통해 문자열 내에서 특정 문자를 쉽게 접근할 수 있음

//  - 주의 사항:
//   - charAt() 메서드는 인덱스가 0 이상이고, 문자열의 길이를 초과하지 않는 경우에만 문자를 반환
//   - 음수 인덱스는 무조건 빈 문자열 반환
//   - 인자를 생략하면 기본값으로 0를 설정되고 첫 문자를 반환

// 1. 사용 예
const str = 'world'
console.log(str.charAt(0)) // 'w' (첫 번째 문자)
console.log(str.charAt(13)) // '' (문자열의 길이를 초과)
console.log(str.charAt(-1)) // '' (음수 인덱스)
console.log(str.charAt()) // 'w' (인자를 생략)
console.log(str.charAt(undefined)) // 'w' (숫자가 아닌 경우)
console.log(str.charAt(null)) // 'w' (숫자가 아닌 경우)
console.log(str.charAt('1')) // 'o' (문자열이 아닌 경우)

// 2. 예시 활용
function getCharacterCharAtIndex(str, idx) {
  return str.charAt(idx)
}

console.log(getCharacterCharAtIndex('js', 0)) // 'j' (첫 번째 문자)
console.log(getCharacterCharAtIndex('js', -1)) // '' (빈 문자열)
console.log(getCharacterCharAtIndex('js', 21)) // '' (빈 문자열)
