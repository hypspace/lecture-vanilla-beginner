// 1. 실습

// - 객체의 비교
console.log({} === {}) // false JS는 값이 아닌 참조로 개체를 비교하므로 이 조건은 항상 false를 반환함
console.log(Object.is({}, {})) // false

const obj = {}
console.log(Object.is(obj, obj)) // true
