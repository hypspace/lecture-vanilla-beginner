/* Enhanced Object Literals */

// - 설명:
//  - Enhanced Object Literals(향상된 객체 리터럴)은 객체의 속성을 보다 쉽고 간결하게 정의하기 위한 방안 추가된 문법

// 1. 사용 예시

// - 속성 이름 축약 가능
const value = 1
const value2 = 2

const obj = {
  value, // value: value
  value2, // value2: value2
}

// - 메서드 축약 가능
const obj2 = {
  foo() {}, // foo: function () {},
}

// - 계산된 속성명 정의 가능: 대괄호([]) 표기법을 사용하여 동적으로 속성 이름을 생성할 수 있음
const property = 'name'

const obj3 = {
  [property]: 'wang',
}
console.log(obj3) // {name: "wang"}

// - 상속된 메서드 정의 가능: super 키워드를 사용하여 상속받은 메서드에 접근하여 부모 메서드를 호출할 수 있음
const parent = {
  parentMethod() {
    return 'parentMethod() 호출됨'
  },
}

const child = {
  __proto__: parent,
  childMethod() {
    return super.parentMethod()
  },
}
console.log(child.childMethod()) // "parentMethod() 호출됨"
