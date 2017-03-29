import React from 'react'
import { redirectsTo } from 'modules/redirectsTo'
import './AboutView.scss'

export const AboutView = () => (
  <div className='about_view__container'>
    <h1>About & FAQ</h1>
    <h3>
      This is a neat little FX Rates app for a coding challenge utilising the following technologies:
    </h3>
    <ul>
      <li>React</li>
      <li>Redux</li>
      <li>React Router</li>
      <li>Webpack</li>
      <li>Karma</li>
      <li>ESLint</li>
    </ul>
    <h3>How to use the Exchange rates service</h3>
    <ul>
      <li>Select a base currency</li>
      <li>Select a date for which you'd like to see the currencies</li>
      <li>Hit the Request Rates button and you're ready to go!</li>
      <li>Enjoy ;-)</li>
    </ul>
    <div className='text-center'>
      <button className='button-default' onClick={redirectsTo('/exchange-rates')}>
        Give it a try!
      </button>
    </div>
  </div>
)

export default AboutView
