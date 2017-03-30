import React, { PropTypes } from 'react'
import moment from 'moment'
import Spinner from 'components/Spinner'
import { fetchCurrencies } from 'lib/api'
import Chart from '../components/Chart'

/**
 * Component to collect data from API for the previous 12 months
 *
 * @param {string} baseCurrency
 * @param {string} selectedCurrency
 * @returns {(Component) Spinner | (Component) Chart}
 */
class ChartContainer extends React.Component {
  static propTypes = {
    baseCurrency    : PropTypes.string.isRequired,
    selectedCurrency: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      requiredMonths: 12,
      data: [],
      error: ''
    }
  }

  updateRates = async (dateToFetch) => {
    const { data, requiredMonths } = this.state
    const { baseCurrency, selectedCurrency } = this.props
    const monthsInState = data.length

    if (monthsInState >= requiredMonths) return

    try {
      const result = await fetchCurrencies({ date: dateToFetch, base: baseCurrency, selectedCurrency })

      const month = moment(result.date).format('MMM')

      this.setState(state => ({
        ...state,
        data: [
          { [baseCurrency]: month, ...result.rates },
          ...state.data
        ]
      }))

      const previousMonth = moment(result.date).subtract(1, 'months').format('YYYY-MM-DD')

      this.updateRates(previousMonth)
    } catch (error) {
      this.setState(state => ({
        ...state, error: error.message
      }))
      return
    }
  }

  componentDidMount () {
    this.updateRates(moment().format('YYYY-MM-DD'))
  }

  render () {
    const { data, requiredMonths, error } = this.state

    if (error) {
      return <div className='error-box'><span>{error}</span></div>
    }

    return (
      (data.length < requiredMonths)
      ? <Spinner />
      : <Chart data={data} {...this.props} />
    )
  }
}

export default ChartContainer
