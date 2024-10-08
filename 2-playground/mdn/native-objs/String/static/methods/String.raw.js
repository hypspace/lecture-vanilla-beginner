/* String.raw(callSite: 정해진 형식의 템플릿 호출 개체, ...substitutions: 대체값) */

//  - 설명:
//   - 템플릿 리터럴의 원시 문자열을 반환하는 정적 메서드. 이스케이프 처리 없이 원시 문자열을 다룰 수 있는 유용한 메서드. 템플릿 리터럴의 태그 함수. 이는 Python의 r 접두사 또는 C#의 문자열 리터럴의 @ 접두사와 유사함
//   - 템플릿 리터럴에서 이스케이프된 문자를 처리하지 않고, 입력된 문자열을 그대로 반환
//   - \n, \t와 같은 이스케이프 시퀀스가 있는 경우, 이들을 실제 문자로 해석하지 않고 문자 그대로 반환

//  - 활용:
//   - 이스케이프 시퀀스를 포함한 원시 문자열을 다룰 때 유용
//   - HTML이나 SQL 쿼리와 같은 문자열을 작성할 때 이스케이프 처리 없이 그대로 표현하고자 할 때 사용함

//  - 주의 사항:
//   - String.raw()는 템플릿 리터럴에 사용되기 때문에, 문자열을 생성하기 위해 반드시 템플릿 리터럴(``)로 호출해야 함
//   - 단순히 이스케이프된 문자를 그대로 반환하므로, 실제로 원하는 문자열을 얻기 위해서는 상황에 맞는 이스케이프 처리가 필요할 수 있음

// 1. 예문
const rawString = String.raw`Hello\nWorld`
console.log(rawString) // Hello\nWorld (이스케이프 시퀀스가 문자 그대로 출력됨)

const multiLineString = String.raw`Line1\nLine2`
console.log(multiLineString) // Line1\nLine2

const tabbedString = String.raw`Column1\tColumn2`
console.log(tabbedString) // Column1\tColumn2

// 2. 템플릿 리터럴과의 차이
const templateString = `Hello\nWorld`
console.log(templateString) //  'Hello'와 'World'가 줄 바꿈되어 출력됨

// 3. 예시 활용
const htmlString = String.raw`<div>\n  Hello, World!</div>`
console.log(htmlString) // <div>\n  Hello, World!</div>
