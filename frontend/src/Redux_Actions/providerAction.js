import axios from "axios";

export let FETCH_ERROR = "FETCH_ERROR";
export let RECEIVE_PROVIDERS_SUCCESS = "RECEIVE_PROVIDERS_SUCCESS";
export let RECEIVE_PROVIDER_INFO = "RECEIVE_PROVIDER_INFO"
export let RECEIVE_PROVIDER_SERVICES = "RECEIVE_PROVIDER_SERVICES";

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
export const fetchProvidersByService = (service_id, borough="") => dispatch => {
  axios
    .get(`/srvProviders/${service_id}/${borough}`)
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
    err: "did not get profile info"
  };
};

export const receiveSingleProvider = (provider, provider_id) => {
  return {
    type: RECEIVE_PROVIDER_INFO,
    payload: {
      provider_id: provider_id,
      provider: provider
    }
  }
};

export const getProviderInfo = provider_id => dispatch => {
  axios.get(`/providers/${provider_id}`)
    .then(res => {
      console.log(res.data.info);

      let provider = res.data.info;
      let action = receiveSingleProvider(provider, provider_id)
      return dispatch(action)
    }).then(res => {
      axios.get(`/providers/services/${provider_id}`)
        .then(res => {
          let services = res.data.info;
          let action = receiveProviderServices(services, provider_id)
          return dispatch(action)
        })
    })
    .catch(err =>{
      return dispatch(fetchErrors(err));
    })
};

export const receiveProviderServices = (services, provider_id) => {
  return {
    type: RECEIVE_PROVIDER_SERVICES,
    payload: {
      provider_id: provider_id,
      services: services
    }
  }
};
