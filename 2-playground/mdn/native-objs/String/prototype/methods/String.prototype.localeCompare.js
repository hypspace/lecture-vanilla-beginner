/* String.prototype.localeCompare(that, locales?) */

//  - 설명:
//   - 문자열을 비교하여 정수 값을 반환. 참조 문자열이 정렬 순으로 지정된 문자열 앞 혹은 뒤에 오는지 또는 동일한 문자열인지 나타내는 수치를 반환
//   - 문자열의 정렬 순서를 결정하는 데 사용되며, 주어진 로케일 및 옵션에 따라 대소문자 구분, 정렬 방식 등을 조정할 수 있음
//   - 문자열 간의 비교를 통해 정렬 순서를 결정하는 데 유용한 메서드. 다국어 문자열 처리와 정렬이 필요한 상황에서 특히 유용

//  - 활용:
//   - 사용자 인터페이스에서 문자열 정렬을 구현할 때 유용
//   - 다국어 처리 및 정렬에 적합

//  - 주의 사항:
//   - 반환 값:
//      - 음수: 비교 대상 문자열이 현재 문자열보다 사전적으로 앞에 있는 경우
//      - 0: 두 문자열이 동일한 경우
//      - 양수: 비교 대상 문자열이 현재 문자열보다 사전적으로 뒤에 있는 경우

// 1. 사용 예
const str1 = 'apple'
const str2 = 'banana'
const str3 = 'Apple'

console.log(str1.localeCompare(str2)) // -1 (str1이 str2보다 앞에 있음)
console.log(str2.localeCompare(str1)) // 1  (str2가 str1보다 뒤에 있음)
console.log(str1.localeCompare(str1)) // 0  (동일한 문자열)
console.log(str3.localeCompare(str1)) // 1 (대소문자 구분, 'Apple'이 'apple'보다 사전적으로 앞에 있음)

// 2. 옵션 사용
const str11 = 'ä'
const str33 = 'z'
console.log(str11.localeCompare(str33, 'de')) // -1 (독일어 기준으로 'ä'가 'z'보다 앞에 있음)
console.log(str11.localeCompare(str33, 'en')) // 1 (영어 기준으로 'ä'가 'z'보다 앞에 있음. 혹시나 -1이 나온다면 환경: 사용하고 있는 JS 실행 환경(브라우저, Node.js 등)에 따라 로케일 지원이 다를 수 있음을 참고할 것)

// 3. 옵션을 사용하여 대소문자 무시하기
console.log(str1.localeCompare(str3, 'apple', { sensitivity: 'base' })) // 0
