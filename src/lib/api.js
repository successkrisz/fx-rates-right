import 'isomorphic-fetch'
import moment from 'moment'
import { pipe } from 'lodash/fp'

const API_URL = 'https://api.fixer.io/'

/**
 * Fetch Foreign Exchange Rates API
 *
 * Validates date, if it's not a valid date then returns rejected promise.
 * Once everything good to go fetch the API and if it resolves returns the
 * result unwrapped as a Promise
 *
 * @param {string} date
 * @param {string} base
 * @param {string} selectedCurrency
 * @returns {Promise}
 */
export const fetchCurrencies = ({ date, base, selectedCurrency }) => {
  const query = makeQueryString({ date, base, selectedCurrency })

  return fetch(query)
    .then(checkStatus)
    .then(parseJSON)
}

/**
 * Transforms input string to a moment.js date object, throw Error if not
 *
 * @param {string} date
 * @returns {object} Date object
 */
const parseDate = date => {
  let parsedDate

  try {
    parsedDate = moment(date)
  } catch (e) {
    throw new Error('Date supplied is not a valid date')
  }
  return parsedDate
}

/**
 * Check if date is within acceptable range, returns date, if not throw Error
 *
 * @param {object} date
 * @returns {object} Date object
 */
const validateDate = date => {
  const requestedDate = parseInt(date.format('YYYYMMDD'), 10)
  const oldestAvailableDate = 19990104

  if (requestedDate < oldestAvailableDate) throw new Error('Date Supplied is too old')

  return date
}

/**
 * Transforms date input to a date string, throw Error if not
 *
 * @param {object} date
 * @returns {string} Date string in YYYY-MM-DD format for query
 */
const formatDate = date => {
  return date.format('YYYY-MM-DD')
}

/**
 * @param {object} response
 * @returns {Promise}
 */
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

/**
 * @param {object} response
 * @returns {Promise}
 */
const parseJSON = response => response.json()

/**
 * @param {string} date
 * @param {string} base
 * @param {string} selectedCurrency
 * @returns {string}
 */
const makeQueryString = ({ date, base, selectedCurrency }) => {
  const dateString = pipe(parseDate, validateDate, formatDate)(date)
  let query = `${API_URL}${dateString}?base=${base}`

  if (selectedCurrency) {
    query += `&symbols=${selectedCurrency}`
  }

  return query
}
