import React from 'react';
import { Sidebar } from '../../sidebar/Sidebar';
import { SinglePost } from '../../singlePost/SinglePost';

import './single.scss';

export const Single = () => {
  return(
    <div className='ui-single'>
        <SinglePost />
        <Sidebar />
    </div>
  );
};
