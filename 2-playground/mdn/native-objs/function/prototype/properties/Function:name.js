/* Function:name */

//  - 설명:
//   - Function.name은 함수 객체의 이름을 나타내는 속성
//   - 각 함수 인스턴스에 속하며, 함수가 정의된 이름을 반환함
//   - MDN에서는 이를 Function:name으로 표시함. name 속성이 Function 객체와 관련이 깊기 때문에, 해당 속성이 어떤 객체에 속하는지를 명확히 하기 위해서. 즉, 모든 함수는 Function의 인스턴스이기 때문에 이 속성은 Function과 관련이 있다고 보는 것. String.name, Number.name 등과 같은 속성을 가지고 있음. 이 속성들은 해당 생성자 함수의 이름을 나타내므로, 이들 또한 Function:name 형식으로 이해할 수 있음

// 1. 사용 예
function calculateOutstanding() {}
function calculateDiscount() {}

console.log(calculateOutstanding.name) // calculateOutstanding
console.log(calculateDiscount.name) // calculateDiscount
