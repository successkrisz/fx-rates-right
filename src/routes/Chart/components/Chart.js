import React, { PropTypes } from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer
} from 'recharts'

/**
 * Creates a nice Line Chart from the supplied data
 * Expects data in format : [{ baseCurrency: 'Jan', selectedCurrency: 1.221 },...]
 *
 * @param {array} string
 * @param {string} baseCurrency
 * @param {string} selectedCurrency
 */
const Chart = ({ data, baseCurrency, selectedCurrency }) => (
  <ResponsiveContainer width='90%' height={300}>
    <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <XAxis dataKey={baseCurrency} padding={{ left: 30, right: 30 }} />
      <YAxis type='number' domain={['dataMin', 'dataMax']} />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey={selectedCurrency} stroke='#8884d8' activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
)

Chart.propTypes = {
  data            : PropTypes.array.isRequired,
  baseCurrency    : PropTypes.string.isRequired,
  selectedCurrency: PropTypes.string.isRequired
}

export default Chart
