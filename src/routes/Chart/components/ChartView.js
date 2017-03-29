import React, { PropTypes } from 'react'
import moment from 'moment'
import { redirectsTo } from 'modules/redirectsTo'
import ChartContainer from '../containers/ChartContainer'
import './ChartView.scss'

const ChartView = (props) => {
  const { baseCurrency, selectedCurrency } = props.params
  const dateFormat = 'DD MMM YYYY'
  const dateFrom = moment().subtract(1, 'year').format(dateFormat)
  const dateUntil = moment().format(dateFormat)

  return (
    <div className='route-chart'>
      <h2>{baseCurrency} to {selectedCurrency} Chart</h2>
      <div>
        {dateFrom}
        {'  -  '}
        {dateUntil}
      </div>
      <div className='route-chart__viewport'>
        <ChartContainer baseCurrency={baseCurrency} selectedCurrency={selectedCurrency} />
      </div>
      <button className='button-default' onClick={redirectsTo('/exchange-rates')}>
        Take me back to Exchange rates
      </button>
    </div>
  )
}
ChartView.propTypes = {
  params: PropTypes.shape({
    baseCurrency    : PropTypes.string.isRequired,
    selectedCurrency: PropTypes.string.isRequired
  })
}

export default ChartView
