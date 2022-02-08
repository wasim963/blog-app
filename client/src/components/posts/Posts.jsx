import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import './posts.scss'
import { Post } from '../post/Post';

export function Posts(props) {
  const [ posts, setPosts ] = useState( [] );
  const location = useLocation();
  const search = location.search

  useEffect( () => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts/${ search }`);
      setPosts( res.data )
    }
    fetchPosts();
  }, [ search ] );

  return (
    <div className='ui-posts'>
      {
        posts.map( post => <Post post = { post } key= { post._id } /> )
      }
    </div>
  );
}

Posts.propTypes = {};
