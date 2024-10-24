/* Template Literals */

// - 설명:
//  - 기존에 데이터 + 문자열하던 방법을 템플릿 리터럴 구문을 통해서 문자열을 보다 쉽게 생성하고 조작할 수 있는 새로운 방법이 추가됨
//  - 해당 기능은 여러 줄 문자열 표현, 문자열 내 변수 삽입, JS 표현식 삽입 등을 간편하게 쓸 수 있도록 도와줌

// 1. 사용 예시

// - 기본 사용: 일반 문자열 정의(백틱 기호를 사용함)
const text = `lorem`

// - 여러 줄 문자열 표현
const paragraphText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Quibusdam repudiandae, 
    consequatur provident delectus nesciunt fugiat?`

// - 문자열 내 변수 삽입
const name = 'Wang'
const age = 31
const message = `My name is ${name} and ${age} year old`
console.log(message) // "My name is Wang and 31 year old"

// - JS 표현식 삽입
const a = 5
const b = 10
console.log(`result: ${a + b}`) // "result: 15"

// - 중첩 템플릿 리터럴
console.log(`Hello, ${`Mr. ${name}`}`) // "Hello, Mr. Wang"
