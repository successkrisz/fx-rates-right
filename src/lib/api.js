import fetch from 'isomorphic-fetch'
import moment from 'moment'

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
export default function fetchCurrencies ({ date = 'latest', base, selectedCurrency }) {
  if (!isDateValid(date)) return Promise.reject(new Error('Date too old'))

  let query = `${API_URL}${date}?base=${base}`
  if (selectedCurrency) {
    query += `&symbols=${selectedCurrency}`
  }
  return fetch(query).then(response => response.json())
}

/**
 * Funtion to verify that the date is valid
 * @param {string} date
 * @returns {boolean}
 */
function isDateValid (date) {
  let requestedDate

  try {
    requestedDate = parseInt(moment(date).format('YYYYMMDD'), 10)
  } catch (e) {
    return false
  }

  return (requestedDate > 19990103)
}
