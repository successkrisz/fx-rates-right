import React from 'react'
import { shallow } from 'enzyme'
import { IndexLink, Link } from 'react-router'
import Navigation from 'components/Navigation'

describe('(Component) Navigation', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Navigation />)
  })

  it('Should render as a <div>', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('Should render a mobile menubar to access menu on mobile', () => {
    const menubar = wrapper.find('div.nav__menubar')
    expect(menubar.length).to.equal(1)
  })

  it('Should render <ul> containing navigation links without `visible` class initially', () => {
    const linksContainer = wrapper.find('ul')
    expect(linksContainer.hasClass('visible')).to.equal(false)
  })

  it('Should toggle class `visible` of <ul> when menubar is clicked', () => {
    const menubar = wrapper.find('div.nav__menubar')

    expect(wrapper.find('ul').hasClass('visible')).to.equal(false)
    menubar.simulate('click')
    expect(wrapper.find('ul').hasClass('visible')).to.equal(true)
    menubar.simulate('click')
    expect(wrapper.find('ul').hasClass('visible')).to.equal(false)
  })

  it('Should remove class `visible` of <ul> when <ul>(any of the links) is clicked', () => {
    wrapper.setState({ isMobileNavVisible: true })

    expect(wrapper.find('ul').hasClass('visible')).to.equal(true)
    wrapper.find('ul').simulate('click')
    expect(wrapper.find('ul').hasClass('visible')).to.equal(false)
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
