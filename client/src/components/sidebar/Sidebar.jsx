import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Local Dependencies
import AboutMePic from '../../assets/images/p-icon.jpg';
import './sidebar.scss';

export function Sidebar(props) {
  
  const [ cats, setCats ] = useState( [] );

  useEffect(() => {
    const fetchCats = async () => {
        try {
            const res = await axios.get( '/categories/' );
            setCats( res.data )
        } catch (err) {
            console.log( err );
        }
    }

    fetchCats();
  }, [] );
  
  return (
    <div className='ui-sidebar'>
        <div className="ui-sidebar__item">
            <div className="ui-sidebar__item__title">
                <span>About Me</span>
            </div>
            <img className='ui-sidebar__item__image' src={ AboutMePic } alt="About Me Pic" srcSet="" />
            <div className="ui-sidebar__item__description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque alias ut,
                molestiae blanditiis perferendis veritatis magnam voluptate quos
                iste repellat natus minus. Debitis illum suscipit deleniti culpa sed, ut assumenda?
                Maiores repellendus dicta pariatur cumque accusamus? Quidem consequuntur voluptas
                voluptate natus ullam modi laboriosam expedita sapiente atque, cum tenetur quae aut,
                provident itaque iure nostrum? Hic sapiente provident vitae iusto.
                </p>
            </div>
        </div>
        <div className="ui-sidebar__item">
            <div className="ui-sidebar__item__title">
                <span>Categories</span>
            </div>
            <div className="ui-sidebar__item__catgories">
                {
                    cats.map( ( cat, index ) => {
                        return( 
                            <Link to={ `/?cat=${ cat.name }` } className="ui-sidebar__item__catgories__item" key={index} >{ cat.name }</Link>
                         )
                    } )
                }
            </div>
        </div>
        <div className="ui-sidebar__item">
            <div className="ui-sidebar__item__title">
                <span>Follow Us</span> 
            </div>
            <div className="ui-sidebar__item__social">
                <i className="ui-sidebar__item__social__icon fab fa-facebook-square"></i>
                <i className="ui-sidebar__item__social__icon fab fa-twitter-square"></i>
                <i className="ui-sidebar__item__social__icon fab fa-pinterest-square"></i>
                <i className="ui-sidebar__item__social__icon fab fa-linkedin"></i>
            </div>
        </div>
    </div>
  );
}

Sidebar.propTypes = {};
