/* String.prototype.normalize(form?) */

//  - 설명:
//   - 문자열을 유니코드 정규화 방식에 따라 정규화된 문자열로 반환
//   - 주어진 문자열을 특정 정규화 형식으로 변환하여 Unicode 문자의 표기법을 일관되게 만듦
//   - 문자열 비교 및 저장 시 일관성을 유지하는 데 유용. 다국어 문자열 처리 및 비교를 위한 중요한 도구

//  - 활용:
//   - 다국어 지원 및 문자열 비교 시의 일관성을 유지하기 위해 사용
//   - 조합 문자(combining characters)와 기본 문자(base characters) 간의 변환에 유용

//  - 주의 사항:
//   - normalize() 메서드는 기본적으로 NFC 형식으로 정규화를 수행함
//   - 문자열의 길이가 변할 수 있으며, 문자 배열이 변경될 수 있음
//   - form이 아래 형식에서 명시된 값 중 하나가 아닐 경우 RangeError 에러가 발생

//   - 정규화 형식:
//    - normalize() 메서드는 다음과 같은 정규화 형식을 지원함:
//      - NFC (Normalization Form C): 조합된 형태로 변환 (default).
//      - NFD (Normalization Form D): 분리된 형태로 변환
//      - NFKC (Normalization Form KC): NFC와 같은 방식이지만, 호환 문자를 포함하여 변환
//      - NFKD (Normalization Form KD): NFD와 같은 방식이지만, 호환 문자를 포함하여 변환

// 1. 사용 예
const str1 = 'é' // U+00E9
const str2 = 'é' // U+0065 U+0301 (e와 결합된 악센트)

console.log(str1 === str2) // false (같은 문자가 아님)

const normalizedStr1 = str1.normalize('NFC')
const normalizedStr2 = str2.normalize('NFC')

console.log(normalizedStr1 === normalizedStr2) // true (정규화 후 같음)

const normalizedStr3 = str1.normalize('NFD')
const normalizedStr4 = str2.normalize('NFD')

console.log(normalizedStr3 === normalizedStr4) // true (정규화 후 같음)

// 2. 예시 활용
function areEqualNormalized(strA, strB) {
  return strA.normalize() === strB.normalize()
}

console.log(areEqualNormalized('café', 'café')) // true (같은 문자가 정규화됨)
console.log(areEqualNormalized('abc', 'abc')) // true (같은 문자열)
console.log(areEqualNormalized('abc', 'abcd')) // false (다른 문자열)
