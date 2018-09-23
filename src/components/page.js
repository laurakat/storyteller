import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/mui-theme'

class Page extends PureComponent {
  static propTypes = {
    currentPage: PropTypes.object.isRequired,
    changePage: PropTypes.func.isRequired
  }
  render() {
    const { currentPage } = this.props

    return (
      <div className="page">
        <div className='chapter-title-section'>
          <img className='border-left' src='images/corner-border.svg' />
          <span className='chapter-title'>{currentPage.chapterTitle}</span>
          <img className='border-right' src='images/corner-border.svg' />
        </div>
        <div className='image'>
          {currentPage.image && <img src={currentPage.image} />}
        </div>
        <div className="text">
          {currentPage.text}
        </div>
        <MuiThemeProvider theme={theme}>
          <div className='choice-buttons'>
            {currentPage.choices && currentPage.choices.map(choice => {
              return (
                <Button
                  key={choice.nextPage}
                  variant="contained"
                  color="primary"
                  onClick={() => this._handleChangePage(choice.nextPage)}>
                  {choice.text}
                </Button>
              )
            })}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }

  _handleChangePage (pageId) {
    this.props.changePage(pageId)
  }
}

export default Page
