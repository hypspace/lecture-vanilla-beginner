/* String.prototype.slice(indexStart, indexEnd) */

//  - 설명:
//   - 문자열의 일부분을 추출하여 새로운 문자열을 반환. 원본 문자열은 변경되지 않
//   - 하나의 문자열로부터 텍스트를 추출하고 새 문자열을 반환
//   - slice()는 indexEnd를 포함하지 않고 추출함

//  - 활용:
//   - 문자열의 특정 부분을 추출하여 새로운 문자열로 반환하는 데 유용
//   - 음수 인덱스를 사용할 수 있어, 문자열의 끝에서부터 부분을 추출할 때 편리하게 사용할 수 있음

//  - 주의 사항:
//   - slice()는 문자열의 인덱스를 기준으로 하며, 만약 start가 end보다 큰 경우, 빈 문자열을 반환
//   - start와 end가 문자열의 범위를 벗어나면 자동으로 조정됨

//   - 매개변수
//      - start: 추출을 시작할 인덱스. 음수 값을 사용하면 문자열의 끝에서부터 계산됨
//      - end: 추출을 끝낼 인덱스(이 인덱스는 포함되지 않음). 생략하면 문자열의 끝까지 추출함. 음수 값을 사용할 수 있음

// 1. 사용 예
const str = 'hello, world'
const newStr = str.slice(0, 5)
console.log(newStr) // hello

// 2. 끝에서부터 추출
const newStr2 = str.slice(-5)
console.log(newStr2) // world

// 3. 음수 인덱스 사용
const newStr3 = str.slice(0, -7)
console.log(newStr3) // hello

// 4. 활용 예시

// - 문자열 잘라내기
const text = 'js is cool'
const part = text.slice(0, 3)
console.log(part) // js

// - 중간 부분 추출
const plainText = 'learn js'
const part2 = plainText.slice(3, 5)
console.log(part2) // rn

// - 뒤에서부터 특정 부분 추출
const string = 'hello, world'
const lastPart = str.slice(-5, -2)
console.log(lastPart) // wor
