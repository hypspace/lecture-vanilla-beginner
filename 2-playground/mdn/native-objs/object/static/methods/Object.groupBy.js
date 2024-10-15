/* Object.groupBy(items, callbackFn(element, index?)) */

//  - 설명:
//   - 주어진 객체의 속성들을 특정 기준에 따라 그룹화하여 새로운 객체를 생성. 주로 배열의 요소를 특정 속성에 따라 분류할 때 유용. ES2024(ES15)에 도입됨
//   - 객체의 속성을 특정 기준에 따라 그룹화하여 새로운 객체로 반환하는 메서드. 데이터 집합을 효율적으로 관리하고 분석하는 데 매우 유용함
//   - 객체의 속성을 특정 기준에 따라 그룹화할 수 있는 기능을 제공. 데이터 처리 및 관리에 유용하게 사용될 수 있음

//  - 활용:
//   - 데이터 집합을 분류하거나 관련된 속성들을 그룹으로 묶어 관리할 때 사용됨. 예를 들어 객체 배열에서 특정 키에 따라 데이터를 그룹화할 수 있음

//  - 주의 사항:
//   - ECMAScript 2022에서 도입되었으므로, 해당 버전을 지원하지 않는 환경에서는 사용할 수 없음. 바벨과 같은 트랜스파일러를 사용하여 코드를 변환해야 함. 그러나 바벨의 기본 플러그인에서 직접 지원하지 않을 수 있으므로 필요에 따라 폴리필이나 커스텀 폴리필 구현이 필요할 수 있음

// 1. 사용 예
const data = [
  {
    id: 1,
    category: 'bedding',
    name: 'Contemporary Style Winter Wool Blanket',
  },
  { id: 2, category: 'bedding', name: 'Contemporary Floral Comforter' },
  {
    id: 3,
    category: 'cookware',
    name: '8L Large Capacity Non-Stick Cast Iron Pot',
  },
  { id: 4, category: 'cookware', name: 'Pots And Pans Set' },
  {
    id: 5,
    category: 'coffee',
    name: 'Luxury Stainless Steel Insulated Flask with Golden Handle & Base',
  },
]

// const grouped = Object.groupBy(data, item => item.category) // 작성 시점에 Node.js v20.16.0이라서 TypeError: Object.groupBy is not a function가 발생한 것으로 보임
// console.log(grouped)

// 2. 폴리필 사용(구현) - 대체 구현
function groupBy(array, keyFunction) {
  return array.reduce((result, item) => {
    const key = keyFunction(item)
    if (!result[key]) {
      result[key] = []
    }
    result[key].push(item)
    return result
  }, {})
}

const grouped = groupBy(data, item => item.category)
console.log(grouped) // {bedding: [ { id: 1, category: 'bedding', name: 'Contemporary Style Winter Wool Blanket', }, { id: 2, category: 'bedding', name: 'Contemporary Floral Comforter', }, ], cookware: [ { id: 3, category: 'cookware', name: '8L Large Capacity Non-Stick Cast Iron Pot', }, { id: 4, category: 'cookware', name: 'Pots And Pans Set' }, ], coffee: [ { id: 5, category: 'coffee', name: 'Luxury Stainless Steel Insulated Flask with Golden Handle & Base'}]}
