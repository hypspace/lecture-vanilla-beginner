/* Spread Operator */

// - 설명:
//  - ES6에서 Spread Operator가 추가됨. 이는 펼침연산자로써 참조형 타입 내부의 데이터를 펼치는 기능. 그래서 원시 타입은 펼침이 불가함.
//  - 특징이라면 배열에서는 ...arr를 사용해 배열의 요소를 직접 나열할 수 있지만, 객체에서는 ...obj하는 행위로써 이는 단독으로 사용될 수 없고, 항상 다른 객체 안에서 사용되어야 함. 만약 단독으로 쓴다면 ...iterable[Symbol.iterator] to be a function이라는 타입 에러가 호출될 것
//  - Spread Operator라는 구문적 설탕을 활용해서 여러가지 활용 방안이 많음. 대표적으로 병합, 복사, 분산이 있음. 데이터를 합치거나, 개별 매개변수로 전달하거나, 얕은 복사하는 등의 행위를 할 수 있음

// 1. 기본 사용 예시: 복사
const arr = [1, 2, 3]
const obj = { a: 1, b: 2 }

console.log({ ...arr }) // {"0": 1, "1": 2, "2": 3}
console.log({ ...obj }) // {a: 1, b: 2}
console.log(...arr) // 1 2 3
// console.log(...obj) // Error! 스프레드 구문에는 ...iterable[Symbol.iterator]가 함수여야 함

// 2. 활용 방안 예시

// - 병합
const array = [1, 2]
const myArray = [1, ...arr]
console.log(myArray) // [1, 1, 2, 3]

// - 개별 매개변수로 값을 전달할 수 있음: sum 이라는 함수가 있다면 인수가 많아질수록 입력할 코드가 많아짐. 이러한 부분을 해결하기 위해 apply 메서드로 해결할 수 있음. 컨텍스트를 바꿔주면서 sum 함수를 실행하는 것(call과 같음). 그러나 간단히 펼침연산자로 해결할 수 있음
function sum(a, b, c) {
  return a + b + c
}

console.log(sum.apply(null, arr)) // 6 apply를 통해서 배열을 펼쳐줌. 첫번째 인자는 컨텍스트를 의미함. Spread Operator 이전에는 이러한 방식으로 결과값을 얻을 수 있었음
console.log(sum(...arr)) // 6
