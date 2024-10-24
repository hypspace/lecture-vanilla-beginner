/* Number.parseInt(string: 파싱할 값으로, 문자열로 강제 변환. 이 인자의 앞 부분 공백은 무시, radix: 2에서 36 사이의 정수로, string의 진법(수학적 숫자 체계의 기수)을 나타냄) */

//  - 설명:
//   - 주어진 문자열을 정수로 변환하는 메서드. 문자열 인자를 구문 분석하여 지정된 진법 또는 기수의 정수를 반환. 문자열을 정수로 변환할 때 유용
//   - 문자열의 첫 번째 부분을 정수로 변환하며, 숫자가 아닌 문자가 나타나면 그 지점에서 변환을 중지. 변환할 수 없는 경우 NaN을 반환
//   - 두 번째 인자로 진법(base)을 받아, 다른 진수로 변환할 수도 있음

//  - 활용:
//   - 문자열 형태의 숫자를 실제 정수 타입으로 변환할 때 사용
//   - 주로 사용자 입력이나 외부 데이터에서 정수를 추출할 때 유용

//  - 주의 사항:
//   - Number.parseInt()는 문자열에서 가능한 첫 번째 숫자만 변환하므로, 해당 숫자가 아닌 다른 부분은 무시됨
//   - parseInt는 기본적으로 10진수로 변환하지만, 두 번째 인자를 사용하여 다른 진수를 지정할 수 있음
//   - 변환할 수 없는 경우에는 NaN을 반환하므로, 결과를 확인할 때는 Number.isNaN()을 사용하는 것이 좋음

// 1. 문자열을 정수로 변환
console.log(Number.parseInt('42')) // 42
console.log(Number.parseInt('3.14')) // 3 (소수점 이하는 무시됨)
console.log(Number.parseInt('   100   ')) // 100 (공백 무시)
console.log(Number.parseInt('100abc')) // 100 (숫자 뒤의 문자는 무시)
console.log(Number.parseInt('abc100')) // NaN (숫자가 처음에 없으므로)
console.log(Number.parseInt('1010', 2)) // 10 (2진수로 변환)
console.log(Number.parseInt('1e5')) // 1 (지수 표현의 정수 부분만 변환)
console.log(Number.parseInt('')) // NaN (빈 문자열)
console.log(Number.parseInt('42', 10)) // 42 (10진수로 변환)

// 2. 예시 활용
function parseAndValidateInt(value) {
  const result = Number.parseInt(value, 10)
  if (Number.isNaN(result)) {
    return '입력을 유효한 정수로 구문 분석할 수 없습니다.'
  }
  return '구문 분석된 정수: ' + result
}

console.log(parseAndValidateInt('42')) // 구문 분석된 정수: 42
console.log(parseAndValidateInt('abc')) // 입력을 유효한 정수로 구문 분석할 수 없습니다.
console.log(parseAndValidateInt('100.99')) // 구문 분석된 정수: 100
console.log(parseAndValidateInt('1010', 2)) // 구문 분석된 정수: 1010
