// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import AboutRoute from './About'
import ExchangeRatesRoute from './ExchangeRates'
import Chart from './Chart'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    AboutRoute(),
    ExchangeRatesRoute(store),
    Chart()
  ]
})

export default createRoutes
