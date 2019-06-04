//IMPORTS
import {
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../Actions/';

//DEFAULT STATE
const initialState = {
    users: [],
    registering: false,
    registered: false,
    loggingIn: false,
    loggedIn: false,
    error: null
}

//REDUCERS
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                registering: true,
                registered: false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                registered: true
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                registered: false,
                error: action.payload
            }
        case LOGIN:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                error: action.payload
            }
    }
}

//EXPORTS
export default reducer;