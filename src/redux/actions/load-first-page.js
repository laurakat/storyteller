import { createApolloFetch } from 'apollo-fetch'

import { API_URL } from '../../constants'
import { getFirstPage } from '../../graphql'

export const loadFirstPage = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'LOAD_FIRST_PAGE_START'
    })

    const query = getFirstPage

    const uri = API_URL
    const fetch = createApolloFetch({uri})
    const response = await fetch({query})

    if (response.errors) {
      dispatch({
        type: 'LOAD_FIRST_PAGE_FAILURE',
        payload: response.errors
      })

      return
    }

    dispatch({
      type: 'LOAD_FIRST_PAGE_SUCCESS',
      payload: {
        page: response.data.getFirstPage
      }
    })

  } catch (error) {
    dispatch({
      type: 'LOAD_FIRST_PAGE_FAILURE',
      payload: error
    })
  }
}
