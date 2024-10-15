/* Number.prototype.valueOf() */

//  - 설명:
//   - Number 객체의 원시 값을 반환
//   - 이 메서드는 주로 객체가 숫자형으로 사용될 때, 해당 객체가 감싸고 있는 원시 숫자를 가져오기 위해 사용

//  - 활용:
//   - 숫자형 객체의 숫자 값을 필요로 할 때 유용

//  - 주의 사항:
//   - Number() 함수 호출: new Number()와 같은 인스턴스 생성이 아니라 생성자 함수로 부터 호출되어 결과를 반환한다면 반환값은 원시 값의 숫자형 자체. 그래서 valueOf()를 호출할 필요가 없음.
//   - new Number()로 생성되는 인스턴스는 숫자형 객체이니까 valueOf() 메서드를 쓸 수 있는 것

// 1. 기본 사용
const numObj = new Number(11)
console.log(toString.call(numObj), typeof numObj) // '[object Number]' 'object'

const numObjToValueOf = numObj.valueOf()
console.log(numObjToValueOf) // 11
console.log(toString.call(numObjToValueOf), typeof numObjToValueOf) // '[object Number]' 'number'
