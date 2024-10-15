/* Object.hasOwn(obj, property) */

//  - 설명:
//   - 주어진 객체가 특정 속성을 직접 소유하고 있는지를 확인하는 정적 메서드. 속성이 객체의 프로토타입 체인에서 상속된 것이 아닌 경우 true를 반환함. ECMAScript 2022 (ES13)에서 도입됨

//  - 활용:
//   - 객체의 특정 속성이 직접 정의되어 있는지를 체크할 때 유용. 기존의 hasOwnProperty 메서드와 유사하지만 더 명확히 사용될 수 있음
//   - Object.prototype.hasOwnProperty()와 Object.hasOwn() 모두 같은 방식으로 동작하지만, Object.hasOwn()은 더 현대적인 문법으로, 코드 가독성을 높여주는 장점이 있음

//  - 주의 사항:
//   - ECMAScript 2022 (ES13)에서 도입되었기 때문에 일부 브라우저에서는 지원이 안되거나 경우에 따라 폴리필 코드가 필요할 수 있음
//   - 기존의 hasOwnProperty와 같은 기능을 수행하면서도 사용하기 쉽고 직관적인 방식으로 제공되는 것이 Object.hasOwn()의 도입 배경. 작은 변화가 코드의 가독성을 크게 개선할 수 있는데 특히 새로운 기능이나 메서드가 더 직관적으로 사용될 수 있다면, 개발자 입장에서는 반갑기 마련일 수 있으며 이런 변화들이 언어를 발전시키는 중요한 요소이기도 할 것

// 1. 사용 예
const obj = {
  property1: 'value1',
}

console.log(Object.hasOwn(obj, 'property1')) // true
console.log(Object.hasOwn(obj, 'property2')) // false

// 2. 상속된 속성 확인
const parent = {
  inheritedProperty: 'this is inherited',
}

const child = Object.create(parent)
child.ownProperty = 'this is own'

console.log(Object.hasOwn(child, 'ownProperty')) // true
console.log(Object.hasOwn(child, 'inheritedProperty')) // false
