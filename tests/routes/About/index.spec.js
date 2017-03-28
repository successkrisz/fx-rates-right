import AboutRoute from 'routes/About'

describe('(Route) About', () => {
  let route

  beforeEach(() => {
    route = AboutRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof route).to.equal('object')
  })

  it('Configuration should contain path `about`', () => {
    expect(route.path).to.equal('about')
  })
})
