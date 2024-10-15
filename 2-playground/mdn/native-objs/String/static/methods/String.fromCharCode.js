/* String.fromCharCode(num1[, ...[, numN]]) */

//  - 설명:
//   - 주어진 유니코드 값을 기반으로 문자열을 생성하는 정적 메서드. UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환
//   - 하나 이상의 유니코드 코드 포인트를 인자로 받아 해당하는 문자로 구성된 문자열을 반환
//   - 유니코드 코드 포인트는 0에서 65535 사이의 정수

//  - 활용:
//   - ASCII 또는 유니코드 값을 사용하여 문자 문자열을 생성할 때 유용
//   - 특정 코드 포인트에 해당하는 문자를 만들고자 할 때 사용할 수 있음

//  - 주의 사항:
//   - String.fromCharCode()는 코드 포인트가 0에서 65535 사이에 있는 경우에만 작동함. 그 범위를 초과하는 코드 포인트는 무시됨
//   - 유니코드 코드 포인트가 2바이트를 넘는 경우, String.fromCharCode() 대신 String.fromCodePoint()를 사용하는 것이 좋음

// 1. 문자 생성
console.log(String.fromCharCode(65)) // A
console.log(String.fromCharCode(97)) // a
console.log(String.fromCharCode(0x20ac)) // € (유로 기호)
console.log(String.fromCharCode(72, 101, 108, 108, 111)) // Hello
