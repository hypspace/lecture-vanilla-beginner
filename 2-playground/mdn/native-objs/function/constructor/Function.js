/* Function([arg1[, arg2[, ...argN]],] functionBody) 생성자 */

// 숙련도 향상을 위해 일부 같은 문맥이 드물게 반복되어서 작성되었음

//  - 설명:
//   - Function 생성자는 새로운 함수를 생성하는 데 사용되는 내장 객체. 함수의 이름, 매개변수, 본문을 문자열로 전달하여 새로운 함수를 만들 수 있음
//   - Function 생성자는 동적으로 함수를 생성할 수 있는 유용한 도구지만, 가독성 및 성능의 단점 그리고 디버깅의 어려움으로 인해 일반적으로는 리터럴 표기법(예: function() {})을 사용하는 것이 더 좋음. 특정 상황에서만 필요한 경우에 적절히 활용하면 됨
//   - Function 생성자는 특정 상황에서 유용할 수 있지만, 일반적으로는 가독성, 성능, 보안 측면에서 리터럴 방식의 함수 정의가 더 선호됨. 따라서, 동적으로 함수를 생성해야 할 특별한 이유가 없다면 Function 생성자를 사용하기보다는 리터럴 표기법과 같은 전통적인 방법을 사용하는 것이 좋음

//  - 주의 사항:
//   - Function 생성자는 문자열로 함수 본문을 작성하므로, 코드의 가독성이 떨어질 수 있고 디버깅이 어려움

//   - 성능 측면에서도 자주 사용되는 함수나 메서드로는 권장되지 않음
//    - new Function은 JS에서 동적으로 함수를 생성할 수 있는 방법이지만, 성능 측면에서 몇 가지 단점이 있음:
//      - 컴파일 비용(성능 문제): new Function으로 생성된 함수는 실행될 때마다 새로운 컨텍스트에서 컴파일됨. 이는 정적 함수와 비교할 때 추가적인 성능 비용이 발생함
//          - Function 생성자는 매번 새로운 함수 객체를 생성하므로 성능이 저하될 수 있음. 특히, 자주 호출되는 함수에 대해서는 비효율적일 수 있음
//              - Function 생성자: new Function(...) 방식으로 함수를 만들면 매번 새로운 함수 객체가 생성되기 때문에 참조가 바뀌게 됨. 이 방식은 코드를 동적으로 생성할 수 있지만, 성능 측면에서 불리함. 참조가 바뀌게 됩니다. 예를 들어, 같은 내용을 가진 두 개의 함수가 Function 생성자를 통해 생성되면, 이 두 함수는 서로 다른 객체이므로 서로 다른 참조를 가짐
//              - 리터럴 표기법: 함수 리터럴(예: function() { ... } 또는 () => { ... })을 사용하면, 코드가 로드될 때 한 번만 함수 객체가 생성됨. 같은 함수가 여러 번 호출되더라도 동일한 객체를 참조하므로, 메모리와 성능 면에서 더 효율적. 리터럴 표기법으로 함수를 정의하면, 동일한 내용의 함수는 동일한 참조를 가지게 됨. 따라서 여러 번 호출해도 같은 함수 객체를 참조하게 되어, 성능과 메모리 관리 측면에서 이점이 있음. 그리고 함수 리터럴 표기법 사용은 형식의 가독성이 높고, 전역 범위와는 다르게 this 바인딩이 가능하여 객체 지향 프로그래밍에서 더 유용함. 리터럴 함수는 정의된 스코프 내에서 this를 바인딩하므로, 객체 메서드로 사용할 때 유용함
//              - 전통적인 방법이 일반적으로 더 나은 성능을 제공함. Function 생성자는 런타임에 문자열을 파싱해야 하므로, 성능이 저하될 수 있음

//      - 스코프 접근 제한: new Function으로 생성된 함수는 생성된 위치의 스코프에 접근할 수 없음. 즉, 외부 변수나 함수에 접근할 수 없기 때문에 필요한 데이터를 전달하기 위해 매개변수를 사용해야 함. 이는 코드 가독성과 유지보수성을 떨어뜨릴 수 있음
//      - 디버깅 어려움: 동적으로 생성된 함수는 디버깅이 어려울 수 있음. 오류가 발생했을 때, 어디서 문제가 발생했는지 추적하기가 힘들 수 있음. 리터럴 방식으로 정의된 함수는 스택 추적에서 더 많은 정보를 제공하므로 디버깅이 더 용이함

//      - 보안 문제: new Function은 문자열로 코드를 생성하므로, 외부에서 입력받은 데이터를 그대로 실행할 경우 보안 취약점이 발생할 수 있음. 이는 XSS(크로스 사이트 스크립팅) 공격에 노출될 수 있는 경로
//          - Function 생성자와 eval()은 모두 문자열을 실행하는 방식이기 때문에, 코드 인젝션 공격에 취약할 수 있음. 예를 들어, 외부의 악의적인 코드를 실행하게 될 위험이 있음

//   - new Function()와 Function()의 차이 그리고 리터럴 표기법:
//       - 일반적으로 Function 생성자는 new 키워드를 사용하는 것이 맞음. new를 사용하지 않으면 전역 객체를 참조하게 되어, 코드의 의도와 다르게 작동할 수 있음
//          - new Function(): 이 방식으로 호출하면 새로운 함수 인스턴스가 생성됨. 이 함수는 this가 전역 객체를 참조하게 됨. 새로운 함수 인스턴스 생성
//          - Function(): Function 생성자를 단순히 호출하는 것은 적절한 방식이 아님. Function은 생성자이기 때문에 new 키워드 없이 호출하면 오류가 발생하지는 않지만, 함수 생성이 이루어지지 않음. 일반적인 함수 생성이 아니라, 주로 객체를 생성할 수 있는 방식이므로 의도한 대로 작동하지 않을 수 있음.

//       - 함수 리터럴은 코드의 가독성을 높여주며, 함수의 정의가 명확해짐

//   - Function 생성자와 리터럴 표기법의 차이
//       - Function 생성자: new Function(...) 방식으로. 함수를 만들면 매번 새로운 함수 객체가 생성됨. 이 방식은 코드를 동적으로 생성할 수 있지만, 성능 측면에서 불리함. '동적으로'라는 말은 런타임에서 함수를 생성할 수 있다는 뜻. 즉, 코드가 실행되는 동안 조건에 따라 함수를 정의하거나 변경할 수 있는 기능을 의미함. 예를 들어, 사용자 입력이나 API 응답에 따라 함수를 생성할 수 있음. 이렇게 동적으로 함수를 생성할 수 있는 장점이 있지만, 성능이 떨어질 수 있는 단점이 있음. 리터럴 표기법으로 정의된 함수는 정적으로 컴파일되기 때문에 더 효율적. 리터럴 표기법으로 정의된 함수는 소스 코드가 로드될 때 한 번 컴파일됨. 자바스크립트 엔진이 코드를 해석할 때 함수의 정의가 미리 처리되어, 그 결과로 생성된 함수 객체가 메모리에 저장됨. 반면, Function 생성자를 사용하면 그 함수의 내용이 문자열 형태로 제공되므로, 매번 호출할 때마다 새로운 함수 객체가 생성되고, 이를 해석하고 컴파일하는 과정이 추가로 필요함. 이로 인해 성능 저하가 발생할 수 있음
//       - 리터럴 표기법: 함수 리터럴(예: function() { ... } 또는 () => { ... })을 사용하면, 코드가 로드될 때 한 번만 함수 객체가 생성됨. 같은 함수가 여러 번 호출되더라도 동일한 객체를 참조하므로, 메모리와 성능 면에서 더 효율적. 리터럴 표기법을 사용하면 초기 로딩 시 성능이 더 좋고, 리소스 사용도 효율적

//   - 문법
//      - arg1, arg2, ...argN: 생성할 함수의 매개변수 이름을 나타내는 문자열
//      - functionBody: 함수 본문을 정의하는 문자열

// 1. 사용 예
const sum = new Function('a', 'b', 'return a + b;')
console.log(sum(2, 3)) // 5

// 2. 활용 예시

// - 동적으로 함수 생성
function createFunction(op) {
  return new Function('a', 'b', `return a ${op} b;`)
}

const add = createFunction('+')
const subtract = createFunction('-')

console.log(add(10, 5)) // 15
console.log(subtract(10, 5)) // 5

// 3. 함수 리터럴 표기법

// - 일반적인 방식
function myFunc() {
  // 함수 본문
}

// - 또는
const myFunction = function () {}

// - 또는 ES6의 화살표 함수
const myFunction2 = () => {}

// 4. (참고) this가 항상 특정 객체를 참조하도록 보장하는 방법

// - bind 메서드
const obj = {
  value: 21,
  getContext: function () {
    return this
  },
}

const boundGetContext = obj.getContext.bind(obj)
console.log(boundGetContext()) // { value: 21, getContext: [Function: getContext] }

// - 화살표 함수 사용
const obj1 = {
  value: 42,
  getValue: () => {
    return obj1.value // 직접 obj를 참조
  },
}

console.log(obj1.getValue()) // 42

// - 클래스 사용
class MyClass {
  constructor(value) {
    this.value = value
  }

  getValue() {
    return this.value // this는 항상 MyClass 인스턴스를 참조 (화살표 함수의 this는 해당 함수가 정의된 스코프를 참조하므로, 호출하는 방식과는 관계없이 항상 동일함)
  }
}

const obj2 = new MyClass(42)
console.log(obj2.getValue()) // 42
