import { injectReducer } from 'store/reducers'

export const reducerKey = 'fx'

export default (store) => ({
  path : 'exchange-rates',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define dependencies for bundling   */
      const ExchangeRatesView = require('./components/ExchangeRatesView').default
      const reduxModule = require('./modules/exchangeRates')
      const reducer = reduxModule.default

      /*  Add the reducer to the store on key 'fx'  */
      injectReducer(store, { key: reducerKey, reducer })

      /* Fetch latest rates to populate state */
      store.dispatch(reduxModule.fetchRates())

      /*  Return getComponent   */
      cb(null, ExchangeRatesView)

    /* Webpack named bundle   */
    }, 'fxrates')
  }
})
