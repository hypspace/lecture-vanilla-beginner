/* Object.assign() */

// - 설명:
//  - Object.assign 이전에 Object.create를 이해할 필요가 있음. create는 기존에 new 키워드를 통한 객체 생성 패턴에 대해 거부감이 있었는데 이에 create를 통해서 객체를 생성하는 객체 생성 패턴 중 하나. 생성자 함수를 만들고 new 키워드를 써서 프로토타입 지정해주는 방법을 간편하게 Object.create로 쉽게 객체를 만들 수 있음. 이는 생성된 객체가 프로토타입 객체안에 들어가기 때문. 그래서 JS에서 상속 계층의 객체를 만드는 가장 표준적인 방법이라고 볼 수 있음. 그러나 단점은 생성된 객체에 별도의 공간에 속성을 추가해 주어야 한다는 것. 물론 함수를 래핑해서 개선할 수 있지만, Object.assign()을 통해서 좀 더 가독성 높게 속성을 추가할 수 있음
// //  단점: HeaderView.setup 같은 메서드를 따로 또 추가해줘야 하는 느낌의 패턴. 함수를 랩핑해서 넣을 수 있는데
// //  이러한 부분은 Object.assign 메서드를 통해 개선될 수 있음. 만약에 Object.assign이 구문이 보기 싫으면 함수로 래핑하거나 class로 만들 수 있음

// 1. Object.assign 사용 예시
const View = {
  init() {},
  on() {},
  emit() {},
  hide() {},
  show() {},
}

const FormView = Object.assign(Object.create(View), {
  setup() {},
  bindEvents() {},
})
console.log(FormView) // {setup: [Function: setup], bindEvents: [Function: bindEvents]}

// 2. 다른 개선 방법들 참고 예시

// - 함수로 래핑하여 개선할 수 있음
function createViewExtension(extensions) {
  return Object.assign(Object.create(View), extensions)
}

const HeaderView = createViewExtension({
  setup() {},
  bindEvents() {},
})
console.log(HeaderView) // {setup: [Function: setup], bindEvents: [Function: bindEvents]}

// - 클래스로 래핑하여 개선할 수 있음
class MyView {
  init() {}
  on() {}
  emit() {}
  hide() {}
  show() {}
}

class FooterView extends MyView {
  setup() {}
  bindEvents() {}
}

const footerViewInstance = new FooterView()
console.log(footerViewInstance) // FooterView {}
