/* Number.prototype.toString() */

//  - 설명:
//   - 숫자를 문자열로 변환
//   - 선택적으로 변환할 진수를 지정할 수 있음
//   - 기본적으로 10진수로 변환되며, 2진수, 8진수, 16진수 등 다양한 진수로 표현할 수 있음

//  - 활용:
//   - 숫자를 문자열로 변환하여 UI 표시 시 사용되거나, 문자열 조작이 필요할 때 유용
//   - 다양한 진수 표현이 필요할 때, 특히 데이터 처리나 변환 작업에서 (당연하게도) 자주 사용

//  - 주의 사항:
//   - 진수를 지정하지 않으면 기본값은 10진수
//   - 지원되는 진수는 2에서 36까지. 이 외의 진수를 지정하면 RangeError가 발생함
//   - toString()은 항상 문자열을 반환하므로, 숫자로 다시 사용하려면 Number() 또는 parseFloat()를 사용해야 함

// 1. 기본 사용
const num = 123
console.log(num.toString()) // '123'

// 2. 2진수로 변환
const num2 = 10
console.log(num2.toString(2)) // '1010'

// 3. 8진수로 변환
const num3 = 8
console.log(num3.toString(8)) // '10'

// 4. 16진수로 변환
const num4 = 255
console.log(num4.toString(16)) // 'ff'

// 5. *부동 소수점 숫자를 문자열로 변환 (부동 소수점 숫자: 소수점이 있는 숫자)
const num5 = 123.45
console.log(num5.toString()) // '123.45'
