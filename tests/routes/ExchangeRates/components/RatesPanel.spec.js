import React from 'react'
import { shallow } from 'enzyme'
import { RatesPanel } from 'routes/ExchangeRates/components/RatesPanel/RatesPanel'
import { Rate } from 'routes/ExchangeRates/components/Rate/Rate'
import Spinner from 'components/Spinner'

const props = {
  rates: { EUR: 1.2, USD: 1.5 },
  baseCurrency: 'GBP',
  date: '2000-10-10',
  currencies: {
    EUR: { name: 'Euro', symbol: '€' },
    GBP: { name: 'British Pound', symbol: '£' },
    USD: { symbol: '$', name: 'US Dollar' }
  }
}

describe('(Component) RatesPanel', () => {
  it('Should render as a spinner when no rates available', () => {
    const wrapper = shallow(<RatesPanel date='2000-10-10' baseCurrency='GBP' />)
    expect(wrapper.is(Spinner)).to.be.true
  })

  it('Should render as a <div> when rates are available', () => {
    const wrapper = shallow(<RatesPanel {...props} />)
    expect(wrapper.type()).to.equal('div')
  })

  it('Should render as a <Rate> for each currency excluding the selected one', () => {
    const wrapper = shallow(<RatesPanel {...props} />)
    const rates = wrapper.find(Rate)
    expect(rates.length).to.equal(2)
  })
})
