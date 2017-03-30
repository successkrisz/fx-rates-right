import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import './CurrencyPicker.scss'

const RenderCurrencyPicker = field => {
  const { touched, error, warning } = field.meta
  return (
    <div>
      <div className={(error) ? 'error form__select' : 'form__select'}>
        <select {...field.input} >
          { Object.keys(field.currencies).map(currency => (
            <option key={currency}>{currency} - {field.currencies[currency].name}</option>
          )) }
        </select>
      </div>
      {touched && ((error && <div className='error'>{error}</div>) || (warning && <div className='warning'>{warning}</div>))}
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
