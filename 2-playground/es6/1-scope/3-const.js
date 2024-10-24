/* const */

// - 설명:
//  - 개발하다보면 상수 변수값에 해당하는 변수를 선언할 때가 있음. 이럴 때 표준적인 방법은 아니지만 ES6이전에는 대문자 표기법으로 해결(약속)했는데, ES6부터는 상수 변수를 지원하는 변수 선언 키워드인 const가 추가됨
//  - const로 변수 선언을 하면 수정 불가함. 그러나 참조 타입을 선언한다면 해당 타입의 레퍼런스 주소를 참조하기 때문에 내부 데이터는 수정이 가능함
//  - 상수 변수값에 대한 재할당이 불가능한 변수 선언 키워드인 const가 추가된 것으로 보임

// 1. ES6 이전과 이후의 상수 변수 선언 방법에 대한 차이 예시
// - var
var BASEURL = 'https://api.hnpwa.com/v0/'
BASEURL = 'https://api.hnpwa.com/v2/' // 재할당이 가능하지만 건들지 말자고 대문자로 표기된 변수는 건들지 말자고 약속함

// - const
const baseUrl = 'https://api.hnpwa.com/v0/'
// baseUrl = 'https://api.hnpwa.com/v2/' // Error!: 상수 변수에 재할당 불가능

// 2. 주의할 점 예시
const obj = {
  name: {
    a: 1,
  },
}
obj.name = []
console.log(obj) // {name: []} 내부 데이터 수정 가능함
obj = [] // Error! 최상위 참조 주소는 재할당 불가능함
