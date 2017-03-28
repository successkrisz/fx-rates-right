import React from 'react'
import { shallow } from 'enzyme'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import Header from 'components/Header'
import Footer from 'components/Footer'

describe('(Layout) Core', function () {
  let wrapper
  const props = {
    children : <h1 className='child'>Child</h1>
  }

  beforeEach(function () {
    wrapper = shallow(<CoreLayout {...props} />)
  })

  it('Should render as a <div>.', function () {
    expect(wrapper.type()).to.equal('div')
  })

  it('Should render a Header Component.', function () {
    const header = wrapper.find(Header)
    expect(header).to.exist
  })

  it('Should render Children.', function () {
    const child = wrapper.find('h1.child')
    expect(child).to.exist
    expect(child.text()).to.equal('Child')
  })

  it('Should render a Footer Component.', function () {
    const footer = wrapper.find(Footer)
    expect(footer).to.exist
  })
})
