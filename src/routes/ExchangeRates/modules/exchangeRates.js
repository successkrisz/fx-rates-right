import moment from 'moment'

import fetchCurrencies from '../../../lib/api'
import { currencies } from '../constants'
import { reducerKey } from '../index'

// =============================
// Constants
// =============================
export const SAVE_SEARCH_RESULTS = 'SAVE_SEARCH_RESULTS'
export const SET_FETCHING_FLAG = 'SET_FETCHING_FLAG'
export const SET_FETCHING_ERROR = 'SET_FETCHING_ERROR'
export const SET_BASE_CURRENCY_AND_DATE = 'SET_BASE_CURRENCY_AND_DATE'

// =============================
// Initial State
// =============================
export const initialState = {
  fetching    : false,
  error       : false,
  baseCurrency: 'GBP',
  date        : moment().format('YYYY-MM-DD'),
  currencies  : currencies,
  searched    : {}
}

// =============================
// Action creators
// =============================
export const setError = error => ({
  type    : SET_FETCHING_ERROR,
  payload : error.message
})

export const setFetchingFlag = isFetching => ({
  type    : SET_FETCHING_FLAG,
  payload : !!isFetching
})

export const saveRates = (results) => ({
  type    : SAVE_SEARCH_RESULTS,
  payload : results
})

export const setBaseCurrencyAndDate = ({ baseCurrency, date }) => ({
  type    : SET_BASE_CURRENCY_AND_DATE,
  payload : {
    baseCurrency,
    date
  }
})

export const fetchRates = (newDate, newCurrency) => (dispatch, getState) => {
  const { searched, baseCurrency, date } = getState()[reducerKey]

  newDate = newDate || date
  newCurrency = newCurrency || baseCurrency

  const searchId = newCurrency + newDate
  const isSearchCached = searched.hasOwnProperty(searchId)

  if (isSearchCached) {
    dispatch(setBaseCurrencyAndDate({
      baseCurrency: newCurrency,
      date        : newDate
    }))
  }

  dispatch(setFetchingFlag(true))

  return fetchCurrencies({ date: newDate, base: newCurrency })
    .then(results => {
      dispatch(saveRates(results))
      dispatch(setError(false))
      dispatch(setFetchingFlag(false))
      dispatch(setBaseCurrencyAndDate({
        baseCurrency: results.base,
        date        : results.date
      }))
    })
    .catch(error => {
      dispatch(setError(error.message))
      dispatch(setFetchingFlag(false))
    })
}

export const actions = {
  fetchRates
}

// =============================
// Action Handlers
// =============================
const ACTION_HANDLERS = {
  [SAVE_SEARCH_RESULTS]: (state, action) => ({
    ...state,
    searched: {
      ...state.searched,
      [action.payload.base + action.payload.date]: action.payload.rates
    }
  }),
  [SET_FETCHING_FLAG]: (state, action) => ({ ...state, fetching: action.payload }),
  [SET_FETCHING_ERROR]: (state, action) => ({ ...state, error: action.payload }),
  [SET_BASE_CURRENCY_AND_DATE]: (state, action) => ({
    ...state,
    baseCurrency: action.payload.baseCurrency,
    date        : action.payload.date
  })
}

// =============================
// Reducer
// =============================
export default function ratesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return (handler) ? handler(state, action) : state
}

// =============================
// Selectors
// =============================
export const getCurrencies = state => state.currencies

export const getRates = state => {
  const key = state.baseCurrency + state.date
  return state.searched[key]
}

export const getBaseCurrency = state => state.baseCurrency

export const getSelectedDate = state => state.date

export const selectors = {
  getCurrencies   : state => getCurrencies(state[reducerKey]),
  getRates        : state => getRates(state[reducerKey]),
  getBaseCurrency : state => getBaseCurrency(state[reducerKey]),
  getSelectedDate : state => getSelectedDate(state[reducerKey])
}
