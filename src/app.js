import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './styles/app.css';

import {
  initBook,
  changePage
} from './redux/actions'
import Page from './components/page'

class App extends Component {
  static propTypes = {
    initBook: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    currentPage: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.initBook()
  }

  render() {
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
    initBook: () => dispatch(initBook()),
    changePage: pageId => dispatch(changePage(pageId))
  }
}

export default connect(mapState, mapActions)(App)
