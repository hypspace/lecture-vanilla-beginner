// 1. 실습

// - boolean
console.log(typeof true) // boolean
console.log(typeof false) // boolean

// - 값들의 비교
console.log(5 > 3) // true
console.log(5 > '3') // true
console.log(5 == '5') // true 동등 비교
console.log(5 === '5') // false 엄격 비교(자료형까지 비교함)

console.log(NaN == NaN) // false IEEE 754 부동 소수점 표준에 따라 NaN은 어떤 숫자와도 같지 않도록 정의되어 있음
console.log(true > false) // true
console.log(undefined == undefined) // true

console.log('a' > 1) // false 문자열과 숫자를 비교할 때, 문자열은 숫자로 형변환됨. Number('a') 또는 parseInt('a')로 변환됨. 이 결과는 무조건 NaN이 되는데 이제 비교는 NaN > 1이 되며 JS에서 NaN은 어떤 숫자와도 비교할 때 항상 false를 반환하므로, 결과적으로 false가 됨
