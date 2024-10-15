/* String(thing) 생성자 */

//  - 설명:
//   - String() 생성자는 String 객체를 생성. 생성자 함수 자체로 호출될 경우 String 형의 원시 값을 반환함

//  - 주의 사항:
//   - String()은 new와 함께 호출하거나 아니면 단독으로 호출할 수 있음. 하지만 효과는 다름. 반환 값을 참고
//   - 문자열 리터럴을 사용하는 것이 new String(thing)이나 String(thing)보다 메모리 효율성과 성능 면에서 더 유리함
//   - 문자열 리터럴은 원시 타입으로 생성됨. 이는 메모리 사용량이 적고, 가비지 컬렉션이 더 효율적으로 이루어짐

console.log(new String('hi')) // [String: 'hi']
console.log(String('hello')) // hello
console.log(typeof new String('hi'), typeof String('hello')) // object string
