// 1. 실습

// - 배열 메서드 응용하기 - indexOf와 splice, while loop를 사용하여 특정 요소 3 제거하기
const arr = [1, 2, 3, 4, 5, 3]

while (arr.indexOf(3) !== -1) {
  arr.splice(arr.indexOf(3), 1)
}
console.log(arr) // [1, 2, 4, 5]
