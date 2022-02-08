import React, { useState, useEffect } from 'react';
import './singlePost.scss';

import singlePostImage from '../../assets/images/post-image.jpg';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';


export const SinglePost = () => {

  const [ post, setPost ] = useState( {} );
  const location = useLocation();
  const postId = location.pathname.split('/')[ 2 ];

  
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

  }, [ postId ] )



  return(
    <div className='ui-singlePost'>
        <div className="ui-singlePost__wrapper">
            <img className='ui-singlePost__wrapper__image' src={ singlePostImage } alt="Single Post Pic" srcSet="" />
            <div className="ui-singlePost__wrapper__header">
                <p className="ui-singlePost__wrapper__header__title">
                    { post.title }
                </p>
                <div className="ui-singlePost__wrapper__header__icons">
                    <i className="ui-singlePost__wrapper__header__icons__icon far fa-edit"></i>
                    <i className="ui-singlePost__wrapper__header__icons__icon far fa-trash-alt"></i>
                </div>
            </div>
            <div className="ui-singlePost__wrapper__info">
                <div className="ui-singlePost__wrapper__info__writer">
                    <span className='ui-singlePost__wrapper__info__writer__title' >Author: </span>
                    <Link className='ui-singlePost__wrapper__info__writer__value' to={ `/?user=${ post.username }` } >{ post.username }</Link>
                </div>
                <div className="ui-singlePost__wrapper__info__date">{ new Date( post.createdAt ).toDateString() }</div>
            </div>
            <div className="ui-singlePost__wrapper__description">
                { post.description }
            </div>
        </div>
    </div>
  );
};
