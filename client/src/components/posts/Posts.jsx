import React from 'react';
import PropTypes from 'prop-types';

import './posts.scss'
import { Post } from '../post/Post';

export function Posts(props) {
  return (
    <div className='ui-posts'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

Posts.propTypes = {};
