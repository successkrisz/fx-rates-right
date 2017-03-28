import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { selectors } from '../../modules/exchangeRates'
import Rate from '../Rate'
import Spinner from 'components/Spinner'
import './RatesPanel.scss'

export const RatesPanel = ({ rates, baseCurrency, currencies, date }) => {
  if (!rates) return <Spinner />
  const formattedDate = moment(date).format('ddd Do, MMMM YYYY')
  return (
    <div>
      <div className='rates__date'>
        {baseCurrency} ({currencies[baseCurrency].name}) rates on {formattedDate}
        <div className='rates__click-advice'>
          Please click on the currency to view a historical chart of it’s rate, over the last 12 months.
        </div>
      </div>
      <div className='rates__rate_container'>
        { Object.keys(rates).map(key => (
          <Rate
            key={key}
            currency={key}
            rate={rates[key]}
            baseCurrency={baseCurrency}
            {...currencies[key]}
          />
        )) }
      </div>
    </div>
  )
}

RatesPanel.propTypes = {
  currencies  : PropTypes.object,
  rates       : PropTypes.object,
  baseCurrency: PropTypes.string.isRequired,
  date        : PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  currencies  : selectors.getCurrencies(state),
  rates       : selectors.getRates(state),
  baseCurrency: selectors.getBaseCurrency(state),
  date        : selectors.getSelectedDate(state)
})

export default connect(mapStateToProps)(RatesPanel)
