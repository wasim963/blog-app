import { 
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    UPDATE_START,
    UPDATE_SUCCESS,
    UPDATE_FAILURE
} from '../constants/ActionTypes'; 

export const loginStart = () => {
    return {
        type: LOGIN_START
    }
}

export const loginSuccess = ( user ) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
}

export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export const updateStart = () => {
    return {
        type: UPDATE_START
    }
}

export const updateSuccess = ( user ) => {
    return {
        type: UPDATE_SUCCESS,
        payload: user
    }
}

export const updateFailure = () => {
    return {
        type: UPDATE_FAILURE
    }
}