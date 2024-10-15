/* String.length */

//  - 설명:
//   - 문자열 객체에서 사용할 수 있는 속성으로, 해당 문자열의 길이를 반환. UTF-16 코드 유닛을 기준으로 문자열의 길이를 나타냄
//   - 문자열의 길이는 문자열에 포함된 문자 수를 나타내며, 공백이나 특수 문자도 포함됨

//  - 활용:
//   - 문자열의 길이를 확인할 때 사용
//   - 입력 검증, 문자열 조작 등 다양한 상황에서 유용하게 활용

//  - 주의 사항:
//   - String.length는 문자열의 길이를 반환하며, 문자열이 비어있는 경우 0을 반환
//   - 이모지와 같은 특수 문자의 경우, JS는 UTF-16 인코딩을 사용하므로, 한 이모지가 두 개의 코드 유닛으로 표현될 수 있어 length가 2로 반환될 수 있음
//   - 이모지가 한 글자로 보이더라도, 코드 유닛 수가 더 많아질 수 있음을 의미함

// 1. 사용
const str1 = 'Hello, World!'
console.log(str1.length) // 13 (문자의 개수)

const str2 = '  Leading and trailing spaces.  '
console.log(str2.length) // 32 (공백 포함)

const str3 = '😊' // 이모지 하나는 두 개의 UTF-16 코드 유닛으로 표현됨
console.log(str3.length) // 2

const str4 = 'Hello\nWorld' // 줄 바꿈 문자가 포함됨
console.log(str4.length) // 11 (줄 바꿈 포함)

// 2. 예시 활용
function isStringLongEnough(value, minLength) {
  if (typeof value !== 'string') {
    throw new Error('Input must be a string.')
  }
  return value.length >= minLength
}

console.log(isStringLongEnough(1, 5)) // Error: Input must be a string.
console.log(isStringLongEnough('Hello', 5)) // true
console.log(isStringLongEnough('Hi', 5)) // false
