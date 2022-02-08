import React from 'react';
import './post.scss';

import { Link } from 'react-router-dom';
import PostImage from '../../assets/images/post-image.jpg';
export function Post({ post }) {

  const { categories } = post;
  return(
    <div className='ui-post'>
        <img className='ui-post__image'  src={ PostImage } alt="Post Pic" srcSet="" />
        <div className="ui-post__info">
            <div className="ui-post__info__cats">
                {
                    categories.map( ( cat, index ) => {
                        return (
                            <div className="ui-post__info__cats__cat" key={ index }>
                                { cat }
                            </div>
                        )
                    } )
                }
            </div>
            <Link className='ui-post__info__title link' to={`/posts/${ post._id }`} >{ post.title }</Link>
            <div className="ui-post__info__date">{ new Date( post.createdAt ).toDateString() }</div>
        </div>
        <p className="ui-post__description">
            { post.description }
        </p>
    </div>
  );
}

Post.propTypes = {};
