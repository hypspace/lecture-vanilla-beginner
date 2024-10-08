/* String.prototype.matchAll(regexp) */

//  - 설명:
//   - 주어진 정규 표현식에 대한 모든 일치를 찾고, 각 일치에 대한 정보를 담고 있는 Iterator 객체를 반환
//   - 전역 플래그(g)가 설정된 정규 표현식과 함께 사용될 때 유용
//   - 정규 표현식과 일치하는 모든 결과를 반복할 수 있는 Iterator 객체를 반환. 여러 일치를 처리할 때 유용하며, for...of 루프와 함께 사용하여 쉽게 결과를 확인할 수 있음

//  - 활용:
//   - 문자열 내에서 모든 일치 항목을 반복하고자 할 때 유용
//   - match()와 달리 모든 결과를 배열이 아닌 Iterator 형태로 반환하여 더 유연한 사용이 가능

//  - 주의 사항:
//   - matchAll()은 ES2020(ES11)에서 도입된 메서드로, 구형 브라우저에서는 지원하지 않을 수 있음
//   - 반환되는 Iterator는 for...of 루프를 사용하거나, 스프레드 연산자(...)를 통해 배열로 형 변환할 수 있음

//   - 반환 값:
//      - Iterator 객체: 일치하는 모든 결과를 포함하는 객체

// 1. 사용 예
const str = 'lorem is is'

console.log(str.matchAll('is')) // Object [RegExp String Iterator] {}
console.log(str.matchAll(/is/g)) // Object [RegExp String Iterator] {}

// - Iterator 객체를 배열로
const result = str.matchAll('is')
// console.log(...result) // [ 'is', index: 6, input: 'lorem is is', groups: undefined ] [ 'is', index: 9, input: 'lorem is is', groups: undefined ]

for (const element of result) {
  console.log(element[0]) // is <다음 순회> is
}
