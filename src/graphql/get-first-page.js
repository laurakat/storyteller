export default `query {
  getFirstPage {
    _id
    name
    text
    image
    sound
    choices {
      nextPage,
      text
    }
  }
}`
