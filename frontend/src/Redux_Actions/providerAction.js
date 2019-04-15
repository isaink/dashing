import axios from "axios";

export let RECEIVE_PROVIDERS_BY_SERVICE = "RECEIVE_PROVIDERS_BY_SERVICE";
export let FETCH_ERROR = "FETCH_ERROR";
export let RECEIVE_PROVIDERS_SUCCESS = "RECEIVE_PROVIDERS_SUCCESS";
export let RECEIVE_PROVIDER_INFO = "RECEIVE_PROVIDER_INFO"

// PROVIDER ACTION & PAYLOAD (Action Creator: Function that returns an action object)
export const receivedProvidersSuccess = (providers, service_id) => {
  return {
    type: RECEIVE_PROVIDERS_SUCCESS,
    payload: {
      // is the payload
      service_id: service_id,
      providers: [...providers]
    }
  };
};

// PROVIDER BY SERVICES --> AXIOS // This is an action function that makes async calls.

export const fetchProvidersByService = service_id => dispatch => {
  axios
    .get(`/srvProviders/${service_id}`)
    .then(res => {
      let providers = res.data.data;
      return dispatch(receivedProvidersSuccess(providers, service_id)); // what is the key inside the queries...?
    })
    .catch(err => {
      return dispatch(fetchErrors(err));
    });
};

export const fetchErrors = err => {
  return {
    type: FETCH_ERROR,
    err: err
  };
};

export const receiveSingleProvider = (provider) => {
  return {
    type: RECEIVE_PROVIDER_INFO,
    payload: {
      
      provider: provider
    }
  }
}

export const getProviderInfo = provider_id => dispatch => {
  axios.get(`/providers/${provider_id}`)
    .then(res => {
      let provider = res.data.body;
      let action = receiveSingleProvider(provider)
      return dispatch(action)
    })
    .catch(err =>{
      return dispatch(fetchErrors(err));
    })
}