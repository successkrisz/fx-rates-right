import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import './DatePicker.scss'

const RenderDate = ({ input, meta: { touched, error, warning } }) => (
  <div className='form__date_picker'>
    <input className='form__date_picker__input' type='date' {...input} />
    {touched && ((error && <div className='error'>{error}</div>) || (warning && <div className='warning'>{warning}</div>))}
  </div>
)

const DatePicker = ({ name }) => (
  <Field name={name} component={RenderDate} />
)

RenderDate.propTypes = {
  input : PropTypes.any,
  meta  : PropTypes.object
}

DatePicker.propTypes = {
  name  : PropTypes.string.isRequired
}

export default DatePicker
