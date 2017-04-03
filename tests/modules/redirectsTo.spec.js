import { redirectsTo } from 'modules/redirectsTo'
import { browserHistory } from 'react-router'

describe('(Module) redirectsTo', () => {
  let sandbox, historyPushStub

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    historyPushStub = sandbox.stub(browserHistory, 'push')
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('Should export redirectsTo as a function', () => {
    expect(redirectsTo).to.be.a('function')
  })

  describe('(function) redirectsTo', () => {
    it('Should be a thunk', () => {
      expect(redirectsTo()).to.be.a('function')
    })

    it('Should push `/` to browserHistory when called without arguments', () => {
      redirectsTo()()
      expect(historyPushStub).to.have.been.calledWith('/')
    })

    it('Should push `/path` to browserHistory when called with `/push`', () => {
      redirectsTo('/push')()
      expect(historyPushStub.firstCall.args[0]).to.equal('/push')
    })
  })
})
