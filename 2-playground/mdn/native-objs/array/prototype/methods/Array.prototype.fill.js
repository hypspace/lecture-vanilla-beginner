/* Array.prototype.fill(value, start?, end?) */

//  - 설명:
//   - 배열의 모든 요소를 지정된 값으로 채우는 데 사용됨. 이 메서드는 원본 배열을 변경함
//   - 배열을 쉽게 초기화하거나 특정 값을 채우는 데 유용하게 사용됨

//  - 활용:
//   - 배열을 초기화하거나 특정 값을 채우고 싶을 때 유용

//  - 주의 사항:
//   - 원본 배열을 변경하므로 주의해야 함

//   - 구문: array.fill(value, start, end)
//      - value: 배열의 모든 요소를 채울 값
//      - start: (선택 사항) 채우기를 시작할 인덱스. 기본값은 0. 정수로 변환됨
//      - end: (선택 사항) 채우기를 끝낼 인덱스(포함하지 않음). 기본값은 배열의 길이. 정수로 변환됨

// 1. 사용 예
const array = new Array(5)

array.fill(0)
console.log(array) // [0, 0, 0, 0, 0]

// 2. 활용 예시

// - 특정 인덱스부터 채우기 - 인덱스 1부터 3까지 0으로 채우기
const array2 = [1, 2, 3, 4, 5]
array2.fill(0, 1, 4)
console.log(array2) // [1, 0, 0, 0, 5]

// - 음수 인덱스 사용 - 마지막 두 요소를 0으로 채우기
const array3 = [1, 2, 3, 4, 5]

array3.fill(0, -2)
console.log(array3) // [1, 2, 3, 0, 0]

// - 복잡한 구조의 배열 채우기
const array4 = new Array(3).fill({})

array4[0].name = 'Wang' // 모든 요소가 같은 객체를 참조하게 됨
console.log(array4) // [{ name: 'Wang' }, { name: 'Wang' }, { name: 'Wang' }]
