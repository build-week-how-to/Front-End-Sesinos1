//IMPORTS
import axios from 'axios';
//REGISTER USER
export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = userInfo => dispatch => {
    console.log( userInfo )
    dispatch({ type: REGISTER })
    return axios.post( 'https://build-week-how-to.herokuapp.com/api/users/register' , userInfo)
        .then( res => {
            dispatch({ type: REGISTER_SUCCESS , payload: res.data.token })
            localStorage.setItem( 'jwt' , res.data.token );
            console.log( res );
        })
        .catch( error => {
            dispatch({ type: REGISTER_FAILURE, payload: error.message })
        })
}

//USER LOGIN
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = userInfo => dispatch => {
    dispatch({ type: LOGIN })
    return axios.post( 'https://build-week-how-to.herokuapp.com/api/users/login' , userInfo )
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
            localStorage.setItem('jwt', res.data.token);
        })
        .catch(error => {
            dispatch({ type: LOGIN_FAILURE, payload: error.message })
        })
}

//ADD HOWTO
export const ADD_HOWTO = 'ADD_HOWTO';
export const ADD_HOWTO_SUCCESS = 'ADD_HOWTO_SUCCESS';
export const ADD_HOWTO_FAILURE = 'ADD_HOWTO_FAILURE'

export const addHowTo = howto => dispatch => {
    dispatch({ type: ADD_HOWTO })
    return axios.post( 'https://build-week-how-to.herokuapp.com/api/howto' , howto, { headers: { Authorization: localStorage.getItem('jwt') } } )
        .then( res => {
            dispatch({ type: ADD_HOWTO_SUCCESS , payload: res.data.token })
        })
        .catch( error => {
            dispatch({ type: ADD_HOWTO_FAILURE, payload: error.message })
        })
}

//ADD STEP
export const ADD_STEP = 'ADD_STEP';
export const ADD_STEP_SUCCESS = 'ADD_STEP_SUCCESS';
export const ADD_STEP_FAILURE = 'ADD_STEP_FAILURE'

export const addStep = steps => dispatch => {
    console.log( steps )
    dispatch({ type: ADD_STEP })
    return axios.post( 'https://build-week-how-to.herokuapp.com/api/steps' , steps)
        .then( res => {
            dispatch({ type: ADD_STEP_SUCCESS , payload: res.data.token })
        })
        .catch( error => {
            dispatch({ type: ADD_STEP_FAILURE, payload: error.message })
        })
}

//ADD HOWTO
export const UPDATE_HOWTO = 'UPDATE_HOWTO';
export const UPDATE_HOWTO_SUCCESS = 'UPDATE_HOWTO_SUCCESS';
export const UPDATE_HOWTO_FAILURE = 'UPDATE_HOWTO_FAILURE'

export const updateHowTo = ( id , howtos ) => dispatch => {
    console.log( id, howtos )
    dispatch({ type: UPDATE_HOWTO })
    return axios.put( `https://build-week-how-to.herokuapp.com/api/howto/${id}` , howtos , { headers: { Authorization: localStorage.getItem('jwt') } } )
        .then( res => {
            dispatch({ type: UPDATE_HOWTO_SUCCESS , payload: id })
        })
        .catch( error => {
            dispatch({ type: UPDATE_HOWTO_FAILURE, payload: error.message })
        })
}

//Delete HOWTO
export const DELETE_HOWTO = 'DELETE_HOWTO';
export const DELETE_HOWTO_SUCCESS = 'DELETE_HOWTO_SUCCESS';
export const DELETE_HOWTO_FAILURE = 'DELETE_HOWTO_FAILURE'

export const deleteHowTo = id => dispatch => {
    console.log( 'howtoID:' , id )
    dispatch({ type: DELETE_HOWTO })
    return axios.delete( `https://build-week-how-to.herokuapp.com/api/howto/${id}` , { headers: { Authorization: localStorage.getItem('jwt') } })
        .then( res => {
            dispatch({ type: DELETE_HOWTO_SUCCESS , payload: id })
        })
        .catch( error => {
            dispatch({ type: DELETE_HOWTO_FAILURE, payload: error.message })
        })
}

//DELETE STEP
export const DELETE_STEP = 'DELETE_STEP'
export const DELETE_STEP_FAIL = 'DELETE_STEP_FAIL'
export const DELETE_STEP_SUCCESS = 'DELETE_STEP_SUCCESS'

export const deleteStep = id => dispatch => {

    dispatch({ type: DELETE_STEP })
    return axios.delete( `https://build-week-how-to.herokuapp.com/api/steps/${id}` , { headers: { Authorization: localStorage.getItem( 'jwt' ) } } )
        .then( res => {
            dispatch({ type: DELETE_STEP_SUCCESS , payload: id })
        })
        .catch( error => {
            dispatch({ type: DELETE_STEP_FAIL , payload: error.message })
        })

}