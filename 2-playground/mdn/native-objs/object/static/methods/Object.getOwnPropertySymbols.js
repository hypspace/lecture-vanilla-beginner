/* Object.getOwnPropertySymbols(obj) */

//  - 설명:
//   - 주어진 객체의 모든 직접적인 심볼 속성을 배열로 반환. 심볼은 고유하고 변경 불가능한 데이터 유형으로 주로 객체의 속성 키로 사용됨. ES6(ES2015)에 도입됨
//   - 객체의 모든 직접적인 심볼 속성을 배열로 반환하며 심볼 속성을 관리하고 조회하는데 유용한 메서드. 이를 통해 객체의 숨겨진 속성을 다루는 데 도움을 줌
//   - 객체의 모든 직접적인 심볼 속성을 조회할 수 있는 기능을 제공함. 이를 통해 심볼을 사용한 속성을 더 쉽게 다룰 수 있게 됨

//  - 활용:
//   - 심볼 속성을 다룰 때 유용함. 예를 들어 객체에 숨겨진 속성을 조회하거나 특정 심볼 속성만을 다룰 때 사용할 수 있음

//  - 주의 사항:
//   - 상속된 심볼 속성은 포함(반환)하지 않음

// 1. 사용 예 - 심볼 속성만 조회됨
const sym1 = Symbol('symbol1')
const sym2 = Symbol('symbol2')

console.log(sym1) // Symbol(symbol1)
console.log(sym2) // Symbol(symbol2)

const obj = {
  [sym1]: 'value1',
  [sym2]: 'value2',
  regularProperty: 'this is a regular property',
}

console.log(obj) // {regularProperty: 'this is a regular property', [Symbol(symbol1)]: 'value1', [Symbol(symbol2)]: 'value2'}

const symbols = Object.getOwnPropertySymbols(obj)
console.log(symbols) // [Symbol(symbol1), Symbol(symbol2)] (심볼 속성만 조회됨)

// 2. 상속된 심볼 속성은 조회되지 않음
const parent = {
  [Symbol('inheritedProperty')]: 'this is inherited',
}

const child = Object.create(parent)
child[Symbol('ownProperty')] = 'this is own'

const symbolProps = Object.getOwnPropertySymbols(child) // [Symbol('inheritedProperty')] 속성은(상속된 심볼 속성) 포함(반환)되지 않음
console.log(symbolProps) // [Symbol(ownProperty)]
