/* String.prototype.search(regexp) */

//  - 설명:
//   - 문자열 내에서 특정 패턴(정규 표현식)을 검색하고, 패턴과 일치하는 첫 번째 인덱스를 반환. 만약 패턴과 일치하는 부분이 없다면 -1을 반환
//   - 문자열 내에서 정규 표현식을 사용하여 특정 패턴을 검색하고, 첫 번째 일치 항목의 인덱스를 반환
//   - 정규식과 이 문자열 간에 일치하는 항목이 있는지 검색하여 문자열에서 첫 번째로 일치하는 항목의 인덱스를 반환함

//  - 활용:
//   - 문자열 내에서 특정 내용을 찾을 때 유용하게 사용될 수 있음

//  - 주의 사항:
//   - search()는 정규 표현식만을 인수로 받기 때문에 문자열을 전달하면 TypeError가 발생
//   - 대소문자를 구분함. 대소문자 구분 없이 검색하려면 정규 표현식에 i 플래그를 사용할 수 있음
//   - 일치하는 텍스트의 내용이 필요한 경우 String.prototype.match() 또는 RegExp.prototype.exec()를 사용함
//   - regexp의 g 플래그는 search() 결과에 아무런 영향을 미치지 않으며, 검색은 항상 정규식의 lastIndex가 0인 것처럼 수행됨

// 1. 사용 예
const str = 'hello, world'
const index = str.search('world')
console.log(index) // 7

// 2. 일치하지 않는 경우
const index2 = str.search('js')
console.log(index2) // -1

// 3. 활용 예시

// - 특정 단어의 위치 찾기
const text = 'lorem is lorem is fox is...'
const foxIdx = text.search(/fox/)
console.log(foxIdx) // 18

// - 정규 표현식을 통한 패턴 찾기
const email = 'user@example.com'
const whelkIdx = email.search(/@/)
console.log(whelkIdx) // 4

// - 대소문자 구분 없이 검색
const string = 'HellO, WorlD'
const worldIdx = string.search(/world/i)
console.log(worldIdx) // 7
