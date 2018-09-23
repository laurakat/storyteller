import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import get from 'lodash/get'

import '../styles/app.css';

import {
  initBook,
  changePage
} from '../redux/actions'

import Page from './page'

class ReadBook extends Component {
  static propTypes = {
    initBook: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    currentPage: PropTypes.object.isRequired,
    match: PropTypes.object
  }

  componentWillMount () {
    const bookId = get(this, 'props.match.params.bookId')
    this.props.initBook(bookId)
  }

  render () {
    const {
      currentPage,
      changePage
    } = this.props

    return (
      <div className="app-main">
        <Page
          currentPage={currentPage}
          changePage={changePage} />
      </div>
    )
  }
}

const mapState = state => {
  const { currentPage } = state

  return {
    currentPage
  }
}

const mapActions = (dispatch, ownProps) => {
  return {
    initBook: bookId => dispatch(initBook(bookId)),
    changePage: pageId => dispatch(changePage(pageId))
  }
}

export default connect(mapState, mapActions)(ReadBook)
