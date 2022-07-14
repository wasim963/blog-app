import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// Local Dependencies
import { Context } from '../../context/Context';
import { singlePost as SinglePostView } from './singlePost.view';

export const SinglePost = () => {

    const [ post, setPost ] = useState( {} );
    const [ title, setTitle ] = useState( post.title );
    const [ desc , setDesc ] = useState( post.description );
    const [ formMode, setFormMode ] = useState( false );
    const [ updated , setUpdated ] = useState( false );
    const [ isFetching, setIsFetching ] = useState( false );
    const [ networkStatus, setNetworkStatus ] = useState( undefined );
    
    const location = useLocation();
    const postId = location.pathname.split('/')[ 2 ];
    const { user, accessToken } = useContext( Context );

    useEffect( () => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`/posts/${ postId }`);
                setPost( res.data );
                setNetworkStatus( 'success' );
                setIsFetching( false );
            } catch (err) {
                console.log( err );
                setNetworkStatus( 'failure' );
                setIsFetching( false );
            }
        }
        fetchPost();

    }, [ postId ] );

    /**
     * Update a post
     */
    const handleSubmit = async ( e ) => {
        e.preventDefault();

        const updatedPost = {
            title,
            description: desc,
            username: user.username
        }

        try {
            const res = axios.put(`/posts/${ post._id }`, updatedPost, { 
                headers: { auth_token: 'Bearer ' + accessToken  } 
            }  );

            res && setUpdated( true );
            window.location.reload();
        } catch (error) {
            console.log( error )
        }
    }

    /**
     * Delete a post
     */
    const handleDelete = async () => {
        try {
                await axios.delete(`/posts/${ postId }`, { 
                        headers: { auth_token: 'Bearer ' + accessToken  } 
                    } 
                )
                window.location.replace( '/' );
        } catch (error) {
            
        }
    }

    return(
        <SinglePostView
            user={ user }
            post= { post }
            title= { title }
            desc={ desc }
            formMode={ formMode }
            updated={ updated }
            setTitle={ setTitle }
            setDesc={ setDesc }
            setFormMode={ setFormMode }
            setUpdated={ setUpdated }
            handleDelete= { handleDelete }
            handleSubmit= { handleSubmit }

            isFetching={ isFetching }
            networkStatus={ networkStatus }
        />
    );
}