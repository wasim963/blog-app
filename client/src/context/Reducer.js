import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    UPDATE_START,
    UPDATE_SUCCESS,
    UPDATE_FAILURE 
} from '../constants/ActionTypes';

export const Reducer = ( state, action ) => {

    switch( action.type ) {
        case LOGIN_START:
            return {
                user: null,
                isFetching: true,
                error: false,
                accessToken: null
            }
        case LOGIN_SUCCESS:
            return {
                user: action.payload?.user,
                isFetching:false,
                error: false,
                accessToken: action.payload?.accessToken
            }
        case LOGIN_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: true,
                accessToken: null
            }
        case LOGOUT_SUCCESS:
            return {
                user: null,
                isFetching: false,
                error:false,
                accessToken: null
            }
        case UPDATE_START:
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case UPDATE_SUCCESS:
            return {
                user: action.payload,
                isFetching:false,
                error: false
            }
        case UPDATE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}