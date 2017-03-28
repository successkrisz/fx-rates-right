import React from 'react'
import { Header } from 'components/Header/Header'
import Navigation from 'components/Navigation'
import { shallow } from 'enzyme'

describe('(Component) Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('Should render a div', () => {
    expect(wrapper.type()).to.equal('div')
  })

  it('Should render a <Navigation />', () => {
    const navigation = wrapper.find(Navigation)
    expect(navigation).to.exist
  })
})
