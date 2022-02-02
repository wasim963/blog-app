import React from 'react';
import PropTypes from 'prop-types';

import './post.scss';

import { useNavigate } from 'react-router-dom';

import PostImage from '../../assets/images/post-image.jpg'

export function Post(props) {


  const navigate = useNavigate();

  return(
    <div className='ui-post'>
        <img className='ui-post__image' onClick={ () => navigate('/posts/1') }  src={ PostImage } alt="Post Pic" srcset="" />
        <div className="ui-post__info">
            <div className="ui-post__info__cats">
                <div className="ui-post__info__cats__cat">
                    Life
                </div>
                <div className="ui-post__info__cats__cat">
                    Style
                </div>
            </div>
            <div className="ui-post__info__title">
                Lorem ipsum dolor sit amet.
            </div>
            <div className="ui-post__info__date">1 hour ago</div>
        </div>
        <p className="ui-post__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus quibusdam consectetur saepe aut aliquid necessitatibus amet tempore expedita,
            reiciendis veniam ipsam quasi fugit quam totam dicta quaerat. Magnam, ab praesentium.
            Vero sed alias, velit voluptate ullam sit earum nesciunt, assumenda omnis dolorum optio,
            voluptatibus cum tenetur! Sapiente eum ab impedit modi saepe dolores architecto sint repellendus quisquam,
            distinctio alias sequi. consectetur saepe aut aliquid necessitatibus amet tempore expedita,
            reiciendis veniam ipsam quasi fugit quam totam dicta quaerat. Magnam, ab praesentium.
            Vero sed alias, velit voluptate ullam sit earum nesciunt, assumenda omnis dolorum optio,
            voluptatibus cum tenetur! Sapiente eum ab impedit modi saepe dolores architecto sint repellendus quisquam,
            distinctio alias sequi.
        </p>
    </div>
  );
}

Post.propTypes = {};
