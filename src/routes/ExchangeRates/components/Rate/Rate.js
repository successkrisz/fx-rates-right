import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import './Rate.scss'

export const Rate = ({ currency, rate, symbol, name, baseCurrency }) => {
  const handleClick = () => { browserHistory.push(`/chart/${baseCurrency}/${currency}`) }
  const flag = (__PROD__)
    ? `flags/${currency.toLowerCase()}.png`
    : require(`assets/flags/${currency.toLowerCase()}.png`)
  return (
    <div className='col--3'>
      <div className='rates__rate' onClick={handleClick}>
        <img src={flag} />
        <span>{symbol} {rate}</span>
        <div>{currency} - {name}</div>
      </div>
    </div>
  )
}

Rate.propTypes = {
  baseCurrency: PropTypes.string.isRequired,
  currency    : PropTypes.string.isRequired,
  rate        : PropTypes.number.isRequired,
  symbol      : PropTypes.string.isRequired,
  name        : PropTypes.string.isRequired
}

export default Rate
