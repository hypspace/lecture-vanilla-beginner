// 1. 실습

// - optional chaining operator(ECMAScript 2020)
const obj = {
  a: {
    b: 2,
  },
}
console.log(obj.a.b.c?.d) // undefined 에러를 띄우지 않고 계속 체이닝 가능. 잠재적인 null 또는 undefined 객체에서 속성 접근 시 런타임 오류를 방지함
// console.log(obj.a.b.c.d) // Error!
