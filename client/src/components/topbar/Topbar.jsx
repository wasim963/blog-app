import React, { useContext } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

// Local Dependencies
import './topbar.scss';
import { Context } from '../../context/Context';
import { LOGOUT_SUCCESS, LOGIN_FAILURE } from '../../constants/ActionTypes';
export function Topbar(props) {
    const navigate = useNavigate(); 
    const { user, dispatch, accessToken } = useContext( Context );
    const PF = 'http://localhost:5000/uploads/';

    /**
    * Used to logout of the portal
    */
    const handleLogout = async () => {
        try {
            const res = await axios.post( `/auth/logout/${ user._id }`, {}, { headers: { auth_token: 'Bearer ' + accessToken } } )
            if( res.data.status === 'success' ) { 
                dispatch( { type: LOGOUT_SUCCESS } );
            } else {
                console.log( res );
            }

            window.location.replace('/')
        } catch (error) {
            dispatch( { type: LOGIN_FAILURE } )
        }
    }

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
                    { user && <li className="ui-topbar__center__list__item" onClick={ handleLogout } > LOGOUT </li> }
                </ul>
            </div>
            <div className="ui-topbar__right">
                {
                    user ? (
                        <img className='ui-topbar__right__image' onClick={ () => navigate( '/setting' )} src={ PF + user.profilePic } alt='Profile Pic' />
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
