//IMPORTS
import axios from 'axios';

//REGISTER USER
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const ADD_ITEM = 'ADD_ITEM';

export const register = userInfo => dispatch => {
    console.log(userInfo)
    dispatch({ type: REGISTER })
    return axios.post('https://build-week-how-to.herokuapp.com/api/users/register', userInfo, { headers: { Authorization: localStorage.getItem('jwt') } })
        .then(res => {
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.token })
            localStorage.setItem('jwt', res.data.token);
            console.log(res);
        })
        .catch(error => {
            dispatch({ type: REGISTER_FAILURE, payload: error.message })
        })
}

//USER LOGIN
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = userInfo => dispatch => {
    dispatch({ type: LOGIN })
    return axios.post('https://build-week-how-to.herokuapp.com/api/users/login', userInfo, { headers: { Authorization: localStorage.getItem('jwt') } })
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
            localStorage.setItem('jwt', res.data.token);
        })
        .catch(error => {
            dispatch({ type: LOGIN_FAILURE, payload: error.message })
        })
}


// ADD

export const ADD_HOWTO = 'ADD_HOWTO';
export const ADD_HOWTO_SUCCESS = 'ADD_HOWTO_SUCCESS';
export const ADD_HOWTO_FAILURE = 'ADD_HOWTO_FAILURE'

export const addHowTo = howto => dispatch => {
    console.log( howto )
    dispatch({ type: ADD_HOWTO })
    return axios.post( 'https://build-week-how-to.herokuapp.com/api/howto' , howto ,  { headers: { Authorization: localStorage.getItem( 'jwt' ) } })
        .then( res => {
            dispatch({ type: ADD_HOWTO_SUCCESS , payload: res.data.token })
            localStorage.setItem( 'jwt' , res.data.token );
            console.log( res );
        })
        .catch( error => {
            dispatch({ type: ADD_HOWTO_FAILURE, payload: error.message })
        })
}

/// UPDATING 

export const UPDATING_HOWTO = 'UPDATING_HOWTO';
export const UPDATING_HOWTO_SUCCESS = 'UPDATING_HOWTO_SUCCESS';
export const UPDATING_HOWTO_FAILURE = 'UPDATING_HOWTO_FAILURE'

export const updatingHowTo = howto => dispatch => {
    console.log( howto )
    dispatch({ type: UPDATING_HOWTO })
    return axios.post( 'https://build-week-how-to.herokuapp.com/api/howto/2' , howto ,  { headers: { Authorization: localStorage.getItem( 'jwt' ) } })
        .then( res => {
            dispatch({ type: UPDATING_HOWTO_SUCCESS , payload: res.data.token })
            localStorage.setItem( 'jwt' , res.data.token );
            console.log( res );
        })
        .catch( error => {
            dispatch({ type: UPDATING_HOWTO_FAILURE, payload: error.message })
        })
}