/* Set */

// - 설명:
//  - 기존에 배열이라는 것은 중복을 허용하며 값을 추가할 수 있음. 이에 중복없는 유니크한 유일한 값을 배열에 저장하기 위해서는 조건식이 필요한데 그것없이 간편하게 사용하기 위해서 Set이라는 자료 구조 자체가 추가됨
//  - ES6 이전에는 다양한 패턴으로 객체 또는 배열에 존재하는 중복을 제거했음. 배열에서는 indexOf를 활용하여 데이터를 필터링하거나 객체에서는 Object.keys 또는 for 루프를 통해서 중복 제거했음. 특히 과거에는 사용자가 프로토타입 기반의 클래스를 만들어서 썼었는데 현재의 Set과 같이 has, add, delete 이런식으로 만들어서 썼었음. 그리고 이러한 기능을 제공하는 라이브러리도 있었음. 이에 ES6에서는 아예 표준화를 시킨 것. Set이라는 자료 구조를 추가하여 표준화된 문법으로 사용하도록 한 것으로 보임
//  - Set은 어떤 타입의 값도 저장할 수 있음. 값을 추가하는 것 뿐만 아니라 이미 존재하는지 체크할 수도 있음. new Set() 인스턴스에서 제공하는 여러 메서드들을 활용하여 배열을 관리할 수 있음

// 1. 중복을 허용하는 배열 예시
const arr = []
arr.push(1)
arr.push(1)
arr.push(1)
console.log(arr) // [1, 1, 1]

// 2. 중복된 값이 있는 배열에 대한 중복 제거 방법

// - indexOf & filter 활용
const arr2 = [1, 1, 1, 1, 1]
const uniqueArr = arr2.filter((val, idx, self) => self.indexOf(val) === idx) // 중복을 제거한 새 배열 생성
console.log(uniqueArr) // [1]

// - Set 활용
const set = new Set(arr2)
console.log(set) // Set(1) {1} 중복 제거됨
const myArr = Array.from(set) // 실제 배열로 변환
console.log(myArr) // [1]
