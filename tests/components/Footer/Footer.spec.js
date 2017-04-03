import React from 'react'
import { Footer } from 'components/Footer/Footer'
import { shallow } from 'enzyme'

describe('(Component) Footer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  it('Should render as a footer', () => {
    expect(wrapper.type()).to.equal('footer')
  })

  it('Should render a link', () => {
    const link = wrapper.find('a')
    expect(link).to.exist
  })
})
