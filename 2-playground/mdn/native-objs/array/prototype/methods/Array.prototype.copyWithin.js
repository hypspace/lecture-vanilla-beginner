/* Array.prototype.copyWithin(target, start, end?) */

//  - 설명:
//   - 배열의 특정 부분을 다른 위치로 복사하는 메서드
//   - 배열의 원본을 변경하며, 지정된 시작 위치에서 끝 위치까지의 요소를 복사하여 지정된 타겟 위치에 덮어씌움

//  - 활용:
//   - 배열의 일부 요소를 다른 위치로 복사하고 싶을 때

//  - 주의 사항:
//   - 원본 배열이 변경되므로 주의가 필요함
//   - 음수 인덱스를 사용할 수 있으며, 이 경우 배열의 끝에서부터 요소를 계산함

//   - 구문: array.copyWithin(target, start, end?)
//      - target: 복사된 요소가 덮어씌워질 배열의 인덱스
//      - start: 복사할 요소의 시작 인덱스 (기본값은 0)
//      - end: 복사할 요소의 끝 인덱스 (기본값은 배열의 길이)

// 1. 사용 예
const arr = [1, 2, 3, 4, 5]

arr.copyWithin(1, 0) // 배열의 숫자 2부터 덮어씌워지면서 원본 배열을 변경함
console.log(arr) // 출력: [1, 1, 3, 4, 5]
