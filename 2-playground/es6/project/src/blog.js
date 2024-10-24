class Blog {
  constructor() {
    this.setInitVariables()
    this.registerEvents()
    this.likedSet = new Set()
  }

  registerEvents() {
    const start = document.querySelector('.start')
    const dataURL = 'url' // url 입력할 것

    start.addEventListener('click', () => this.setInitData(dataURL))
    this.blogList.addEventListener('click', evt => {
      const name = evt.target.className
      if (name !== 'like' && name !== 'unlike') return

      const title = target.previousElementSibling.textContent
      if (name === 'unlike') {
        target.className = 'like'
        target.textContent = '찜하기'
        this.likedSet.delete(title)
      } else {
        target.className = 'unlike'
        target.textContent = '찜취소'
        this.likedSet.add(title)
      }

      // 내 찜 목록 화면에 추가
      this.updateLikedList()
    })
  }

  updateLikedList() {
    const ul = document.querySelector('.like-view > ul')
    let likedSum = ''
    this.likedSet.forEach(v => {
      likedSum += `<li>${v}</li>`
      ul.innerHTML = likedSum
    })
  }

  setInitVariables() {
    this.blogList = document.querySelector('.blog-view > ul')
  }

  setInitData(url) {
    this.getData(url, this.insertPosts.bind(this))
  }

  getData(url, fn) {
    const oReq = new XMLHttpRequest() // AJAX 통신(호출)은 fetch API로 쉽게 할 수 있음
    oReq.addEventListener('load', () => {
      const list = JSON.parse(JSON.parse(oReq.responseText).body) // api 문제가 있어서 2번 감싼 코드
      fn(list)
    })
    oReq.open('GET', url)
    oReq.send()
  }

  insertPosts(list) {
    list.forEach(v => {
      this.blogList.innerHTML += `
        <li>
          <a href=${v.link}>${v.title}</a>
          <div class="like">찜하기</div>
        </li>`
    })
  }
}

export default Blog
