import React from 'react';
import parse from 'html-react-parser';

// Local Dependencies
import './networkError.scss' ;
import { iconConfig } from '../../assets/icons/icon.config';

const iconView = ( props ) => {
  const name = props?.name;
  if( name ) {
    const markup = props[ name  ].markup;
    return parse( markup );
  }else {
    return null;
  }
} 

const getIcon = ( Compoenent = iconView , config  ) => {
  const GetIcon = ( props ) => {
    return(
      <Compoenent 
          { ...props }
          { ...config }
      />
    );
  }

  GetIcon.displayName = 'GetIcon'

  GetIcon.defaultProps = {}

  return GetIcon;
};

const Icon = ( config = {} ) => {
  return getIcon( iconView, config );
}

export const networkError = ( props ) => {
  const IconView = Icon( iconConfig );

  const errorClassname = props?.errorViewConfig?.errorClassname;
  return (
    <div className= { `ui-network-error ${ errorClassname }` } >
      <div className='ui-network-error__wrapper'>
        <div className='ui-network-error__wrapper__icon'>
           <IconView name="networkError" width="250" height="250" />
        </div>
        <div className='ui-network-error__wrapper__info'>
          <h1 className='ui-network-error__wrapper__info--title' >Error</h1>
          <p className='ui-network-error__wrapper__info--message' >Something went wrong!</p>
        </div>
      </div>
    </div>
  )
}

// set display name
networkError.displayName = 'networkError';

// set Default Props
networkError.defaultProps = {};