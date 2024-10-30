// 1. 실습

// - 문자열 따옴표
console.log('string message') // "string message"

// - 문자열 백틱
const str = 'message'
console.log(`string ${str}`) // "string message"

const paragraph = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
  Ratione natus dicta fuga laborum alias amet eum nostrum voluptates a doloremque, saepe incidunt sed, 
  at dolor consequuntur placeat cumque minima deserunt?` // 줄바꿈 가능

// - typeof
console.log(typeof '') // "string"
console.log(toString.call('')) // "[object String]"

// - escape 문자열
console.log('hello\nworld') // 줄바꿈
/** 출력 결과:
 * hello
 * world
 */
console.log('hello\tworld') // "hello   world" 탭 출력
