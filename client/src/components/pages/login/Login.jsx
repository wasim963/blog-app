import React, { useRef, useContext, useState } from 'react';
import './login.scss';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../../../constants/ActionTypes';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../../context/Context';

export const Login = () => {
  const userRef = useRef( '' );
  const passRef = useRef( '' );
  const [ error, setError ] = useState( false );
  const [ message, setMessage ] = useState( '' );
  const { dispatch, isFetching } = useContext( Context );

  const handleSubmit = async ( e ) => {
    e.preventDefault();

    const user = { 
      username: userRef.current.value,
      password: passRef.current.value
    }

    if( user.username === '' || user.password === '' ) {
      setError( true );
      setMessage( 'Please enter username and password!' )
    } else {

      dispatch( { type: LOGIN_START } );
      setError( false )
      try {
        const res = await axios.post('/auth/login/', user );
        if( res.data.status === 'success' ) {
          dispatch( { type: LOGIN_SUCCESS, payload: res.data.user } );
          res.data && window.location.replace('/')
        } else {
          dispatch( { type: LOGIN_FAILURE } );
          setError( true );
          setMessage( res.data.message )
        }
      } catch (error) {
        dispatch( { type: LOGIN_FAILURE } );
        setError( true );
        setMessage( 'Something went wrong!' )
      }
    }

  }


  return(
    <div className='ui-login'>
        <div className="ui-login__title">Login</div>
        <form className="ui-login__form" onSubmit={ handleSubmit } >
            <label className="ui-login__form__label" htmlFor="username">Username</label>
            <input 
              className="ui-login__form__input"
              placeholder='Enter your username...'
              type="text" id='username'
              ref={userRef}
            />
            <label className="ui-login__form__label" htmlFor="pass">Password</label>
            <input 
              className="ui-login__form__input"
              placeholder='Enter your password...'
              type="password" id='pass'
              ref={ passRef }
            />
            <button
              className="ui-login__form__loginBtn"
              disabled={ isFetching }
              type='submit'
            >Login
            </button>
            {
              error && <span style={ { color: 'red', marginTop: '10px', textAlign: 'center' } } > { message } </span>
            }
        </form>
        <button className='ui-login__registerBtn'>
          <Link to='/register' style={ { textDecoration: 'none', color: 'inherit' } } >Register</Link>
        </button>
    </div>
  );
};
