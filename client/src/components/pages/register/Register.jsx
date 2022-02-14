import React, { useState } from 'react';
import './register.scss';

import { Link } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
  
  const [username, setUsername] = useState( '' );
  const [email, setEmail] = useState( '' );
  const [password, setPassword] = useState( '' );
  const [error, setError] = useState( false );

  const handleSubmit = async ( e ) => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      password
    }
    setError( false )
    try {
      await axios.post('/auth/register', newUser );
      window.location.replace('/login')
    } catch (error) {
      setError( true )
    }

    setUsername( '' );
    setEmail( '' );
    setPassword( '' );
  }

  return(
    <div className='ui-register'>
        <div className="ui-register__title">Register</div>
        <form className="ui-register__form" onSubmit={ handleSubmit } >
            <label className="ui-register__form__label" htmlFor="username">Username</label>
            <input 
              className="ui-register__form__input"
              placeholder='Enter your username...' 
              type="text" id='username'
              value={ username }
              onChange={ e => setUsername( e.target.value ) }
            />
            <label className="ui-register__form__label" htmlFor="email">Email</label>
            <input 
              className="ui-register__form__input"
              placeholder='Enter your email...'
              type="text" id='email'
              value={ email }
              onChange={ e => setEmail( e.target.value ) }
            />
            <label className="ui-register__form__label" htmlFor="pass">Password</label>
            <input
              className="ui-register__form__input"
              placeholder='Enter your password...'
              type="password" id='pass'
              value={ password }
              onChange={ e => setPassword( e.target.value ) }
            />
            <button className="ui-register__form__registerBtn" type='submit' >Register</button>
            {
              error && <span style={ { color: 'red', textAlign: 'center', marginTop: '10px' } } >Something went wrong!</span>
            }
        </form>
        <button className='ui-register__loginBtn'>
          <Link to='/login' style={ { textDecoration: 'none', color: 'inherit' } } >Login</Link>
        </button>
    </div>
  );
};
