/* Object.prototype.propertyIsEnumerable(prop) */

//  - 설명:
//   - 객체의 특정 속성이 열거 가능한(enumerable) 속성인지 여부를 확인함. 객체에서 상속된 속성이 아닌 자신의 속성을 확인하는 데 사용됨. ECMAScript 3 (1999) 도입
//   - 어떤 속성을 순회하고 싶지 않을 때, propertyIsEnumerable를 사용하여 해당 속성이 열거 가능한지 확인할 수 있음. 이 경우, 특정 속성을 열거 불가능하게 설정하여 반복문에서 해당 속성을 무시할 수 있음
//   - propertyIsEnumerable 메서드는 ECMAScript 3(ES3)에서 처음 도입됨 즉, JS 초기 버전부터 제공되는 메서드. propertyIsEnumerable 자체는 ES3부터 사용 가능하지만, 해당 속성을 정의하고 조작하는 것은 ES5부터 가능함. 이는 속성을 열거 가능하게 설정하는 기능(예: enumerable 속성)은 ECMAScript 5(ES5)에서 추가된 Object.defineProperty 메서드를 통해 사용할 수 있게 되었기 때문. propertyIsEnumerable 메서드는 ES3에서 도입되었지만, 본격적으로 활용되기 시작한 것은 ES5에서 Object.defineProperty가 도입되면서부터

//  - 활용:
//   - 객체의 속성을 순회할 때, for...in 루프나 Object.keys()와 같은 방법을 사용하여 열거 가능한 속성만 선택적으로 다루고 싶을 때 유용
//   - 프로토타입에서 상속된 속성이 아닌, 객체 자체의 속성을 확인할 수 있음
//   - API 응답 필터링: 데이터 전송 시 필요 없는 정보를 숨길 때, 객체의 민감한 정보 보호: 예를 들어, 사용자의 비밀번호나 API 키 같은 민감한 데이터를 열거 불가능하게 설정하여 보안을 강화할 수 있음. 민감한 데이터가 객체에 포함되어 있어도, 사용자가 직접적으로 접근할 수 없는 형태로 설정해두면, 일반적으로 사용자 인터페이스(UI)에서는 이러한 데이터가 노출되지 않음. 하지만 몇 가지 포인트를 고려해야 함(예를 들어 열거 불가능한 속성, 보안의 한계, API 설계 등)

//  - 주의 사항:
//   - prop: 확인하고자 하는 속성의 이름(문자열 또는 심볼)
//   - propertyIsEnumerable는 객체의 속성이 enumerable 속성이 설정된 경우에만 true를 반환함. 일반적으로 객체 리터럴에서 직접 정의한 속성은 기본적으로 열거 가능하지만, Object.defineProperty()를 사용하여 속성을 정의할 때 enumerable 속성을 false로 설정할 수 있음
//   - 프로토타입 메서드는 다 false를 반환함. Object 생성자와 그 프로토타입에서 기본적으로 제공되는 메서드들이 의도적으로 열거 불가능하도록 설계되었기 때문

// 1. 사용 예 - 기본적으로 열거 가능한 속성 확인
const obj = {
  name: 'Wang',
  age: 30,
}

console.log(obj.propertyIsEnumerable('name')) // true
console.log(obj.propertyIsEnumerable('age')) // true
console.log(obj.propertyIsEnumerable('gender')) // false

// 열거 불가능한 속성 추가
Object.defineProperty(obj, 'hidden', {
  value: 'secret',
  enumerable: false, // 열거 불가능하도록 설정
})

console.log(obj.propertyIsEnumerable('hidden')) // false
console.log(obj.propertyIsEnumerable('toString')) // false (Object.prototype의 메서드)

// 2. 활용 예시

// - 속성 열거 제외
const obj2 = {
  a: 1,
  b: 2,
  c: 3,
}

Object.defineProperty(obj2, 'hidden', {
  value: 4,
  enumerable: false,
})

const enumerableProps = Object.keys(obj2).filter(key =>
  obj2.propertyIsEnumerable(key)
)
console.log(enumerableProps) // ['a', 'b', 'c']
