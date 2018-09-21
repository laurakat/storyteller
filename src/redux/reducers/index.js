import objectPathImmutable from 'object-path-immutable'

const DEFAULT_STATE = {
	currentPage: {},
  bookIsInitialising: false,
  isLoading: false
}

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'INIT_BOOK_START':
      return objectPathImmutable(state)
        .set('bookIsInitialising', true)
        .value()

    case 'INIT_BOOK_SUCCESS':
    case 'INIT_BOOK_FAILURE':
      return objectPathImmutable(state)
        .set('bookIsInitialising', false)
        .value()

    case 'LOAD_FIRST_PAGE_START':
      return objectPathImmutable(state)
        .set('isLoading', true)
        .value()

    case 'LOAD_FIRST_PAGE_FAILURE':
      return objectPathImmutable(state)
        .set('isLoading', false)
        .value()

    case 'LOAD_FIRST_PAGE_SUCCESS':
      return objectPathImmutable(state)
        .set('isLoading', false)
        .set('currentPage', action.payload.page)
        .value()

    default:
      return state
  }
}

export default reducer
