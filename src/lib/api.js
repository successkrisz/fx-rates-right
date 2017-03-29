import fetch from 'isomorphic-fetch'
import moment from 'moment'
import { pipe } from 'lodash/fp'

const API_URL = 'https://api.fixer.io/'

/**
 * Fetch Foreign Exchange Rates API
 *
 * Validates date, if it's not a valid date then returns rejected promise.
 * Check's if it's a weekend, if it's Saturday/Sunday returns the last Friday
 * as there's no data for weekends.
 * Once everything good to go fetch the API and if it resolves returns the
 * result unwrapped as a Promise
 *
 * @param {string} date
 * @param {string} base
 * @param {string} selectedCurrency
 * @returns {Promise}
 */
export async function fetchCurrencies ({ date, base, selectedCurrency }) {
  const dateString = pipe(parseDate, validateDate, formatDate)(date)
  let query = `${API_URL}${dateString}?base=${base}`

  if (selectedCurrency) {
    query += `&symbols=${selectedCurrency}`
  }

  return fetch(query).then(response => {
    if (__DEV__) {
      console.log(response)
    }
    if (response.status !== 200) {
      throw Error('Error Connecting to Server, please try again')
    }
    return response.json()
  })
}

/**
 * Transforms input string to a moment.js date object, throw Error if not
 *
 * @param {string} date
 * @returns {object} Date object
 */
function parseDate (date) {
  let parsedDate

  try {
    parsedDate = moment(date)
  } catch (e) {
    throw Error('Date supplied is not a valid date')
  }
  return parsedDate
}

/**
 * Check if date is within acceptable range, returns date, if not throw Error
 *
 * @param {object} date
 * @returns {object} Date object
 */
function validateDate (date) {
  const requestedDate = parseInt(date.format('YYYYMMDD'), 10)
  const oldestAvailableDate = 19990104

  if (requestedDate < oldestAvailableDate) throw Error('Date Supplied is too old')

  return date
}

/**
 * Transforms input string to a moment.js date object, throw Error if not
 *
 * @param {object} date
 * @returns {string} Date string in YYYY-MM-DD format for query
 */
function formatDate (date) {
  return moment(date).format('YYYY-MM-DD')
}
