/* WeakSet */

// - 설명:
//  - Set과 비슷하게 중복없는 값을 추가할 수 있는 자료 구조. 그러나 참조를 가지고 있는 객체(참조를 가지고 있는 타입이라고 할 수 있으며 JS에서 이는 객체, 배열, 함수가 곧 객체에 해당함)만 저장 가능함. 이는 WeakSet에서는 객체의 참조만 저장함
//  - WeakSet의 특징은 new WeakSet(arr)로 출력한 결과인 내부 데이터를 직접적으로 보여주지 않는([1, 2, 3] 이런 식으로 보여주지는 않는 다는 것) 것에 있음. 이는 메모리 관리와 성능에 연관이 있는데 메모리 관리, 보안과 캡슐화, 특정 목적(객체의 존재 여부를 추적하는 것에 맞춰서 설계되었고, 이러한 목적에 맞게 동작하기 위해서는 내부 상태를 노출하지 않는 것이 더 적합하기 때문)에 의미가 있기 때문에 객체의 참조만 저장하고 직접 접근할 수 있는 방법이 없음
//  - WeakSet 오직 객체만 저장할 수 있음. 만약 객체가 null이 되면 해당 데이터가 가비지 컬렉션 대상이 되어 자동으로 그 정보가 없어짐. WeakSet에서 참조를 계속 모니터링 하는 것. 메모리를 효율적으로 관리하고자 하기 위함

// - WeakSet의 특징에 대한 특징 3가지:
//  - 메모리 관리: WeakSet에 저장된 객체는 가비지 컬렉션의 대상이 됨. WeakSet에 객체가 더 이상 참조되지 않으면, 해당 객체는 메모리에서 자동으로 제거됨. 만약 내부 상태를 노출하게 되면, 어떤 객체가 여전히 참조되고 있는지를 명확하게 알 수 없게 되어, 가비지 컬렉션의 효율성을 떨어뜨릴 수 있음에 이러한 방식으로 구현된 것으로 보임
//  - 보안과 캡슐화: WeakSet은 객체의 참조만 저장하므로, 그 내용을 노출하지 않음으로써 객체의 은닉성을 높임. 이는 특정 객체에 대한 직접적인 접근을 막고, 더 안전한 프로그래밍 패턴을 지원함
//  - 특정 목적: WeakSet은 주로 메모리 효율성과 성능을 고려하여 특정 목적(객체의 존재 여부를 추적하는 것)에 맞춰 설계되었음. 이러한 목적에 맞게 동작하기 위해서는 내부 상태를 노출하지 않는 것이 더 적합함

// 1. 사용 예시
let arr = [1, 2, 3]
const weakSet = new WeakSet()
weakSet.add(arr)
console.log(weakSet) // WeakSet {Array(3)}
console.log(weakSet.has(arr)) // true arr라는 참조가 있음을 의미함

// 2. WeakSet의 메모리 관리 방법
arr = null
console.log(weakSet.has(arr)) // false 참조가 끊어진 데이터는 WeakSet에서 가비지 컬렉션 대상이 되어 자동으로 그 정보가 없어짐
