export default `query (
  $bookId: String!
) {
  getFirstPage(bookId: $bookId) {
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
