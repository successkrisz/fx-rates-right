import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import './CurrencyPicker.scss'

const RenderCurrencyPicker = field => {
  return (
    <div className='form__select'>
      <select {...field.input} >
        { Object.keys(field.currencies).map(currency => (
          <option key={currency}>{currency} - {field.currencies[currency].name}</option>
        )) }
      </select>
    </div>
  )
}

const CurrencyPicker = ({ name, currencies }) => (
  <Field name={name} currencies={currencies} component={RenderCurrencyPicker} />
)

CurrencyPicker.propTypes = {
  name      : PropTypes.string.isRequired,
  currencies: PropTypes.object.isRequired
}

export default CurrencyPicker
