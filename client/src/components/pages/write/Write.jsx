import React from 'react';

import './write.scss';
import WriteImage from '../../../assets/images/post-image.jpg'

export const Write = () => {
  return (
        <div className='ui-write'>
            <img className='ui-write__image' src={ WriteImage } alt="Write Pic" />
            <form className="ui-write__form">
                <div className="ui-write__form__group">
                    <label className='ui-write__form__group__label' htmlFor="fileInput">
                        <i className="ui-write__form__group__label__icon fas fa-plus"></i>
                    </label>
                    <input className='ui-write__form__group__input fileInput' type="file" id='fileInput' style={ { display: 'none' } } />
                    <input className='ui-write__form__group__input textInput' type="text" placeholder='Title' />
                </div>
                <div className="ui-write__form__group">
                    <textarea className='ui-write__form__group__input textArea' type="text" placeholder='Tell Your Story...' />
                </div>
                <button className='ui-write__form__submitBtn' >Publish</button>
            </form>
        </div>
    );
};
