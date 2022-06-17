import React, { useState, useContext } from 'react';
import axios from 'axios';

// Local Dependencies
import './settings.scss';
import { Sidebar } from '../../sidebar/Sidebar';
import { Context } from '../../../context/Context';
import { UPDATE_START, UPDATE_SUCCESS, UPDATE_FAILURE } from '../../../constants/ActionTypes';


export const Settings = () => {
  const { user, dispatch, accessToken } = useContext( Context );

  const [ file, setFile] = useState( null )
  const [ username , setUsername ] = useState( user.username )
  const [ email , setEmail ] = useState( user.email )
  const [ pass, setPass ] = useState( '' );
  const [ success , setSuccess ] = useState( false )

  const PF = 'http://localhost:5000/uploads/';

  /**
   * Used for updating user account
   * @param {*} e 
   */
  const handleSubmit = async ( e ) => {
      e.preventDefault();

      const updatedUser = { userId: user._id, username, email, password: pass }

      dispatch( { type: UPDATE_START } );

      if( file ) {
          const formData = new FormData();
          const fileName = Date.now() + file.name;
          formData.append( 'name', fileName );
          formData.append( 'file', file );
          updatedUser.profilePic = fileName

          try {
              await axios.post('/upload', formData);
          } catch (error) {}
      }

      try {
        const res = await axios.put( `/users/${ user._id }`, updatedUser, { headers: { auth_token: 'Bearer ' + accessToken } } );
        dispatch( { type: UPDATE_SUCCESS, payload: res.data } );
        setSuccess( true )
      } catch ( error ) { 
          dispatch( { type: UPDATE_FAILURE } )
       }
  }


  return (
    <div className='ui-settings'>
        <div className="ui-settings__wrapper">
            <div className="ui-settings__wrapper__header">
                <span className='ui-settings__wrapper__header__title' >
                    Update Your Account
                </span>
                <span className='ui-settings__wrapper__header__delete'>
                    Delete Account
                </span>
            </div>
            <form className="ui-settings__wrapper__form" onSubmit={ handleSubmit }>
                <label className='ui-settings__wrapper__form__title' htmlFor="">
                    Profile Picture
                </label>
                <div className="ui-settings__wrapper__form__group">
                    <img
                        className='ui-settings__wrapper__form__group__pp'
                        src={ file ? URL.createObjectURL( file ) : PF + user.profilePic }
                        alt="Profile Pic"
                        srcset=""
                    />
                    <input 
                        className='ui-settings__wrapper__form__group__fileInput'
                        style={ { display: 'none' } }
                        type="file"
                        id='fileInput'
                        onChange={ e => setFile( e.target.files[ 0 ] ) }
                    />
                    <label className="ui-settings__wrapper__form__group__user" htmlFor="fileInput">
                        <i class="ui-settings__wrapper__form__group__user__icon far fa-user-circle"></i>
                    </label>
                </div>
                <div className="ui-settings__wrapper__form__group">
                    <label className='ui-settings__wrapper__form__group__label' htmlFor="username">Username</label>
                    <input
                        className='ui-settings__wrapper__form__group__input textInput'
                        placeholder={ user.username }
                        type="text"
                        id='username'
                        value={ username }
                        onChange={ e => setUsername( e.target.value ) }
                    />
                </div>
                <div className="ui-settings__wrapper__form__group">
                    <label className='ui-settings__wrapper__form__group__label' htmlFor="email">Email</label>
                    <input
                        className='ui-settings__wrapper__form__group__input textInput'
                        placeholder={ user.email }
                        type="text"
                        id='email'
                        value={ email }
                        onChange={ e => setEmail( e.target.value ) }
                    />
                </div>
                <div className="ui-settings__wrapper__form__group">
                    <label className='ui-settings__wrapper__form__group__label' htmlFor="pass">Password</label>
                    <input
                        className='ui-settings__wrapper__form__group__input textInput'
                        type="password"
                        id='pass'
                        value={ pass }
                        onChange={ e => setPass( e.target.value ) }
                    />
                </div>
                <button
                    className='ui-settings__wrapper__form__submit'
                    type='submit'
                > Update </button>
                {
                    success && 
                    <span
                        style={ { color: 'green', textAlign:'center', marginTop: '20px' } }
                    >Account has been updated!</span>
                }
            </form>
        </div>

        <Sidebar />
    </div> 
  );
};
