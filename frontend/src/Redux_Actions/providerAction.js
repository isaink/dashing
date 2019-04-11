import axios from 'axios';

export let RECEIVE_PROVIDERS_BY_SERVICE = "RECEIVE_PROVIDERS_BY_SERVICE";
export let FETCH_ERROR = 'FETCH_ERROR';
export let RECEIVE_PROVIDERS_SUCCESS = 'RECEIVE_PROVIDERS_SUCCESS';

// PROVIDER ACTION & PAYLOAD
export const receivedProviders = ( providers ) => { 
    return {
        type: RECEIVE_PROVIDERS_SUCCESS, 
        providers: {                     // is the payload
            service_id : 0,
            providers : [...providers]       
        } 
    }
};

// PROVIDER BY SERVICES ACTION & PAYLOAD
export const providersByService = ( service_id ) => {
    return {
        type: RECEIVE_PROVIDERS_BY_SERVICE,
        service: {
            service_id
        }
    }
};

// PROVIDER BY SERVICES --> AXIOS
export const fetchProvidersByService = () => dispatch => {
    axios.get('/')
    .then( res => {
        return dispatch(providersByService(res.data...)); // what is the key inside the queries...?
    })
    .catch((err) => { 
        return dispatch(fetchErrors(err))
    })
};

// export const fetchProviders = () => dispatch => {
//     axios.get('/')
//     .then( res => {
//         return dispatch(receivedProviders(res.data...)); // what is the key inside the queries...?
//     })
//     .catch((err) => { 
//         return dispatch(fetchErrors(err))
//     })
// };

export const fetchErrors = (err) => {
    return {
        type: FETCH_ERROR,
        err: err
    }
};