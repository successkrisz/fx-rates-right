import React from 'react'
import { shallow } from 'enzyme'
import Spinner from 'components/Spinner/Spinner'

describe('(Component) Spinner', () => {
  it('Should render a spinner without props', () => {
    const wrapper = shallow(<Spinner />)
    const icon = wrapper.find('i')
    const fallback = wrapper.find('span.sr-only')

    expect(icon).to.exist
    expect(icon.hasClass('fa fa-spinner fa-pulse fa-1x fa-fw')).to.be.true
    expect(fallback).to.exist
    expect(fallback.text()).to.equal('Loading...')
  })

  it('Should render a refresh icon with props: { type: `refresh` }', () => {
    const wrapper = shallow(<Spinner type='refresh' />)
    const icon = wrapper.find('i')

    expect(icon).to.exist
    expect(icon.hasClass('fa fa-refresh fa-spin fa-1x fa-fw')).to.be.true
  })

  it('Should render a size 3 spinner with props: { size: 3 }', () => {
    const wrapper = shallow(<Spinner size='3' />)
    const icon = wrapper.find('i')

    expect(icon).to.exist
    expect(icon.hasClass('fa fa-spinner fa-pulse fa-3x fa-fw')).to.be.true
  })
})
