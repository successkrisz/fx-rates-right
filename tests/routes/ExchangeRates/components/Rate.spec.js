import React from 'react'
import { shallow } from 'enzyme'
import Rate from 'routes/ExchangeRates/components/Rate/Rate'

const props = {
  currency: 'GBP',
  rate: 1,
  symbol: '£',
  name: 'British Pound',
  baseCurrency: 'USD'
}

describe('(Component) Rate', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Rate {...props} />)
  })

  it('Should render as a <div>', () => {
    expect(wrapper.type()).to.equal('div')
  })
})
