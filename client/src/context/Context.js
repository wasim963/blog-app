import { createContext, useReducer, useEffect } from "react";
import { Reducer } from "./Reducer";

const INITIAL_STATE = {
    accessToken: JSON.parse( localStorage.getItem( 'accessToken' ) ) || null,
    user: JSON.parse( localStorage.getItem( 'user' ) ) || null,
    isFetching: false,
    error: false
}

export const Context = createContext( INITIAL_STATE );

export const ContextProvider = ( { children } ) => {

    const [ state, dispatch ] = useReducer( Reducer, INITIAL_STATE );

    useEffect( () => {

        localStorage.setItem("user", JSON.stringify( state?.user ) )
        localStorage.setItem("accessToken", JSON.stringify( state?.accessToken ) )

    }, [ state?.accessToken, state?.user ] );
    

    return(
        <Context.Provider value={
            {
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                accessToken: state.accessToken,
                dispatch
            }
        }>
            { children }
        </Context.Provider>
    )

}