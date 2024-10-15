/* Object.assign(target, ...sources) */

//  - 설명:
//   - 하나 이상의 출처 객체로부터 열거 가능한 속성을 대상으로 하는 객체로 복사. 이 메서드는 주로 객체의 속성을 복사하거나 병합하는 데 사용됨. ECMAScript 2015 (ES6)에서 됨

//  - 활용:
//   - 객체의 속성을 복사하거나 여러 객체를 병합하여 새로운 객체를 생성할 때 유용

//  - 주의 사항:
//   - 얕은 복사(shallow copy)를 수행하므로, 중첩 객체의 경우 참조만 복사됨. 따라서 중첩 객체의 속성을 수정하면 원본 객체도 변경됨
//   - Spread Operator도 같은 기능을 수행하고 같이 ES6에 나왔지만 이 기능은 간결한 문법을 제공하고, assign은 객체를 다루는 의도를 명확히 드러내기 위한 직관적인 방식으로 출시된 것처럼 보임

// 1. 사용 예
const obj = { a: 1 }
const obj2 = { b: 2 }
const obj3 = { c: 3 }
const result = Object.assign(obj, obj2)
const result2 = Object.assign(obj, obj2, obj3)
console.log(result) // {a: 1, b: 2}
console.log(result2) // {a: 1, b: 2, c: 3}

// 2. 활용 예시
const defaults = { a: 1, b: 2 }
const options = { b: 3, d: 4 }
const config = Object.assign({}, defaults, options)
console.log(config) // {a: 1, b: 3, d: 4} (b의 값이 2에서 3으로 덮어씌워져 수정됨)
