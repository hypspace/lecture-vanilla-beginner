// 1. 실습

// - 연산자 우선순위
console.log((2 + 3) % 2) // 1

// - 소수 계산 주의점
const num = 0.1 + 0.2
console.log(num) // 0.30000000000000004 부동소수점 문제 발생
console.log(num.toFixed(1)) // 0.3
console.log(Math.round(num * 10) / 10) // 0.3
