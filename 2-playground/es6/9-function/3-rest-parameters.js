/* Rest Parameters */

// - 설명:
//  - 들어오는 인자의 갯수가 가변적일 때 이에 효과적으로 대응하는 함수를 만들 수 있음. 여럿 방법이 있는데 아래와 같으며 ES6에서는 간단한 구문 작성으로 해결 가능한 문법을 표준화함. Rest Parameter 또는 나머지 매개변수라고 부름
//  - Rest Parameters는 Spread Operator와 비슷하지만 실제 다르게 동작함. 둘 다 (...) 구문을 쓰지만 각각 사용 목적이 다름. 특히 Rest Parameters는 함수의 매개변수로 사용되어, 전달된 인수를 배열로 묶음. 그래서 가변적으로 들어올 수 있는 함수의 매개변수를 배열로 묶는 역할을 함. 반면 Spread Operator는 데이터를 병합, 복사, 분산하는데 목적을 둠

//  - 함수의 인자로 가변적인 갯수의 데이터가 들어오는 경우 해결할 수 있는 방법:
//   - arguments 객체 활용:
//     - for (let i = 0; i < arguments.length; i++) {console.log(arguments[i])}
//     - Array.prototype.slice.call(arguments): 유사-배열 객체를 배열로1
//     - Array.from(arguments): 유사-배열 객체를 배열로2

// 1. Rest Parameters 사용 예시
function getArgsArray(...args) {
  return args
}

console.log(getArgsArray(1, 2, 3, 4, 5, 6, 9, 10)) // [1, 2, 3, 4, 5, 6, 9, 10]
