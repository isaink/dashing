import axios from "axios";

export let FETCH_ERROR = "FETCH_ERROR";
export let RECEIVE_EDU_PROVIDERS_SUCCESS = "RECEIVE_EDU_PROVIDERS_SUCCESS";

export const receivedEduProvidersSuccess = (edu_providers) => {
  return {
    type: RECEIVE_EDU_PROVIDERS_SUCCESS,
    payload: edu_providers
  };
};

export const getAllEducationProviders = () => dispatch => {
  axios
    .get("/providers/education")
    .then(res => {
      console.log("getAllEducationProviders", res);
      console.log("getAllEducationProviders", res.data.providers);



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
