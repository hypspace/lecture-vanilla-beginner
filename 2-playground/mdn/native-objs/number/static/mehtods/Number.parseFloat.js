/* Number.parseFloat(string) */

//  - 설명:
//   - 문자열을 부동 소수점 숫자로 변환하는 메서드. 문자열을 부동 소수점 숫자로 변환할 때 유용
//   - 주어진 문자열의 첫 번째 부분을 숫자로 변환하며, 숫자가 아닌 문자가 나타나면 그 지점에서 변환을 중지함
//   - 주어진 값을 필요한 경우 문자열로 변환한 후 부동소수점 실수로 파싱해 반환. 숫자를 파싱할 수 없는 경우 NaN을 반환

//  - 활용:
//   - 문자열 형태의 숫자를 실제 숫자 타입으로 변환할 때 사용
//   - 주로 사용자 입력이나 외부 데이터에서 수치를 추출할 때 유용

//  - 주의 사항:
//   - Number.parseFloat()는 문자열에서 가능한 첫 번째 숫자만 변환하므로, 해당 숫자가 아닌 다른 부분은 무시됨
//   - 변환할 수 없는 경우에는 NaN을 반환하므로, 결과를 확인할 때는 Number.isNaN()을 사용하는 것이 좋음

// 1. 문자열을 부동 소수점 숫자로 변환
console.log(Number.parseFloat('42')) // 42
console.log(Number.parseFloat('3.14')) // 3.14
console.log(Number.parseFloat('   2.5   ')) // 2.5 (공백 무시)
console.log(Number.parseFloat('3.14abc')) // 3.14 (숫자 뒤의 문자는 무시)
console.log(Number.parseFloat('abc3.14')) // NaN (숫자가 처음에 없으므로)
console.log(Number.parseFloat('Infinity')) // Infinity
console.log(Number.parseFloat('')) // NaN (빈 문자열)
console.log(Number.parseFloat('1e5')) // 100000 (지수 표현)

// 2. 예시 활용
function parseAndValidateFloat(value) {
  const result = Number.parseFloat(value)

  if (Number.isNaN(result)) {
    return '입력을 유효한 부동 소수점으로 구문 분석할 수 없습니다.'
  }
  return '구문 분석된 부동 소수점: ' + result
}

console.log(parseAndValidateFloat('3.14')) // 구문 분석된 부동 소수점: 3.14
console.log(parseAndValidateFloat('abc')) // 입력을 유효한 부동 소수점으로 구문 분석할 수 없습니다.
console.log(parseAndValidateFloat('42.0')) // 구문 분석된 부동 소수점: 42
console.log(parseAndValidateFloat('1.5e3')) // 구문 분석된 부동 소수점: 1500
