import React, { PropTypes } from 'react'

const Spinner = ({ size = 1, type = 'spinner' }) => {
  const classNames = (type === 'spinner')
    ? `fa fa-spinner fa-pulse fa-${size}x fa-fw`
    : `fa fa-${type} fa-spin fa-${size}x fa-fw`

  return (
    <span>
      <i className={classNames} />
      <span className='sr-only'>Loading...</span>
    </span>
  )
}

Spinner.propTypes = {
  size: PropTypes.oneOf(['1', '2', '3', '4', '5', 1, 2, 3, 4, 5]),
  type: PropTypes.oneOf(['spinner', 'refresh', 'cog', 'circle-o-notch'])
}

export default Spinner
