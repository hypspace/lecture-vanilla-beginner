/* Class */

// - 설명:
//  - JS는 기본적으로 클래스가 없음. 함수 기반의 객체지향 언어인데 객체지향-상속을 구현하기 위한 여러가지 패턴을 나름대로 함수를 활용하여 구현했는데 이번 ES6에서는 구문적 설탕에 해당하는 Class 키워드를 직접적으로 표준화하여 가독성을 높히고 모듈화 수준을 높히려는 의도로 추가한 것으로 보임
//  - 기존의 Object.create()를 통해서 객체지향-상속을 구현하는 방법은 Class 문법보다 표준적이고 자바스크립트스러운 패턴이지만 Class 문법은 모듈화 수준이 높고 직관적이고 가독성이 뛰어나기 때문에 매우 유용함

// 1. 기본 사용 예시
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getContext() {
    console.log(this)
  }
}

const myPerson = new Person('Wang', 31)
console.log(myPerson.getContext()) // "Person {name: 'Wang', age: 31}" getContext는 결국 Person의 prototype에 저장됨. Class 문법일 뿐, 내부적으로는 함수로 처리됨
