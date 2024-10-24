/* Tagged Template Literals */

// - 설명:
//  - 받아온 데이터를 템플릿 표현식으로 화면에 나타내야 하는데 때에 따라서 템플릿 구문을 조작할 필요가 있는 경우가 있음. 함수에서 어떤 처리를 한 다음에 결과값을 반환하도록 사용할 수 있음
//  - 템플릿 상황에 따라 조건문이나 반복문에 걸리는 각기 다른 상황을 처리하기 위해 함수에서 입력값을 받아서 처리를 함. ES6에서는 Tagged Template Literals라는 문법을 추가하여 표준화 시킨 것
//  - 예를 들어 배열 기준으로 첫번째는 comment가 있고, 두번째는 없을 때 분기 처리를 해야하는데 그럴 때 유용하게 쓸 수 있음

// 1. 사용 예시
const data = [
  { id: 1, name: 'Wang' },
  { id: 2, name: 'Bob', comment: 'Hi, My name is Bob.' },
]

function fn(tags, name, comment) {
  if (typeof comment === 'undefined') comment = 'There are no comments.'
  return `${tags[0]}${name}${tags[1]}${comment}${tags[2]}`
}

data.forEach(v => {
  const template = fn`<p>${v.name}: ${v.comment}</p>`
  console.log(template)
  /** 출력 결과:
   * "<p>Wang: There are no comments.</p>"
   * "<p>Bob: Hi, My name is Bob.</p>"
   */
})
