import {
  SAVE_SEARCH_RESULTS,
  SET_FETCHING_FLAG,
  SET_FETCHING_ERROR,
  setError,
  setFetchingFlag,
  saveRates,
  initialState,
  default as reducer
} from 'routes/ExchangeRates/modules/exchangeRates'

describe('(Redux Module) Exchange Rates', () => {
  it('Should export a constant SAVE_SEARCH_RESULTS.', () => {
    expect(SAVE_SEARCH_RESULTS).to.equal('SAVE_SEARCH_RESULTS')
  })

  it('Should export a constant SET_FETCHING_FLAG.', () => {
    expect(SET_FETCHING_FLAG).to.equal('SET_FETCHING_FLAG')
  })

  it('Should export a constant SET_FETCHING_ERROR.', () => {
    expect(SET_FETCHING_ERROR).to.equal('SET_FETCHING_ERROR')

    describe('(Reducer)', () => {
      it('Should be a function.', () => {
        expect(reducer).to.be.a('function')
      })

      it('Should initialize with a **initialState**.', () => {
        expect(reducer(undefined, {})).to.equal(initialState)
      })

      it('Should return the previous state if an action was not matched.', () => {
        let state = reducer(undefined, {})
        expect(state).to.eql(initialState)
        state = reducer(state, { type: 'xxx' })
        expect(state).to.eql(initialState)
        state = reducer(state, setError({ message: 'error' }))
        expect(state).to.eql({ ...initialState, error: 'error' })
        state = reducer(state, { type: 'xxx' })
        expect(state).to.eql({ ...initialState, error: 'error' })
      })
    })

    describe('(Action Creator) setFetchingFlag', () => {
      it('Should be exported as a function.', () => {
        expect(setFetchingFlag).to.be.a('function')
      })

      it('Should return an action with type "COUNTER_INCREMENT".', () => {
        expect(setFetchingFlag(true)).to.have.property('type', SET_FETCHING_FLAG)
      })

      it('Should assign the first argument to the "payload" property.', () => {
        expect(setFetchingFlag(true)).to.have.property('payload', true)
      })

      it('Should always return "payload" property as a boolean', () => {
        expect(setFetchingFlag()).to.have.property('payload', false)
      })
    })

    describe('(Action Creator) setError', () => {
      it('Should be exported as a function.', () => {
        expect(setError).to.be.a('function')
      })

      it('Should return an action with type "COUNTER_INCREMENT".', () => {
        expect(setError({ message: 'error' })).to.have.property('type', SET_FETCHING_ERROR)
      })

      it('Should assign the first argument to the "payload" property.', () => {
        expect(setError({ message: 'error' })).to.have.property('payload', 'error')
      })
    })

    describe('(Action Creator) saveRates', () => {
      const ratesResult = {
        base: 'GBP',
        date: '2017-03-26',
        rates: { EUR: 1.2, USD: 1.5 }
      }

      it('Should be exported as a function.', () => {
        expect(saveRates).to.be.a('function')
      })

      it('Should return an action with type "SAVE_SEARCH_RESULTS".', () => {
        expect(saveRates(ratesResult)).to.have.property('type', SAVE_SEARCH_RESULTS)
      })

      it('Should assign the first argument to the "payload" property.', () => {
        expect(saveRates(ratesResult)).to.have.property('payload', ratesResult)
      })
    })
  })
})
