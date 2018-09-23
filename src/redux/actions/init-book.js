import { loadFirstPage } from './load-first-page'

export const initBook = bookId => async (dispatch, getState) => {
  try {
  	dispatch({
  		type: 'INIT_BOOK_START'
  	})

    await dispatch(loadFirstPage(bookId))

  	dispatch({
  		type: 'INIT_BOOK_SUCCESS'
  	})
  } catch (error) {
    dispatch({
      type: 'INIT_BOOK_FAILURE',
      payload: error
    })
  }
}
