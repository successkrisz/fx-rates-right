import React from 'react'
import { shallow } from 'enzyme'
import { IndexLink, Link } from 'react-router'
import Navigation from 'components/Navigation'

describe('(Component) Navigation', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Navigation />)
  })

  it('Renders as a <div>', () => {
    expect(wrapper.type()).to.equal('div')
  })

  describe('Navigation links...', () => {
    it('Should render a Link to Home route', () => {
      expect(wrapper.contains(
        <IndexLink activeClassName='route--active' to='/'>
          Home
        </IndexLink>
      )).to.be.true
    })

    it('Should render a Link to About route', () => {
      expect(wrapper.contains(
        <Link activeClassName='route--active' to='/about'>
          About
        </Link>
      )).to.be.true
    })

    it('Should render a Link to Exchange rates route', () => {
      expect(wrapper.contains(
        <Link activeClassName='route--active' to='/exchange-rates'>
          Exchange rates
        </Link>
      )).to.be.true
    })
  })
})
