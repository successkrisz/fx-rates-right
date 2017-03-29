import { browserHistory } from 'react-router'

/**
 * Redirect factory function
 * Designed to be used as a click handler for elements
 * Returns a function which once called triggers a redirect
 * @param {string} path
 * @returns {function}
 */
export const redirectsTo = (path = '/') => () => {
  browserHistory.push(path)
}
