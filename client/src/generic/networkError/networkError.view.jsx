import React from 'react';
import './networkError.scss' ;
// import { networkErrorSvg as NetworkErrorSvg }  from '../../assets/icons';

import NetworkErrorSvg from   '../../assets/icons/networkErrorSvg.svg'



export const networkError = () => {
  return (
    <div className='ui-network-error' >
      <div className='ui-network-error__wrapper'>
        <div className='ui-network-error__wrapper__icon'>
          {/* <img src={ NetworkErrorSvg } alt="Network Error" />
           */}
           <NetworkErrorSvg />
        </div>
        <div className='ui-network-error__wrapper__info'>
          <h3>Error</h3>
          <p>Something went wrong</p>
        </div>
      </div>
    </div>
  )
}

// set display name
networkError.displayName = 'networkError';

// set Default Props
networkError.defaultProps = {};