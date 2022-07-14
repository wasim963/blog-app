import React from 'react';
import { Link } from 'react-router-dom';

// local Dependencies
import withNetworkState from '../../hoc/withNetworkState.hoc';
import './singlePost.scss';

const _singlePost = ( props ) => {

    const { user, post, title, desc, formMode, updated, setTitle, setDesc, setFormMode,
            setUpdated, handleDelete, handleSubmit } = props;

    const PF = 'http://localhost:5000/uploads/';

    return (
        <div className='ui-singlePost'>
            <div className="ui-singlePost__wrapper">
                <img className='ui-singlePost__wrapper__image' src={ PF + post.photo } alt="Single Post Pic" srcSet="" />
                <div className="ui-singlePost__wrapper__header">
                    {
                        formMode ?
                        <input
                            className="ui-singlePost__wrapper__header__input"
                            type='text'
                            onChange={ e => setTitle( e.target.value ) }
                            defaultValue={ post.title }
                            autoFocus={ true }
                        /> :
                        <p className="ui-singlePost__wrapper__header__title">
                            <span> { post.title } </span>
                        </p>
                    }
                    {
                        !formMode && user && user.username === post.username &&
                        <div className="ui-singlePost__wrapper__header__icons">
                            <i 
                                className="ui-singlePost__wrapper__header__icons__icon far fa-edit"
                                onClick={ e => setFormMode( true ) }
                            ></i>
                            <i 
                                className="ui-singlePost__wrapper__header__icons__icon far fa-trash-alt"
                                onClick={ handleDelete }
                            ></i>
                        </div>
                    }
                </div>
                <div className="ui-singlePost__wrapper__info">
                    {
                        formMode ?
                        <textarea
                            className="ui-singlePost__wrapper__info__input"
                            type='text'
                            defaultValue={ post.description }
                            onChange={ e => setDesc( e.target.value ) }
                        /> :
                        <>
                            <div className="ui-singlePost__wrapper__info__writer">
                                <span className='ui-singlePost__wrapper__info__writer__title' >Author: </span>
                                <Link className='ui-singlePost__wrapper__info__writer__value' to={ `/?user=${ post.username }` } >{ post.username }</Link>
                            </div>
                            <div className="ui-singlePost__wrapper__info__date">{ new Date( post.createdAt ).toDateString() }</div>
                        </>
                    }
                </div>
                <div className="ui-singlePost__wrapper__description">
                    {
                        formMode ?
                        <div className="ui-singlePost__wrapper__description__navigation">
                            <button
                                className="ui-singlePost__wrapper__description__navigation__submit"
                                type='submit'
                                onClick={ handleSubmit }
                            > Update </button>
                            <button
                                className="ui-singlePost__wrapper__description__navigation__cancel"
                                type='submit'
                                onClick={ e => setFormMode( false ) }
                            > Cancel </button>
                        </div> :
                        <span>{ post.description }</span>
                    }
                </div>
                {
                    updated &&
                    <div className='ui-singlePost__wrapper__message' >
                        <span>Post successfully updated!</span>
                    </div>
                }
            </div>
        </div>
    )
}

//set display name
_singlePost.displayName = 'singlePostView';

// set PropTypes
_singlePost.propTypes = {};

// set default propTypes
_singlePost.defaultProps = {};

const SinglePostPreloader = () => {
    return(
        <div className='ui-singlePost-preloader' >
            <h2>Single Post Prelaoder</h2>
        </div>
    );
}


export const singlePost = withNetworkState( SinglePostPreloader, _singlePost )
