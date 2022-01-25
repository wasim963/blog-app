import React from 'react';
import PropTypes from 'prop-types';

import './header.scss'

import headerImage from '../../assets/images/header.jpg'

export function Header(props) {
  return(
    <div className='ui-header' >
        <div className="ui-header__titles">
            <div className="ui-header__titles__Sm">React & Node</div>
            <div className="ui-header__titles__Lg">Blog</div>
        </div>
        <img className='ui-header__image' src={ headerImage } alt='Header Pic' />
    </div>
  );
}

Header.propTypes = {};
