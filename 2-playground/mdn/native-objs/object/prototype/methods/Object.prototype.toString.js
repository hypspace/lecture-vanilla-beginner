/* Object.prototype.toString() */

//  - 설명:
//   - 객체를 문자열로 변환하여 그 객체의 데이터 타입을 나타내는 문자열을 반환. ECMAScript 1 (1997) 도입
//   - Object 클래스의 인스턴스에서는 '[object Object]' 형식으로 반환되며, 각 객체의 프로토타입에서 이 메소드를 오버라이드하여 특정 형식의 문자열을 제공할 수 있음

//  - 활용:
//   - 주로 객체의 타입을 확인하거나, 객체가 어떤 종류인지를 판별할 때 사용됨
//   - 특히 배열, 날짜 객체 등에서 그 타입을 명확하게 구분할 수 있음

//  - 주의 사항:
//   - toString() 메소드는 호출하는 객체에 따라 다르게 동작할 수 있으며, 객체의 원래 형태나 값을 반영하지 않음
//   - 사용자가 정의한 객체에서도 오버라이딩이 가능하므로, 원래의 toString() 메소드를 사용할 때는 주의가 필요함

// 1. 사용 예
const obj = {}
console.log(obj.toString()) // [object Object]

// 2. 사용자가 정의한 객체에서 toString() 메소드를 오버라이드하면, 원래의 Object.prototype.toString() 메소드와 다르게 동작할 수 있음
const obj2 = {
  name: 'Wang',
  age: 31,
  toString: function () {
    return `Name: ${this.name}, Age: ${this.age}`
  },
}
console.log(obj2.toString()) // Name: Wang, Age: 31 (오버라이딩된 toString() 호출)
console.log(Object.prototype.toString.call(obj2)) // [object Object] (원래의 toString() 메소드 호출)

const customArray = Object.create(Array.prototype)
customArray.toString = function () {
  return 'Custom Array'
}

console.log(customArray.toString()) // Custom Array (오버라이딩된 toString() 호출)
console.log(Object.prototype.toString.call(customArray)) // [object Object] (원래의 toString() 메소드 호출)

// 3. 활용 예시 - 객체의 타입을 체크할 때 유용. 예를 들어, 여러 종류의 데이터(문자열, 배열, 객체 등)를 처리하는 함수에서 입력값의 타입을 확인할 수 있음
function checkType(input) {
  const type = Object.prototype.toString.call(input)
  if (type === '[object Array]') {
    return '입력값은 배열입니다.'
  } else if (type === '[object Date]') {
    return '입력값은 날짜 객체입니다.'
  } else {
    return '입력값은 일반 객체입니다.'
  }
}

console.log(checkType([])) // 입력값은 배열입니다.
console.log(checkType(new Date())) // 입력값은 날짜 객체입니다.
console.log(checkType({})) // 입력값은 일반 객체입니다.
