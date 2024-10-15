/* String.prototype.concat(string2, string3[, ..., stringN]) */

//  - 설명:
//   - 하나 이상의 문자열을 결합하여 새로운 문자열을 반환. 모든 문자열을 호출 문자열에 붙인 새로운 문자열 반환
//   - 기존 문자열을 변경하지 않고, 결합된 결과로 새로운 문자열을 생성
//   - 여러 문자열을 결합하여 새로운 문자열을 만드는 유용한 메서드. 하지만 간단한 문자열 결합에는 + 연산자를 사용하는 것이 더 일반적

//  - 활용:
//   - 여러 개의 문자열을 간편하게 결합할 때 유용
//   - 문자열 배열을 조합할 때 사용할 수 있음

//  - 주의 사항:
//   - concat() 메서드는 문자열을 변경하지 않고, 새로운 문자열을 반환
//   - 인자로 전달할 수 있는 값은 문자열뿐만 아니라, 다른 데이터 타입도 가능함. 이 경우 toString() 메서드가 호출되어 문자열로 변환됨

// 1. 사용 예
const str1 = 'hello'
const str2 = 'world'
console.log(str1.concat(str2)) // helloworld
console.log(str1.concat(' ', str2)) // hello world
console.log(str1.concat())

console.log('text'.concat(1, 2, 3)) // text123
console.log('text'.concat([1, 2, 3])) // text1,2,3

// 2. 예시 활용
function joinStrings(...strings) {
  return strings.reduce((acc, curr) => acc.concat(curr), '') //
}

console.log(joinStrings('i', 'love', 'js')) // ilovejs
