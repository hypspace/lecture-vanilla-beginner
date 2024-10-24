/* Destructuring */

// - 설명:
//  - Destructuring(구조 분해 할당)은 객체 또는 배열의 속성이나 요소를 변수에 할당하여 사용자가 쉽게 접근하기 위해 추가된 문법

// 1. 사용 예시

// - 배열의 구조 분해 할당과 기본값 지정
const arr = [1, 2, 3]

const [a, b, c] = arr
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3

const arr2 = [1]
const [x, y = 2] = arr2 // y 변수에 기본값 지정 가능
console.log(x) // 1
console.log(y) // 2

const arr3 = [1, 2]
const [, z] = arr3 // 공백 처리 가능
console.log(z) //2

// - 객체의 구조 분해 할당과 속성 이름 변경
const obj = { name: 'wang', age: 31 }
const { name, age } = obj
console.log(name) // "wang"
console.log(age) // 31

const obj2 = { name: 'long', age: 21 }
const { name: myName, age: myAge } = obj2 // 속성 이름 변경 가능
console.log(myName) // "long"
console.log(myAge) // 21

// - 중첩 데이터에 대한 구조 분해 할당
const data = {
  id: 1,
  user: {
    userName: 'shane',
    userAge: 32,
  },
}
const {
  user: { userName, userAge },
} = data
console.log(userName) // "shane"
console.log(userAge) // 32
