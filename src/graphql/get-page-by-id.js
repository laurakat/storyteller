export default `query (
  $id: String!
) {
  getPageById(id: $id) {
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
