import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import './ControlPanel.scss'
import { validate, warn } from '../../modules/validation'
import { selectors, fetchRates } from '../../modules/exchangeRates'
import CurrencyPicker from '../CurrencyPicker'
import DatePicker from '../DatePicker'

const ControlPanel = ({ handleSubmit, currencies, error }) => (
  <form onSubmit={handleSubmit} className='exchange_rates__control_panel'>
    <div className='row'>
      <div className='col--4 exchange_rates__label'>
        <label htmlFor='currency'>Select Base Currency</label>
      </div>
      <div className='col--4 exchange_rates__form-field'>
        <CurrencyPicker name='currency' currencies={currencies} />
      </div>
    </div>
    <div className='row'>
      <div className='col--4 exchange_rates__label'>
        <label htmlFor='date'>Select Date</label>
      </div>
      <div className='col--4 exchange_rates__form-field'>
        <DatePicker name='date' />
      </div>
    </div>
    <div className='row-center'>
      <div className='col--4 exchange_rates__form-field'>
        <button className='button-wide' type='submit'>Request rates</button>
      </div>
    </div>
    { (error) ? (
      <div className='error-box'>
        <span>{error}</span>
      </div>
    ) : null }
  </form>
)

ControlPanel.propTypes = {
  currencies  : PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error       : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

const mapStateToProps = state => {
  const currencies = selectors.getCurrencies(state)
  const baseCurrency = selectors.getBaseCurrency(state)
  const currencyLabel = `${baseCurrency} - ${currencies[baseCurrency].name}`
  return {
    error        : selectors.getError(state),
    currencies   : currencies,
    initialValues: {
      date    : selectors.getSelectedDate(state),
      currency: currencyLabel
    }
  }
}
const mapDispatchToProps = dispatch => ({
  onSubmit: ({ date, currency }) => {
    const currencyCode = currency.substr(0, 3)
    dispatch(fetchRates(date, currencyCode))
  }
})

const form = reduxForm({ form: 'controlPanel', validate, warn })

export default connect(mapStateToProps, mapDispatchToProps)(form(ControlPanel))
