import React from 'react'
import ControlPanel from '../components/ControlPanel'
import RatesPanel from './RatesPanel'

export const ExchangeRatesView = () => (
  <div>
    <h1>Exchange Rates</h1>
    <ControlPanel />
    <RatesPanel />
  </div>
)

export default ExchangeRatesView
