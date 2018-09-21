import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './styles/app.css';

import { initBook } from './redux/actions'
import Page from './components/page'

class App extends Component {
  static propTypes = {
    initBook: PropTypes.func.isRequired,
    currentPage: PropTypes.object.isRequired
  }

  componentWillMount () {
    this.props.initBook()
  }

  render() {
    return (
      <div className="app-main">
        <Page
          currentPage={this.props.currentPage} />
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
    initBook: () => dispatch(initBook())
  }
}

export default connect(mapState, mapActions)(App)
