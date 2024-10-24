/* Array.prototype.concat(...items) */

//  - 설명:
//   - 배열을 합치는 데 사용되는 메서드. 기존 배열을 변경하지 않고, 새로운 배열을 반환
//   - 여러 개의 배열이나 값들을 연결할 수 있음.
//   - 배열을 결합할 때 유용하게 사용되는 메서드. 배열을 합치는 데 있어 간편하고 직관적인 방법을 제공함

//  - 활용:
//   - 여러 배열을 하나의 배열로 합치고 싶을 때
//   - 배열에 값이나 다른 배열을 추가하고 싶을 때

//  - 주의 사항:
//   - 중첩 배열을 연결할 때는 내부 배열이 그대로 포함됨

// 1. 사용 예
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const result = arr1.concat(arr2)

console.log(result) // [1, 2, 3, 4, 5, 6]
console.log(arr1) // [1, 2, 3] (원본 배열은 변경되지 않음)

// 2. 중첩 배열 예시
const nestedArray = [1, 2, [3, 4]]
const result2 = nestedArray.concat([5, 6])

console.log(result2) // [1, 2, [3, 4], 5, 6]

// 2. 활용 예시

// - 중복 데이터 제거 및 결합 - 여러 배열을 결합한 후 중복 데이터를 제거할 때 사용됨
const myArr = [1, 2, 3]
const myArr2 = [1, 2, 4]

const combineArr = myArr.concat(myArr2)
console.log(combineArr) // [1, 2, 3, 1, 2, 4]

const uniqueLikeArrObj = new Set(combineArr)
console.log(uniqueLikeArrObj) // Set(4) { 1, 2, 3, 4 }

const resultArr = Array.from(uniqueLikeArrObj)
console.log(resultArr) // [ 1, 2, 3, 4 ]

// - UI 요소 배열 생성 - React와 같은 라이브러리에서 여러 컴포넌트를 배열로 결합하여 렌더링할 때 사용됨
const button1 = '<button>save</button>'
const button2 = '<button>cancel</button>'

const buttons = [].concat(button1, button2)
console.log(buttons) //['<button>save</button>', '<button>cancel</button>']
