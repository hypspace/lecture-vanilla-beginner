/* WeakMap Encapsulation */

// - 설명:
//  - 프로토타입 기반의 클래스를 만들면 인스턴스가 생성될 수 있고 생성된 인스턴스가 클래스 내부의 변수에 접근할 수 있음. person.name 혹은 person.age 이런식으로 접근 가능한데 만약 이들을 숨기고 싶을 때(접근을 막을 때) 효율적으로 막기 위해서 WeakMap을 씀
//  - 전역 공간에 변수를 보관하고 빌려다 쓸 수 있지만 WeakMap은 안전한 다른 패턴을 제공함. 또한 객체가 필요없어지면 가비지 컬렉션 대상이 되어 메모리를 효율적으로 관리함. 이는 곧 WeakMap이 프라이빗한 변수를 만드는데 사용된다고 볼 수 있음을 의미함. 한편 ES6에서는 Class 문법을 제공하며 private 필드를 정의하는 구문이 가능하기 때문에 상대적으로 자주 쓰이지는 않지만 이러한 패턴도 있다는 것
//  - WeakMap은 클래스 내부에 있는 지역 변수를 프라이빗하게 숨길 수 있음. 장점은 변수를 캡슐화하고 해당 변수의 참조가 끊어지면 가비지 컬렉션 대상이 되어 메모리에 자동 사라짐. 단점은 전역 공간에서 WeakMap을 보관한다는 것

// 1. 우리 이슈에 대한 예시
function Area(width, height) {
  this.width = width
  this.height = height
}
const area = new Area(10, 20)
console.log(area.width, area.height) // 20 width & height는 프라이빗 변수로 만들고 싶을 수 있음

// 이전 방식: 전역 공간에 변수를 보관하고 빌려쓰는 방식
const obj = {}

function Area2(width, height) {
  obj.width = width
  obj.height = height
}
const area2 = new Area2(10, 20)
console.log(area2.width, area2.height) // undefined undefined

// ES6 WeakMap 활용
let weakmap = new WeakMap()

function Area3(width, height) {
  weakmap.set(this, { width, height }) // 현재 객체에 2가지 값을(현재: width, height) 숨김
}

Area3.prototype.getArea3 = function () {
  const { width, height } = weakmap.get(this) // {width: 20, height: 30}
  return width * height
}
let area3 = new Area3(20, 30)
console.log(area3.width, area3.height) // undefined undefined

// WeakMap과 메모리 관리
area3 = null // 참조 끊음(가비지 컬렉션 수집 대상이 됨)
console.log(weakmap.has(area3)) // false
