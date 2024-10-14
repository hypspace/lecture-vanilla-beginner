/* Array.prototype.reduceRight(callback(currentValue, index?, arr?), initialValue?) */

//  - 설명:
//   - 배열의 오른쪽에서 왼쪽으로 누적할 때 매우 유용

// 1. 사용 예
const numbers = [1, 2, 3, 4]

const sum = numbers.reduceRight((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)
console.log(sum) // 10

// 2. 활용 예시

// - 문자열 결합
const words = ['world', ' ', 'Hello']
const sentence = words.reduceRight((acc, word) => acc + word)
console.log(sentence) // Hello world

// - 중첩 배열 평탄화
const nestedArray = [[1, 2], [3, 4], [5]]
const flatArray = nestedArray.reduceRight((acc, val) => acc.concat(val), [])
console.log(flatArray) // [5, 3, 4, 1, 2]

// ... Array.prototype.reduce.js 참고
