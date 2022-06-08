import React, { useState, useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

// Local Dependencies
import { Context } from '../../context/Context';
import './singlePost.scss';

export const SinglePost = () => {
  const [ post, setPost ] = useState( {} );
  const [ title, setTitle ] = useState( post.title );
  const [ desc , setDesc ] = useState( post.description );
  const [ formMode, setFormMode ] = useState( false );
  const [ updated , setUpdated ] = useState( false );

  const location = useLocation();
  const postId = location.pathname.split('/')[ 2 ];
  const { user } = useContext( Context );

  const PF = 'http://localhost:5000/uploads/';

  useEffect( () => {
      const fetchPost = async () => {
        try {
            const res = await axios.get(`/posts/${ postId }`);
            setPost( res.data );
        } catch (err) {
          console.log( err );
        }
      }
      fetchPost();

  }, [ postId ] );

  /**
   * Update a post
   */
  const handleSubmit = async ( e ) => {
      e.preventDefault();

      const updatedPost = {
          title,
          description: desc,
          username: user.username
      }

      try {
          const res = axios.put(`/posts/${ post._id }`, updatedPost, { 
            headers: { auth_token: 'Bearer ' + user.accessToken  } 
        }  );

          res && setUpdated( true );
          window.location.reload();
      } catch (error) {
          console.log( error )
      }
  }

  /**
   * Delete a post
   */
  const handleDelete = async () => {
      try {
            await axios.delete(`/posts/${ postId }`, { 
                    headers: { auth_token: 'Bearer ' + user.accessToken  } 
                } 
            )
            window.location.replace( '/' );
      } catch (error) {
          
      }
  }

  return(
    <div className='ui-singlePost'>
        <div className="ui-singlePost__wrapper">
            <img className='ui-singlePost__wrapper__image' src={ PF + post.photo } alt="Single Post Pic" srcSet="" />
            <div className="ui-singlePost__wrapper__header">
                {
                    formMode ?
                    <input
                        className="ui-singlePost__wrapper__header__input"
                        type='text'
                        onChange={ e => setTitle( e.target.value ) }
                        defaultValue={ post.title }
                        autoFocus={ true }
                    /> :
                    <p className="ui-singlePost__wrapper__header__title">
                        <span> { post.title } </span>
                    </p>
                }
                {
                    !formMode && user && user.username === post.username &&
                    <div className="ui-singlePost__wrapper__header__icons">
                        <i 
                            className="ui-singlePost__wrapper__header__icons__icon far fa-edit"
                            onClick={ e => setFormMode( true ) }
                        ></i>
                        <i 
                            className="ui-singlePost__wrapper__header__icons__icon far fa-trash-alt"
                            onClick={ handleDelete }
                        ></i>
                    </div>
                }
            </div>
            <div className="ui-singlePost__wrapper__info">
                {
                    formMode ?
                    <textarea
                        className="ui-singlePost__wrapper__info__input"
                        type='text'
                        defaultValue={ post.description }
                        onChange={ e => setDesc( e.target.value ) }
                    /> :
                    <>
                        <div className="ui-singlePost__wrapper__info__writer">
                            <span className='ui-singlePost__wrapper__info__writer__title' >Author: </span>
                            <Link className='ui-singlePost__wrapper__info__writer__value' to={ `/?user=${ post.username }` } >{ post.username }</Link>
                        </div>
                        <div className="ui-singlePost__wrapper__info__date">{ new Date( post.createdAt ).toDateString() }</div>
                    </>
                }
            </div>
            <div className="ui-singlePost__wrapper__description">
                {
                    formMode ?
                    <div className="ui-singlePost__wrapper__description__navigation">
                        <button
                            className="ui-singlePost__wrapper__description__navigation__submit"
                            type='submit'
                            onClick={ handleSubmit }
                        > Update </button>
                        <button
                            className="ui-singlePost__wrapper__description__navigation__cancel"
                            type='submit'
                            onClick={ e => setFormMode( false ) }
                        > Cancel </button>
                    </div> :
                    <span>{ post.description }</span>
                }
            </div>
            {
                updated &&
                <div className='ui-singlePost__wrapper__message' >
                    <span>Post successfully updated!</span>
                </div>
            }
        </div>
    </div>
  );
};
