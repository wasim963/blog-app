import React from 'react'

export const networkError = () => {
  return (
    <div>
        <h3>Error</h3>
        <p>Something went wrong</p>
    </div>
  )
}

// set display name
networkError.displayName = 'networkError';

// set Default Props
networkError.defaultProps = {};