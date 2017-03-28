import React from 'react'
import { ExchangeRatesView } from 'routes/ExchangeRates/components/ExchangeRatesView'
import { shallow } from 'enzyme'

describe('(View) ExchangeRates', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<ExchangeRatesView />)
  })

  it('Renders as a <div>', () => {
    expect(wrapper.type()).to.equal('div')
  })
})
