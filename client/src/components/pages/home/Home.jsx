import React from 'react';

// Local Dependencies
import './home.scss'
import { Header } from '../../header/Header';
import { Posts } from '../../posts/Posts.container';
import { Sidebar } from '../../sidebar/Sidebar';

export function Home(props) {
  return(
      <>
        <Header />
        <div className='ui-home'>
            <Posts />
            <Sidebar />
        </div>
      </>
  );
}

Home.propTypes = {};
