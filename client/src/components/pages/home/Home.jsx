import React from 'react';
import PropTypes from 'prop-types';

import './home.scss'
import { Header } from '../../header/Header';
import { Posts } from '../../posts/Posts';
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
