/* String.prototype.repeat(count) */

//  - 설명:
//   - 주어진 수만큼 문자열을 반복하여 새로운 문자열을 생성. 반복할 문자열을 생성하는 데 유용
//   - 특정 문자열을 주어진 횟수만큼 반복하여 새로운 문자열을 생성하는 메서드로, 문자열 조작 및 패턴 생성에 유용하게 사용됨

//  - 활용:
//   - repeat은 패턴 생성, 문자열 포매팅, 데이터 시각화, 테스트 문자열 생성, 애니메이션 효과 등 다양한 상황에서 유용하게 사용될 수 있음
//   - 문자열을 반복하여 새로운 효과를 주거나 특정 형식을 유지하는 데 매우 편리함

//  - 주의 사항:
//   - repeat() 메서드는 원본 문자열을 변경하지 않으며, 항상 새로운 문자열을 반환
//   - count는 정수여야 하며, 부정확한 값이 들어가면 RangeError가 발생할 수 있음

//   - 예외:
//      - RangeError: 반복 횟수는 양의 정수여야 함
//      - RangeError: 반복 횟수는 무한대보다 작아야 하며, 최대 문자열 크기를 넘어선 안됨

// 1. 사용 예
const str = 'hello '

console.log(str.repeat(3)) // hello hello hello
console.log(str.repeat(0)) // ' '

// 2. 예시 활용

// - 패턴 생성
const separator = '-'
const line = separator.repeat(30)
console.log(line) // ------------------------------

// - 문자열 포매팅
const title = 'Report'
const header = title + '\n' + '='.repeat(title.length)
console.log(header)
/**
 * Report
 * ======
 */

// - 데이터 시각화
const progressBar = (curr, total) => {
  const percentage = Math.round((curr / total) * 100)
  const barLength = 20
  const filledLength = Math.round(barLength * (curr / total))
  const bar = '='.repeat(filledLength) + '-'.repeat(barLength - filledLength)
  return `[${bar}] ${percentage}%`
}

console.log(progressBar(5, 10)) // [==========----------] 50%

// - 테스트 문자열 생성
const longString = 'A'.repeat(100)
console.log(longString.length) // 100

// - 애니메이션 효과
const loading = 'loading' + '.'.repeat(3)
setInterval(() => {
  console.clear()
  console.log(loading)
}, 1350)
