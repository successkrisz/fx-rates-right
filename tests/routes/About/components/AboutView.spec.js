import React from 'react'
import { AboutView } from 'routes/About/components/AboutView'
import { shallow } from 'enzyme'

describe('(View) About', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<AboutView />)
  })

  it('Renders as a <div>', () => {
    expect(wrapper.type()).to.equal('div')
  })
})
