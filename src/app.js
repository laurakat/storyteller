import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ReadBook from './components/read-book'
import ChooseBook from './components/choose-book'


class App extends Component {

  render () {
    return (
    <Router>
      <div>
        <Route exact path='/' component={ChooseBook} />
        <Route path="/book:bookId" component={ReadBook} />
      </div>
    </Router>
    )
  }
}

export default App
