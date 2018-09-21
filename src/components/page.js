import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

class Page extends PureComponent {
  static propTypes = {
    currentPage: PropTypes.object.isRequired
  }
  render() {
    const { currentPage } = this.props

    return (
      <div className="page">
        <div className="text">
          {currentPage.text}
        </div>
        <div className='image'>
          {currentPage.image && <img src={currentPage.image} />}
        </div>
      </div>
    )
  }
}

export default Page
