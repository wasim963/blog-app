import React from 'react';
import './register.scss';

import { Link } from 'react-router-dom';

import loginPic from '../../../assets/images/login-pic.jpg'

export const Register = () => {
  return(
    <div className='ui-register'>
        <div className="ui-register__title">Register</div>
        <form className="ui-register__form">
            <label className="ui-register__form__label" htmlFor="username">Username</label>
            <input className="ui-register__form__input" placeholder='Enter your username...' type="text" id='username' />
            <label className="ui-register__form__label" htmlFor="email">Email</label>
            <input className="ui-register__form__input" placeholder='Enter your email...' type="text" id='email' />
            <label className="ui-register__form__label" htmlFor="pass">Password</label>
            <input className="ui-register__form__input" placeholder='Enter your password...' type="password" id='pass' />
            <button className="ui-register__form__registerBtn">Register</button>
        </form>
        <button className='ui-register__loginBtn'>
          <Link to='/login' style={ { textDecoration: 'none', color: 'inherit' } } >Login</Link>
        </button>
    </div>
  );
};
