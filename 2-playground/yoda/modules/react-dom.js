// 가상 DOM 생성하는 함수 (가상 DOM은 실제 DOM을 추상화한 객체)
function createVirtualDOM(element) {
  return {
    type: element.type,
    props: element.props,
    children: element.props.children || [],
  }
}

// 실제 DOM에 가상 DOM 렌더링하는 함수
function renderToDOM(virtualDOM, container) {
  // 실제 DOM 요소 생성
  const domElement = document.createElement(virtualDOM.type)

  // 속성을 설정
  Object.keys(virtualDOM.props).forEach(prop => {
    if (prop !== 'children') {
      domElement[prop] = virtualDOM.props[prop]
    }
  })

  // 자식 요소 렌더링
  virtualDOM.children.forEach(child => {
    const childElement =
      typeof child === 'string'
        ? document.createTextNode(child)
        : renderToDOM(child, null)
    domElement.appendChild(childElement)
  })

  // 컨테이너에 실제 DOM 요소 추가
  container.appendChild(domElement)
  return domElement
}

// ReactDOM 객체를 정의
const ReactDOM = {
  render(element, container) {
    const virtualDOM = createVirtualDOM(element)
    renderToDOM(virtualDOM, container)
  },
}

export { ReactDOM }
