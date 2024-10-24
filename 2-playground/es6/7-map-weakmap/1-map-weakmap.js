/* Map & WeakMap */

// - 설명:
//  - Map & WeakMap도 Set & WeakSet과 마찬가지로 중복없이 값을 추가할 수 있는 자료 구조. Set & WeakSet은 저장할 수 있는 데이터 형에 대해 차이가 있다면 Map과 WeakMap은 동작 방식과 사용 용도에 차이가 있음
//  - Map은 key, value의 딕셔너리 구조임. Map은 배열 형식의 키-값 쌍만을 받아들이기 때문에, 객체를 전달하면 오류가 발생함. Map에서는 각 키가 고유해야 하므로, 같은 키로 여러 번 값을 추가하면 마지막에 추가한 값으로 덮어씌워짐

// - 용도:
//  - Array => Set & WeakSet 적합
//  - Object => Map & WeakMap 적합

// 1. Map 사용 예시: Map은 배열 형식의 키-값 쌍만 전달 가능함
const map = new Map()
map.set('key1', 'value1')
map.set('key1', 'value2')
console.log(map) // Map(1) {"key1" => "value2"}

// 2. WeakMap 사용 예시: WeakMap의 키는 객체만 가능함
const obj = {}
const weakMap = new WeakMap()

weakMap.set(obj, 'value1')
weakMap.set(obj, 'value2') // "obj"의 값이 "value2"로 덮어씌워짐

console.log(weakMap.get(obj)) // "value2"

// 3. WeakMap 활용 예시: 함수가 얼마나 실행되었는지 확인하기
const wm = new WeakMap()
const myFnc = function () {}
wm.set(myFnc, 0)

let count = 0
for (let i = 0; i < 10; i++) {
  count = wm.get(myFnc)
  count++
  wm.set(myFnc, count)
}
console.log(wm.get(myFnc)) // 10 10번 호출됨
