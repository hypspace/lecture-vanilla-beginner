/* String.prototype.codePointAt(index) */

//  - 설명:
//   - 주어진 인덱스에서 유니코드 코드 포인트를 반환
//   - UTF-16 인코딩을 사용하여 문자열의 각 문자에 대한 코드 포인트를 처리할 수 있음
//   - 이모지나 다른 복잡한 문자를 정확하게 다룰 수 있음
//   - 다국어 지원이나 이모지를 다루는 경우에는 charCodeAt() 보다 codePointAt()을 사용하는 것이 더 적합함

//  - 활용:
//   - 문자열 내 특정 위치에 있는 문자의 유니코드 코드 포인트를 가져올 때 유용
//   - 특히 이모지와 같은 2개 이상의 UTF-16 코드 유닛으로 표현되는 문자를 처리할 때 유용
//   - 전체 유니코드 코드 포인트를 반환하며, 이모지와 같은 복잡한 문자 처리에 유리

//  - 주의 사항:
//   - 인덱스가 문자열의 길이를 초과하는 경우 undefined가 반환
//   - 코드 포인트는 0에서 1114111(0x10FFFF) 사이의 값을 가짐

// 1. 사용 예
const emojiStr = '🙂'

console.log(emojiStr.charCodeAt(0)) // 55357 (이모지의 첫 번째 코드 유닛)
console.log(emojiStr.charCodeAt(1)) // 56898 (이모지의 두 번째 코드 유닛)
console.log(emojiStr.codePointAt(0)) // 128578 (이모지의 전체 코드 포인트)
