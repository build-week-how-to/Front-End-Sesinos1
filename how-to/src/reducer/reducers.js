//IMPORTS
import { 
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    // DELETE_HOWTO,
    // DELETE_HOWTO_FAILURE,
    // DELETE_HOWTO_SUCCESS
} from '../actions/index';

//DEFAULT STATE
const initialState = {
    registering: false,
    registered: false,
    loggingIn: false,
    loggedIn: false,
    // deletingHowto: false,
    error: null
}

//REDUCERS
const reducer = ( state = initialState , action ) => {
    switch ( action.type ) {
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
        // case DELETE_HOWTO:
        //     return {
        //         ...state,
        //         loggedIn: true,
        //         deletingHowto: true,
        //     }
        // case DELETE_HOWTO_SUCCESS:
        //     return {
        //         ...state,
        //         loggedIn: true,
        //         deletingHowto: false
        //     }
        // case DELETE_HOWTO_FAILURE:
        //     return {
        //         ...state,
        //         loggedIn: true,
        //         deletingHowto: false,
        //         error: action.payload
        //     }
        default: return state
    }
}

//EXPORTS
export default reducer;
//ha