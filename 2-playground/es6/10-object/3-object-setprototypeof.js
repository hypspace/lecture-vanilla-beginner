/* Object.setPrototypeOf() */

// - 설명:
//  - Object.setPrototypeOf는 객체의 프로토타입을 설정하거나 변경하는 메서드. Object.assign과 유사한데 Object.assign은 속성값을 뽑아서 다른 것으로 만들 수 있는 패턴인 반면, setPrototypeOf는 말 그대로 프로토타입 객체에만 추가하는 것이라 굉장히 단순하고 명확한 기능을 유지함
//  - Object.setPrototypeOf를 활용해서 객체의 프로토타입으로 설정하거나 변경하여 상속 계층의 객체를 만들 수 있음. 모듈 덩어리를 만들고 싶을 때 사용하면 됨
//  - Object.create를 쓰냐 혹은 Object.setPrototypeOf을 쓰냐는 자유이지 결국 똑같음. 결과적으로는 Object.create를 쓰던 Object.assign을 쓰던 Object.setPrototypeOf을 쓰던 모듈이나 클래스를 만들 때는 해당 메서드들은 JS에서 매우 표준적인 방법 중의 하나이고 순수 JS를 이용한 객체 생성 패턴이라고 할 수 있음

//  - JS에서는 여럿 객체 모델에 대해 프로토타입으로 체인을 맺을 수 있음. Object.setPrototypeOf도 그러라고 만든 것으로 보임

// 1. Object.setPrototypeOf 사용 예시
const View = {
  init() {},
  on() {},
  emit() {},
  hide() {},
  show() {},
}
const FormView = {
  setup() {},
  bindEvents() {},
}

Object.setPrototypeOf(FormView, View) // FormView 객체에 프로토타입으로 View 지정
console.log(FormView) // { setup: [Function: setup], bindEvents: [Function: bindEvents] }

// 2. 객체간 프로토타입 체인 지정하기
const Parent = {
  parentMethod() {
    console.log('parentMethod() 호출됨')
  },
}

const Child = {
  childMethod() {},
}

const MyObj = {
  myObjMethod() {},
}

Object.setPrototypeOf(MyObj, Child)
Object.setPrototypeOf(Child, Parent)
MyObj.parentMethod() // "parentMethod() 호출됨"
