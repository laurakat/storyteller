import { loadFirstPage } from './load-first-page'

export const initBook = () => async (dispatch, getState) => {
  try {
  	dispatch({
  		type: 'INIT_BOOK_START'
  	})

    await dispatch(loadFirstPage())

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
