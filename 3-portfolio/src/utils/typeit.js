const initTypeIt = () => {
  new TypeIt('#home h2', {
    loop: true,
  })
    .pause(3000)
    .delete()
    .type('<strong>Feel free to reach out via my channel or email</strong>')
    .pause(2000)
    .delete()
    .type('<strong>hyperspacecraft@gmail.com</strong>')
    .pause(2500)
    .go()
}

export default initTypeIt
