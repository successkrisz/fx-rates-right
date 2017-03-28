import moment from 'moment'
import { currencies } from '../constants'

export const validate = ({ date, currency }) => {
  const errors = {}
  const currencyCode = currency.substr(0, 3)
  const dateAsNumber = parseInt(moment(date).format('YYYYMMDD'), 10)
  const oldestAvailableDate = 19990104
  const todaysDate = parseInt(moment().format('YYYYMMDD'), 10)

  if (!currencies[currencyCode]) {
    errors.currency = 'Sorry, this currency is not available yet.'
  }

  if (!date) {
    errors.date = 'Required'
  } else if (dateAsNumber < oldestAvailableDate) {
    errors.date = 'Sorry, the earliest data we have is from 04/01/1999.'
  } else if (dateAsNumber > todaysDate) {
    errors.date = 'Sorry we can\'t see the future. Yet.'
  }
  return errors
}

export const warn = ({ date }) => {
  const warnings = {}
  const dayOfWeek = moment(date).format('dddd')
  if (dayOfWeek === 'Sat' || dayOfWeek === 'Sun') {
    warnings.date = 'We only have data from weekdays, so showing previous Friday\'s rate.'
  }
  return warnings
}
