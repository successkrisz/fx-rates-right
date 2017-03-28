export default () => ({
  path : 'about',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const AboutView = require('./components/AboutView').default

      cb(null, AboutView)
    }, 'about')
  }
})
