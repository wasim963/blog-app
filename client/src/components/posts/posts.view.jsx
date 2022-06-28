import React from 'react';

// Local Dependencies
import './posts.scss'
import { Post } from '../post/Post';
import withNetworkState from '../../hoc/withNetworkState.hoc';

function _posts( props ) {
  const { posts } = props;
  
  return (
    <div className='ui-posts'>
      {
        posts.map( post => <Post post = { post } key= { post._id } /> )
      }
    </div>
  );
}

//set display name
_posts.displayName = 'postsView';

// set PropTypes
_posts.propTypes = {};

// set default propTypes
_posts.defaultProps = {};


const PostsPreloader = () => {
  return (
    <h3> Posts Loading...</h3>
  )
}

PostsPreloader.displayName = PostsPreloader;

export const posts = withNetworkState( PostsPreloader, _posts );
