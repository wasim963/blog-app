import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// Local Dependencies
import { posts as PostsView } from './posts.view';

export function Posts( props ) {
    const [ posts, setPosts ] = useState( [] );
    const [ isFetching, setIsFetching ] = useState( false );
    const [ networkStatus, setNetworkStatus ] = useState( undefined );
    const location = useLocation();
    const search = location.search;

    useEffect( () => {
        setIsFetching( true );

        const fetchPosts = async () => {
            try {
                const res = await axios.get(`/posts/${ search }`);
                if( res?.status === 200 ) {
                    setPosts( res.data );
                    setNetworkStatus( 'success' );
                    setIsFetching( false );
                } else {
                    setNetworkStatus( 'failure' );
                    setIsFetching( false );
                }
            } catch (error) {
                setNetworkStatus( 'failure' );
                setIsFetching( false );
            }
        }
        fetchPosts();
        
    }, [ search ] );

    return (
        <PostsView
            posts={ posts }
            isFetching={ isFetching }
            networkStatus={ networkStatus }
        />
    );
}

//set display name
Posts.displayName = 'Posts';

// set PropTypes
Posts.propTypes = {};

// set default propTypes
Posts.defaultProps = {};
