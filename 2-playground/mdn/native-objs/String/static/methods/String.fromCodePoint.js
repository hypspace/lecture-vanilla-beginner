/* String.fromCodePoint(num1[, ...[, numN]]) */

//  - 설명:
//   - 명시된 코드 포인트의 시퀀스로부터 생성된 문자열을 반환
//   - String.fromCodePoint()는 0에서 1114111(0x10FFFF)까지의 코드 포인트를 지원하므로, String.fromCharCode() 보다 더 넓은 범위의 유니코드 문자를 처리할 수 있음
//   - 다양한 유니코드 문자를 생성하는 데 유용한 메서드이며, 특히 이모지나 특수 문자를 다룰 때 매우 유용

//  - 활용:
//   - 다양한 유니코드 문자(예: 이모지, 특수 문자 등)를 생성할 때 유용
//   - 코드 포인트를 사용하여 특정 문자를 표현하고자 할 때 사용할 수 있음

//  - 주의 사항:
//   - String.fromCodePoint()는 유니코드 코드 포인트가 0에서 1114111(0x10FFFF) 사이에 있을 때만 작동함. 범위를 초과하는 경우에는 무시됨
//   - 각 코드 포인트는 1~4개의 UTF-16 코드 유닛으로 인코딩될 수 있으며, 이 메서드는 이를 적절히 처리하여 문자열을 생성함

// 1. 문자 생성
console.log(String.fromCodePoint(65)) // A
console.log(String.fromCodePoint(97)) // a
console.log(String.fromCodePoint(0x20ac)) // € (유로 기호)
console.log(String.fromCodePoint(0x1f600)) // 😀 (스마일 이모지)
console.log(String.fromCodePoint(0x1f4a9)) // 💩 (똥 이모지)
console.log(String.fromCodePoint(72, 101, 108, 108, 111)) // Hello

// 2. 예시 활용
function createStringFromCodePoints(...codePoints) {
  return String.fromCodePoint(...codePoints)
}

console.log(createStringFromCodePoints(72, 101, 108, 108, 111)) // Hello
console.log(createStringFromCodePoints(0x1f600, 0x1f4a9)) // 😀💩
