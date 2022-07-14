import React from 'react';

// Local Dependencies
import { Sidebar } from '../../sidebar/Sidebar';
import { SinglePost } from '../../singlePost/SinglePost.container';
import './single.scss';

export const Single = () => {
  return(
    <div className='ui-single'>
        <div className='ui-single__widget ui-single__widget__singlePost' >
            <SinglePost />
        </div>
        <div className='ui-single__widget ui-single__widget__sidebar' >
            <Sidebar />
        </div>
    </div>
  );
};
