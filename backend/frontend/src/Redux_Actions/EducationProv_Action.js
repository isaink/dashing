import axios from "axios";

export let FETCH_ERROR = "FETCH_ERROR";
export let RECEIVE_EDU_PROVIDERS_SUCCESS = "RECEIVE_EDU_PROVIDERS_SUCCESS";

export const receivedEduProvidersSuccess = edu_providers => {
  return {
    type: RECEIVE_EDU_PROVIDERS_SUCCESS,
    payload: edu_providers
  };
};

export const getEducationProviders = (name, service_id) => dispatch => {
  
  let url = '/providers/education?'
  if (name) {
    url = url.concat(`name=${name}&`)
  }
  if(service_id) {
    url = url.concat(`service_id=${service_id}`)

    // url += `service_id=${service_id}` //another way to do the same thing
  }

  axios
    .get(url)
    .then(res => {
      console.log("getEducationProviders", res.data.providers);

      let edu_providers = res.data.providers;
      return dispatch(receivedEduProvidersSuccess(edu_providers));
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
