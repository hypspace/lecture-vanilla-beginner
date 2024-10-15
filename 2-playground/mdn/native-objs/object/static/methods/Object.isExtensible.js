/* Object.isExtensible(obj) */

//  - 설명:
//   - 주어진 객체가 속성을 추가할 수 있는 상태인지 확인함. 즉 객체가 확장 가능인지 여부를 반환함. 이 메서드는 객체가 Object.freeze() 또는 Object.seal()에 의해 동결(고정)되었는지 확인하는 데 유용함. ES5에 도입됨
//   - 객체의 확장 가능성을 체크할 수 있는 유용한 방법으로 객체의 상태에 따라 속성을 추가할 수 있는지 판단하는 데 도움을 줌
//   - 객체가 확장 가능한지(객체에 새 속성을 추가할 수 있는지 여부)를 결정함

//  - 활용:
//   - 객체가 확장 가능한지 확인할 때 사용함

//  - 주의 사항:
//   - 비열거 속성: 객체가 비열거 속성을 가지고 있어도, 이 메서드는 객체가 확장 가능한지를 판단하는 데 영향을 미치지 않음. 비열거 속성이 있는 객체는 여전히 확장 가능할 수 있음
//   - 상태 변화: 객체의 확장 가능성은 Object.seal()이나 Object.freeze() 메서드에 의해 변경될 수 있음. 이러한 메서드를 호출한 후에는 Object.isExtensible()가 false를 반환함
//   - 기본 객체: 기본 객체(예: Object.prototype)와 같은 일부 객체는 항상 확장 불가능하므로, 이러한 객체에 대해 Object.isExtensible()를 호출하면 false를 반환함
//   - ES5 이상 지원: 이 메서드는 ECMAScript 5에서 도입되었으므로, 이전 버전의 JS 환경에서는 트랜스파일링 또는 폴리필 코드가 필요함
//   - 객체의 원형 체인: Object.isExtensible()는 특정 객체에 대해서만 확인하므로, 상속된 프로토타입 속성이나 상태에 대해서는 영향을 미치지 않음

// 1. 사용 예 - 확장 가능한 객체
const obj = {}
console.log(Object.isExtensible(obj)) // true(확장 가능. 속성 추가 가능)

obj.property1 = 'value1'
console.log(obj) // {property1: 'value1'}

// 2. Object.seal() 사용하고 나서의 확장 가능 여부 확인
const sealedObj = Object.seal({})
console.log(Object.isExtensible(sealedObj)) // false(확장 불가. 속성 추가 불가)

sealedObj.newProp = 'value'
console.log(sealedObj) // {}

// 3. Object.freeze() 사용하고 나서의 확장 가능 여부 확인
const frozenObj = Object.freeze({})
console.log(Object.isExtensible(frozenObj)) // false(확장 불가. 속성 추가 불가)

frozenObj.newProp = 'value'
