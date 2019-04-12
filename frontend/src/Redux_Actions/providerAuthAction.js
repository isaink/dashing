import axios from 'axios';

import Auth from '../React-components/Utils/Auth';

export let RECEIVE_PROVIDER_AUTH = 'RECEIVE_USER_AUTH';
export let LOG_OUT_PROVIDER = 'LOG_OUT_PROVIDER';

export const receiveProviderAuth = ( provider ) => {
    return {
        type: RECEIVE_PROVIDER_AUTH,
        provider: provider
    }
};

export const logOut = () => {
    return {
        type: LOG_OUT_PROVIDER
    }
};


export const newProvider = ( provider ) => dispatch => {
    return axios.post('/provider/new', provider)
    .then( res => {
        return dispatch(receiveProviderAuth(null))
    })
    .catch(err => {
        console.log(err)
    })
};

export const logInProvider = (  provider  ) =>  dispatch => {
    return axios.post('/provider/login',  provider )
    .then( res => {
        // AUTH come from a auxiliar file
        Auth.authenticateUser( res.data.email ); // This email is saved into the localstorage
        return dispatch(receiveProviderAuth(res.data))
    })
    .catch((err) => {
        Auth.deauthenticateUser(); // is going to the localstorage and removing the token (token = user)
    })
};

export const logOutProvider = ( ) =>  dispatch => {
    axios.post('/provider/logout')
    .then(() => {
        Auth.deauthenticateUser();
        return dispatch( logOut())
    })
    .catch(err => {
        Auth.deauthenticateUser();
    })
};


export const checkAuthenticateStatus = () => dispatch => { 
    axios.get('/provider/isLoggedIn')
    .then(res => {
        let provider = res.data;
        console.log( provider, 'provider that are arrived')
        console.log(provider.email,"===" ,Auth.getToken())
        if (provider.email === Auth.getToken()) {
            console.log('REACHED AUTHENTICATE', provider)
            return dispatch(receiveProviderAuth(provider))

        }else{
            if (provider.email) {
                dispatch(logOutProvider());
            } else {
                Auth.deauthenticateUser();
            }
        }
    })
    .catch( err => {
        Auth.deauthenticateUser();
    })
};