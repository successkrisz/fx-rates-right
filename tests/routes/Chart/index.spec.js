import ChartRoute from 'routes/Chart'

describe('(Route) Chart', () => {
  let route

  beforeEach(() => {
    route = ChartRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof route).to.equal('object')
  })

  it('Configuration should contain path `chart/:baseCurrency/:selectedCurrency`', () => {
    expect(route.path).to.equal('chart/:baseCurrency/:selectedCurrency')
  })
})
