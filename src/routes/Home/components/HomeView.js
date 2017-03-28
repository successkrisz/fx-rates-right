import React from 'react'
import './HomeView.scss'
import mainPic from 'assets/images/home960.jpg'

export const HomeView = () => (
  <div className='home_view__container'>
    <h1>#FX Rates Right</h1>
    <h4 className='home_view__subtitle'>The app where you can view the currency rates right ;-)</h4>
    <div>
      <img src={mainPic} className='home__image_main' />
      <h3>British Pound History</h3>
      <p>
        The United Kingdom's central bank is the Bank of England.
        As the fourth most traded currency, the British Pound is
        the third most held reserve currency in the world.
        Common names for the British Pound include the
        Pound Sterling, Sterling, Quid, Cable, and Nicker.
      </p>
      <h4>Importance of the British Pound </h4>
      <p>The British Pound is the oldest currency still in use today,
        as well as one of the most commonly converted currencies.
        The Falkland Islands, Gibraltar, and Saint Helena are all
        pegged at par to the GBP.
      </p>
      <h4>Early Currency in Britain</h4>
      <p>
        With its origins dating back to the year 760, the Pound Sterling was
        first introduced as the silver penny, which spread across the
        Anglo-Saxon kingdoms. In 1158, the design was changed and rather than
        pure silver the new coins were struck from 92.5% silver and became to
        be known as the Sterling Pound. Silver pennies were the sole coinage
        used in England until the shilling was introduced in 1487 and the pound,
        two years later, in 1489.
      </p>
      <h4>British Pound Notes and the Gold Standard</h4>
      <p>
        The first paper notes were introduced in 1694, with their legal basis
        being switched from silver to gold. The Bank of England, one of the
        first central banks in the world, was established a year later, in 1695.
        All Sterling notes were handwritten until 1855, when the bank began to
        print whole notes. In the early 20th century, more countries began to
        tie their currencies to gold. A gold standard was created, which allowed
        conversion between different countries' currencies and revolutionized
        trading and the international economy. Great Britain officially adopted
        the gold standard in 1816, though it had been using the system since 1670.
        The strength of the Sterling that came with the gold standard led to a
        period of major economic growth in Britain until 1914.
      </p>
      <h4>The British Pound and the Sterling Area</h4>
      <p>
        The British Pound was not only used in Great Britain, but also circulated
        through the colonies of the British Empire. The countries that used the
        Pound became to be known as the Sterling Area and the Pound grew to be
        globally popular, held as a reserve currency in many central banks.
        However, as the British economy started to decline the US Dollar grew
        in dominance. In 1940, the Pound was pegged to the US Dollar at a rate
        of 1 Pound to $4.03 US Dollars and many other countries followed, by
        pegging their respective currencies. In 1949, the Pound was devalued by
        30% and a second devaluation followed in 1967. When the British Pound
        was decimalized and began to float freely in the market, in 1971, the
        Sterling Area was terminated. Following, the British Pound experienced
        a number of highs and lows.
      </p>
      <ul>
        <li>1976: A sterling crisis arose and the UK turned to the International Monetary Fund for a loan</li>
        <li>1988: The GBP started to shadow the Deutsche Mark</li>
        <li>1990: The UK joined the European Exchange Rate Mechanism, though withdrew from it two years later</li>
        <li>1997: The control of interest rates became the responsibility of the Bank of England</li>
      </ul>
    </div>
  </div>
)

export default HomeView
