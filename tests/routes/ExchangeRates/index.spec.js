import ExchangeRatesRoute from 'routes/ExchangeRates'

describe('(Route) ExchangeRates', () => {
  let route

  beforeEach(() => {
    route = ExchangeRatesRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof route).to.equal('object')
  })

  it('Configuration should contain path `exchange-rates`', () => {
    expect(route.path).to.equal('exchange-rates')
  })
})
