export default `query {
  getFirstPage {
    _id
    name
    chapterTitle
    text
    image
    sound
    choices {
      nextPage,
      text
    }
  }
}`
