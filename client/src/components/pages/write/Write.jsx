import React, { useContext, useState } from 'react';

import './write.scss';
import WriteImage from '../../../assets/images/post-image.jpg';
import { Context } from '../../../context/Context';
import axios from 'axios';


export const Write = () => {
  const [ file, setFile ] = useState( null );
  const [ title, setTitle ] = useState( '' );
  const [ desc, setDesc ] = useState( '' );

  const { user } = useContext( Context );


  const handleSubmit = async ( e ) => {
      e.preventDefault();

      const newPost = {
          title,
          description: desc,
          username: user.username
      }
      if( file ) {
          const formData = new FormData();
          const fileName = Date.now() + file.name;
          formData.append( 'name', fileName );
          formData.append( 'file', file );
          newPost.photo = fileName
          try {
            await axios.post( '/upload', formData );
          } catch (error) {}
      }
      try {
        const res = await axios.post( '/posts', newPost );
        window.location.replace(`/posts/${ res.data._id }`);
      } catch (error) {}

  }


  return (
        <div className='ui-write'>
            {
                file &&
                <img
                    className='ui-write__image'
                    src={ URL.createObjectURL( file ) }
                    alt="Write Pic"
                />
            }
            <form className="ui-write__form" onSubmit={ handleSubmit } >
                <div className="ui-write__form__group" >
                    <label className='ui-write__form__group__label' htmlFor="fileInput">
                        <i className="ui-write__form__group__label__icon fas fa-plus"></i>
                    </label>
                    <input
                        className='ui-write__form__group__input fileInput'
                        type="file" id='fileInput'
                        style={ { display: 'none' } }
                        autoFocus={ true }
                        onChange={ e => setFile( e.target.files[ 0 ] ) }
                    />
                    <input
                        className='ui-write__form__group__input textInput'
                        type="text"
                        placeholder='Title'
                        onChange={ e => setTitle( e.target.value ) }
                    />
                </div>
                <div className="ui-write__form__group">
                    <textarea
                        className='ui-write__form__group__input textArea'
                        type="text"
                        placeholder='Tell Your Story...'
                        onChange={ e => setDesc( e.target.value ) }
                    />
                </div>
                <button className='ui-write__form__submitBtn' type='submit' >Publish</button>
            </form>
        </div>
    );
};
