// 1. 실습

// - 반복문 - break
for (let i = 0; i < 10; i++) {
  if (i === 5) break
  console.log(i)
}
/** 출력 결과:
 * 0
 * 1
 * 2
 * 3
 * 4
 */

// - 반복문 - continue
for (let l = 0; l < 10; l++) {
  if (Number.isInteger(l / 2)) continue
  console.log(l)
}
/** 출력 결과:
 * 1
 * 3
 * 5
 * 7
 * 9
 */
