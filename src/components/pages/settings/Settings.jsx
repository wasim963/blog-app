import React from 'react';
import './settings.scss';

import { Sidebar } from '../../sidebar/Sidebar';
import ProfileImage from '../../../assets/images/post-image.jpg'

export const Settings = () => {
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
            <div className="ui-settings__wrapper__form">
                <label className='ui-settings__wrapper__form__title' htmlFor="">
                    Profile Picture
                </label>
                <div className="ui-settings__wrapper__form__group">
                    <img className='ui-settings__wrapper__form__group__pp'  src={ ProfileImage } alt="Profile Pic" srcset="" />
                    <input className='ui-settings__wrapper__form__group__fileInput' style={ { display: 'none' } } type="file" id='fileInput' />
                    <label className="ui-settings__wrapper__form__group__user" htmlFor="fileInput">
                        <i class="ui-settings__wrapper__form__group__user__icon far fa-user-circle"></i>
                    </label>
                </div>
                <div className="ui-settings__wrapper__form__group">
                    <label className='ui-settings__wrapper__form__group__label' htmlFor="username">Username</label>
                    <input className='ui-settings__wrapper__form__group__input textInput ' placeholder='Safak' type="text" id='username' />
                </div>
                <div className="ui-settings__wrapper__form__group">
                    <label className='ui-settings__wrapper__form__group__label' htmlFor="email">Email</label>
                    <input className='ui-settings__wrapper__form__group__input textInput' placeholder='safak@gmail.com'  type="text" id='email' />
                </div>
                <div className="ui-settings__wrapper__form__group">
                    <label className='ui-settings__wrapper__form__group__label' htmlFor="pass">Password</label>
                    <input className='ui-settings__wrapper__form__group__input textInput' type="password" id='pass' />
                </div>
                <button className='ui-settings__wrapper__form__submit'>Update</button>
            </div>
        </div>

        <Sidebar />
    </div> 
  );
};
