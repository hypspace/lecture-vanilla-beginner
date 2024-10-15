/* Object.isFrozen(obj) */

//  - 설명:
//   - 주어진 객체가 동결 상태인지 확인함. 동결된 객체는 속성을 추가하거나 삭제할 수 없으며 기존 속성을 수정할 수도 없음. 이 메서드는 객체가 Object.freeze()에 의해 동결되었는지 판단하는 데 유용함. ES5에 도입됨
//   - 객체의 동결 상태를 확인하는 기능. 객체가 동결됐는지 판별함

//  - 활용:
//   - 객체의 동결 상태를 확인하는데 유용함

//  - 주의 사항:
//   - 비어 있는 객체: 빈 객체는 기본적으로 동결되지 않았으므로, Object.isFrozen({})는 false를 반환
//   - 상태 변화: 객체가 동결된 상태는 Object.freeze() 메서드를 호출하여 변경할 수 있으며, 이후에는 Object.isFrozen()가 true를 반환. 동결된 객체는 속성을 추가하거나 삭제하거나 수정할 수 없음
//   - 프로토타입 체인: Object.isFrozen()는 특정 객체에 대해서만 동결 상태를 확인함. 따라서 상속된 프로토타입이 동결되어 있어도, 해당 객체의 동결 여부에는 영향을 미치지 않음
//   - 기본 객체: 기본 객체(예: Object.prototype)와 같은 일부 객체는 항상 동결 상태가 아님. 이러한 객체에 대해 Object.isFrozen()를 호출하면 false를 반환함

// 1. 사용 예 - 동결되지 않은 객체
const obj = {}
console.log(Object.isFrozen(obj)) // false

// 2. Object.freeze() 사용 이후 동결 확인
const frozenObj = Object.freeze({})
console.log(Object.isFrozen(frozenObj)) // true

// 3. 동결된 객체의 속성 수정
const anotherFrozenObj = Object.freeze({ property1: 'value1' })
anotherFrozenObj.property1 = 'value2' // 속성 수정 불가
console.log(anotherFrozenObj) // {property1: 'value1'}
