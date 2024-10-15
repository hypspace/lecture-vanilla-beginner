/* Object.freeze(obj) */

//  - 설명:
//   - 주어진 객체를 동결 상태로 만들어 객체의 속성을 추가, 삭제, 수정할 수 없게 만듦. 이는 불변 객체를 만들고 기존의 속성 값은 변경할 수 없게 함. ECMAScript 2009 (ES5)에서 도입됨

//  - 활용:
//   - 객체의 상태를 보호하고, 의도치 않은 변경을 방지하기 위해 사용됨. 주로 상수 설정이나 특정 객체의 구조를 고정하고 싶을 때 유용

//  - 주의 사항:
//   - 얕은 동결만 적용되며 객체의 중첩 구조에서는 동결되지 않음. 중첩 객체도 동결하고 싶다면 재귀적으로 Object.freeze() 메서드를 호출해야 함(Deep Freeze 패턴). 또는 immutable.js를 쓰거나, lodash를 쓰거나, Immer를 쓰거나, seamless-immutable를 쓰거나, Proxy를 쓰는 것으로 가능함
//   - Object.seal()을 사용해 봉인된 객체는 존재하는 속성을 변경할 수 있음. Object.freeze()로 동결된 객체에서는 존재하는 속성이 불변임
//   - Object.freeze()는 배열 동결도 동일하게 사용 가능함

//   - Object.freeze()와 Object.seal()의 차이점:
//      - Object.freeze()는 속성 추가, 삭제 및 수정 모두를 막아 완전히 불변 상태로 만듦
//      - Object.seal()은 속성 추가 및 삭제를 막지만 기존 속성 값은 수정 가능하게 함

// 1. 사용 예
const obj = {
  name: 'wang',
  age: 31,
}

Object.freeze(obj)

obj.age = 41 // 수정되지 않음. 무시됨
obj.gender = 'male' // 추가되지 않음

console.log(obj) // {name: 'wang', age: 31}

// 2. 중첩 객체의 동결1
const nestedObj = {
  user: {
    name: 'wang',
    age: 31,
  },
}

Object.freeze(nestedObj)
Object.freeze(nestedObj.user) // 중첩된 객체도 동결

nestedObj.user.age = 30 // 수정되지 않음. 무시됨
console.log(nestedObj.user.age) // 31

// 3. 중첩 객체 동결2 - 재귀적 함수 호출(Deep Freeze 패턴)
function deepFreeze(obj) {
  Object.freeze(obj)
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] && typeof obj[prop] === 'object') {
      deepFreeze(obj[prop])
    }
  })
}

const complexObj = {
  user: {
    name: 'shane',
    age: 25,
    info: {
      a: 1,
      b: 2,
    },
  },
}

deepFreeze(complexObj)
complexObj.user.info.a = 10
complexObj.user.info.b = 20
console.log(complexObj.user.info) // {a: 1, b: 2}

// 4. 배열 동결
const arr = [1, 2, 3]
Object.freeze(arr)

arr[0] = null
arr[1] = null
arr[2] = null
console.log(arr) //[1, 2, 3]

// 5. 중첩 배열 동결 - 재귀적 함수 호출
function deepFreeze2(arr) {
  Object.freeze(arr)
  arr.forEach(item => {
    if (Array.isArray(item)) {
      deepFreeze2(item) // 중첩 배열 동결
    } else if (item && typeof item === 'object') {
      Object.freeze(item) // 객체 동결
    }
  })
}

const nestedArr = [1, [2, 3], { key: 'value' }]
deepFreeze2(nestedArr)

nestedArr[1][0] = 10 // 무시됨
nestedArr[2].key = 'newValue' // 무시됨

console.log(nestedArr) // [1, [2, 3], { key: 'value' }]

// 6. 유사 배열 동결(NodeList와 같은 유사 배열 객체)
// function deepFreeze3(obj) {
//   Object.freeze(obj)
//   Object.getOwnPropertyNames(obj).forEach(prop => {
//     if (obj[prop] && typeof obj[prop] === 'object') {
//       deepFreeze3(obj[prop])
//     }
//   })
// }

// const nodeList = document.querySelectorAll('div')

// deepFreeze3(nodeList)

// nodeList.forEach(node => {
//   deepFreeze3(node)
// })

// nodeList[0] = null
// console.log(nodeList.length) // 원래 길이 유지
