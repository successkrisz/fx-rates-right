import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Navigation.scss'

class Navigation extends React.Component {
  constructor (props) {
    super()
    this.state = {
      isMobileNavVisible: false
    }
  }

  toggleMobileVisibility = () => {
    this.setState(state => ({
      ...state,
      isMobileNavVisible: !state.isMobileNavVisible
    }))
  }

  hideMobileNav = () => {
    this.setState(state => ({
      ...state,
      isMobileNavVisible: false
    }))
  }

  render () {
    const { isMobileNavVisible } = this.state
    return (
      <div>
        <div className='nav__menubar' onClick={this.toggleMobileVisibility}>
          <i className='fa fa-bars fa-2x' />
        </div>
        <ul
          className={(isMobileNavVisible) ? 'visible nav__links' : 'nav__links'}
          onClick={this.hideMobileNav}
        >
          <li key={1}>
            <IndexLink to='/' activeClassName='route--active'>
              Home
            </IndexLink>
          </li>
          <li key={2}>
            <Link to='/about' activeClassName='route--active'>
              About
            </Link>
          </li>
          <li key={3}>
            <Link to='/exchange-rates' activeClassName='route--active'>
              Exchange rates
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navigation
