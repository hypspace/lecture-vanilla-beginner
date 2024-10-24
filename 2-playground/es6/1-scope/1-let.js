/* let */

// - 설명:
//  - ES6 이전에는 함수 단위의 스코프만 존재했는데, ES6부터는 블록 단위의 스코프를 지원하는 let & const라는 키워드가 추가됨
//  - 보통 JS에서 변수에 접근할 시에는 스코프체인을 따라 변수를 찾음. var 키워드나 let & const로 선언된 변수 모두 함수 스코프에서는 외부에서 접근 불가하고 블록스코프에서는 var가 접근 가능
//  - 블럭 스코프에 대해 외부에서 접근 가능한 이슈로 예기치 못한 동작이 있음에 블록 스코프를 지원하는 변수 선언 키워드가 나온 것으로 보임

// 1. 스코프체인을 따라 변수에 접근 예시
var str = '11'
function foo() {
  var str = 'text'
}
console.log(str) // "11"

// 2. ES6 이전과 이후의 차이 예시
// - var
for (var i = 0; i < 3; i++) {}
console.log(i) // 3 외부에서 접근 가능(예기치 못한 동작을 초래할 수 있음)

if (Boolean) {
  var name = 'myName'
}
console.log(name) // "myName"

// - let & const (es6)
for (let l = 0; i < 3; i++) {}
console.log(l) // Error! l을 찾을 수 없음

if (Boolean) {
  let name2 = 'myName'
}
console.log(name2) // Error! name2를 찾을 수 없음
