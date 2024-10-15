/* Object.is(value1, value2) */

//  - 설명:
//   - 두 값이 동일한지 비교하는 데 사용됨. 이 메서드는 엄격한 비교를 수행하며, ===와 같은 엄격한 동등 비교 연산자와 유사하지만 몇 가지 중요한 차이점이 있음(아래 특징에서). ES2022(ES13)에 도입됨
//   - 값의 동등성을 비교하는 데 유용한 메서드. 특히 특수한 경우(NaN, +0, -0)를 처리할 때 === 보다 강력함. 이를 통해 더 정확한 비교를 수행할 수 있음
//   - 두 값이 같은 값인지 결정함

//  - 활용:
//   - 두 값이 같은지 확인할 때 특히 NaN이나 -0과 +0을 비교할 때 유용함

//  - 주의 사항:
//   - NaN 처리: Object.is(NaN, NaN)은 true를 반환하지만, ===는 false. 이 점을 알고 사용해야 함
//   - +0과 -0의 차이: Object.is(+0, -0)은 false를 반환함. 반면, ===는 true를 반환하므로, 두 값을 비교할 때 유의해야 함
//   - 객체 비교: 객체를 비교할 때, 두 객체가 같은 객체를 참조하는 경우에만 true를 반환함. 두 객체의 속성이 같더라도 서로 다른 객체라면 false가 됨
//   - ES2022 이상 지원: Object.is()는 ECMAScript 2022에서 도입된 기능이므로, 이전 버전의 JS 환경에서는 사용할 수 없음. 이 점을 고려해야 함
//   - 일관된 사용: Object.is()와 ===의 동작 방식이 다르기 때문에, 코드의 의도를 명확하게 하기 위해 어떤 비교 방법을 사용할지 일관되게 정하는 것이 좋음

//   - 특징:
//     - NaN 비교: Object.is(NaN, NaN)은 true를 반환함. 반면 NaN === NaN은 false
//     - +0과 -0 비교: Object.is(-0, +0)은 false를 반환합니다. -0 === +0은 true

// 1. 사용 예
console.log(Object.is(5, 5)) // true
console.log(Object.is('1', 1)) // false
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(-0, +0)) // false

const obj = {}

const obj2 = Object.assign(obj)
console.log(Object.is(obj, obj2)) // true (같은 객체를 참조)

const obj3 = { ...obj }
console.log(Object.is(obj3, obj)) // false

// 2. 객체 비교
const myObj = { key: 'value' }
const myObj2 = { key: 'value' }
console.log(Object.is(myObj, myObj2)) // false

// 3. 복잡한 비교

const a = { name: 'wang' }
const b = a
console.log(b) // {name: 'wang}
console.log(Object.is(b, a)) // true (같은 객체를 참조)
