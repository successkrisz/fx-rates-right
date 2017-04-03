import { fetchCurrencies } from 'lib/api'
import fetchMock from 'fetch-mock'

describe('(lib/Module) API', () => {
  const resSuccess = {
    status: 200,
    body: {
      date: '2017-03-01',
      base: 'GBP',
      rates: { EUR: 1.2 }
    }
  }

  afterEach(() => {
    fetchMock.restore()
  })
  it('Should export fetchCurrencies as a function', () => {
    expect(fetchCurrencies).to.be.a('function')
  })

  it('Should call fetch when valid date and base is supplied', () => {
    const validParams = {
      date: '2017-03-01',
      base: 'GBP'
    }

    fetchMock.get('begin:https://api.fixer.io/', resSuccess)

    return fetchCurrencies(validParams).then((data) => {
      expect(fetchMock.called('begin:https://api.fixer.io/')).to.be.true
    })
  })

  it('Should not call fetch when date supplied is not valid', async () => {
    const invalidParams = {
      date: '1990-03-01',
      base: 'GBP'
    }

    fetchMock.get('begin:https://api.fixer.io/', resSuccess)

    try {
      await fetchCurrencies(invalidParams)
    } catch (error) {
      expect(fetchMock.called('begin:https://api.fixer.io/')).to.be.false
    }
  })

  it('Should throw an error when date supplied is not valid', async () => {
    const invalidParams = {
      date: '1990-03-01',
      base: 'GBP'
    }

    fetchMock.get('begin:https://api.fixer.io/', resSuccess)

    try {
      await fetchCurrencies(invalidParams)
    } catch (error) {
      expect(error.message).to.equal('Date Supplied is too old')
    }
  })

  it('Should throw an error when fetch returns a non 2xx status code', async () => {
    const invalidParams = {
      date: '2017-03-01',
      base: 'XXX'
    }

    fetchMock.get('begin:https://api.fixer.io/', 404)

    try {
      await fetchCurrencies(invalidParams)
    } catch (error) {
      expect(fetchMock.called('begin:https://api.fixer.io/')).to.be.true
      expect(error.message).to.equal('Not Found')
    }
  })
})
