/* Default Parameters */

// - 설명:
//  - 함수의 매개변수로 전달받는 값이 최소한의 기본값을 지니고 있어야 하는 경우가 있음. 이러한 경우가 함수 앞쪽. 코드블럭 내부의 선언부 부분에 많이 필요로 하게 되는데 ES6에서는 함수 파라미터 자체에서 기본값을 지정(설정)할 수 있는 기능을 추가함

// 1. 디폴트 파라미터 이전의 매개변수 기본값 설정 방법
function area(width, height) {
  width = width || 3
  return width * height
}
console.log(area(undefined, 3)) // 9

// 2. ES6 디폴트 파라미터 적용 예시
function area2(width = 3, height) {
  return width * height
}
console.log(area2(undefined, 3)) // 9
