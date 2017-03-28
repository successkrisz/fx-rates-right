import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { shallow } from 'enzyme'

describe('(View) Home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HomeView />)
  })

  it('Renders as a <div>', () => {
    expect(wrapper.type()).to.equal('div')
  })
})
