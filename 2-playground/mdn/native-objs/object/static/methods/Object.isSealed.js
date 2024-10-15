/* Object.isSealed(obj) */

//  - 설명:
//   - 주어진 객체가 봉인 상태인지 확인함. 봉인된 객체는 속성을 추가하거나 삭제할 수 없지만 기존 속성의 값은 수정할 수 있음. 객체가 Object.seal()에 의해 봉인되었는지를 판단하는 데 유용함. ES5에 도입됨
//   - 객체의 봉인 상태를 확인할 수 있는 유용한 도구로, 객체의 속성 변경 가능성을 관리하는 데 도움을 줌

//  - 활용:
//   - 객체가 봉인됐는지 판별하는데 사용됨

//  - 주의 사항:
//   - 상태 변화: 객체의 봉인 상태는 Object.seal() 메서드를 호출하여 변경할 수 있으며, 이후에는 Object.isSealed()가 true를 반환함. 봉인된 객체는 속성을 추가하거나 삭제할 수 없음
//   - 비어 있는 객체: 빈 객체는 기본적으로 봉인되지 않았으므로, Object.isSealed({})는 false를 반환함
//   - 프로토타입 체인: Object.isSealed()는 특정 객체에 대해서만 봉인 상태를 확인함. 따라서 상속된 프로토타입이 봉인되어 있어도, 해당 객체의 봉인 여부에는 영향을 미치지 않음
//   - 기본 객체: 기본 객체(예: Object.prototype)와 같은 일부 객체는 항상 봉인 상태가 아님. 이러한 객체에 대해 Object.isSealed()를 호출하면 false를 반환함

//   - Object.seal()은 Object.freeze()와 달리 속성 추가 및 삭제를 막지만 기존 속성 값은 수정 가능하게 함(Object.freeze()는 속성 추가, 삭제 및 수정 모두를 막아 완전히 불변 상태로 만듦)

// 1. 사용 예 - 봉인되지 않은 객체
const obj = {}
console.log(Object.isSealed(obj)) // false

// 2. Object.seal() 사용
const sealedObj = Object.seal({ property1: 'value1' })
console.log(Object.isSealed(sealedObj)) // true(속성 추가 및 삭제를 막지만 기존 속성 값은 수정 가능함)

sealedObj.property1 = 'value2' // 수정 가능
sealedObj.property2 = 'value3' // 추가 불가
delete sealedObj.property1 // 삭제 불가
console.log(sealedObj) // {property1: 'value2'}
