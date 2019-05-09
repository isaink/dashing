import { RECEIVE_USER_AUTH, LOG_OUT_USER  } from '../Redux_Actions/authAction';

export const userAuthReducer = ( state = { user: {first_name: '', last_name: '' }, isLoggedIn: false}, actions ) => {

    // Object.freeze(initialState)

    switch (actions.type) {
        case RECEIVE_USER_AUTH :
            return {
                ...state,
                user: actions.user,
                isLoggedIn: true
            }
        case LOG_OUT_USER :
            return {
                ...state,
                user: actions.user,
                isLoggedIn: false
            }
        default:
            return state;
    }
};
