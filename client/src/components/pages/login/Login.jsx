import React from 'react';
import './login.scss';

import { Link } from 'react-router-dom';

import loginPic from '../../../assets/images/login-pic.jpg'

export const Login = () => {
  return(
    <div className='ui-login'>
        <div className="ui-login__title">Login</div>
        <form className="ui-login__form">
            <label className="ui-login__form__label" htmlFor="email">Email</label>
            <input className="ui-login__form__input" placeholder='Enter your email...' type="text" id='email' />
            <label className="ui-login__form__label" htmlFor="pass">Password</label>
            <input className="ui-login__form__input" placeholder='Enter your password...' type="password" id='pass' />
            <button className="ui-login__form__loginBtn">Login</button>
        </form>
        <button className='ui-login__registerBtn'>
          <Link to='/register' style={ { textDecoration: 'none', color: 'inherit' } }  >Register</Link>
        </button>
    </div>
  );
};
