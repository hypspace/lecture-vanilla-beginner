/* Object.seal(obj) */

//  - 설명:
//   - 주어진 객체를 봉인하여 해당 객체에 속성을 추가하거나 삭제할 수 없도록 함. 그러나 기존 속성의 값을 수정하는 것은 가능함. 봉인된 객체는 속성의 메타데이터(예: configurable, writable)도 변경할 수 없음. ES5에 도입됨

//  - 활용:
//   - 주어진 객체를 봉인하여 해당 객체에 속성을 추가하거나 삭제할 수 없도록 하는데 기존 속성의 값은 수정하고 싶을 때 사용됨

// 1. 사용 예
const sealedObj = Object.seal({ property1: 'value1' })

sealedObj.property1 = 'value2' // 기존 속성 수정 가능
sealedObj.property2 = 'value3' // 새 속성 추가 가능
delete sealedObj.property1 // 기존 속성 삭제 불가
console.log(sealedObj) // { property1: 'value2' }

// ... Object.freeze.js 참고
