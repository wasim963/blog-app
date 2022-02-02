import React from 'react';
import PropTypes from 'prop-types';

import './topbar.scss';

import { NavLink, useNavigate } from 'react-router-dom';
import profileIcon from '../../assets/images/p-icon2.jpg';




export function Topbar(props) {

   const navigate = useNavigate(); 
   const user = false;

  return(
    <div className='ui-topbar' >
        <div className="ui-topbar__left">
            <i className="ui-topbar__left__icon fab fa-facebook-square"></i>
            <i className="ui-topbar__left__icon fab fa-twitter-square"></i>
            <i className="ui-topbar__left__icon fab fa-pinterest-square"></i>
            <i className="ui-topbar__left__icon fab fa-linkedin"></i>

        </div>
        <div className="ui-topbar__center">
            <ul className="ui-topbar__center__list">
                <NavLink className="ui-topbar__center__list__item" to='/' > HOME </NavLink>
                <NavLink className="ui-topbar__center__list__item" to='/about' > ABOUT </NavLink>
                <NavLink className="ui-topbar__center__list__item" to='/contact' > CONTACT </NavLink>
                <NavLink className="ui-topbar__center__list__item" to='/write' > WRITE </NavLink>
                { user && <NavLink className="ui-topbar__center__list__item" to='/logout' > LOGOUT </NavLink> }
            </ul>
        </div>
        <div className="ui-topbar__right">
            {
                user ? (
                    <img className='ui-topbar__right__image' onClick={ () => navigate( '/setting' )} src={ profileIcon } alt='Profile Pic' />
                ) :
                (
                    <ul className="ui-topbar__right__list">
                        <NavLink className="ui-topbar__right__list__item" to='/login' > LOGIN </NavLink>
                        <NavLink className="ui-topbar__right__list__item" to='/register' > REGISTER </NavLink>
                    </ul>
                )
            }
            <i className="ui-topbar__right__searchIcon fas fa-search"></i>
        </div>
    </div>
  );
}

Topbar.propTypes = {};
