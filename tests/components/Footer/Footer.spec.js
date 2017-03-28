import React from 'react'
import { Footer } from 'components/Footer/Footer'
import { shallow } from 'enzyme'

describe('(Component) Footer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Footer />)
  })

  it('Renders as a footer', () => {
    expect(wrapper.type()).to.equal('footer')
  })
})
