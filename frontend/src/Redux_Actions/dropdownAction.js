import axios from "axios";

export let RECEIVE_LOCATION_SUCCESS = "RECEIVE_LOCATION_SUCCESS"
export let FETCH_ERROR = "FETCH_ERROR";

export const receiveLocationsSuccess = (boroughs)=> {
  return {
    type: RECEIVE_LOCATION_SUCCESS,
    payload: {
      boroughs: boroughs
    }
  }
}


// getting the boroughs --> AXIOS

export const getProviderLocation = boroughs => dispatch => {
  axios
    .get(`/providers`)
    .then(res => {
      debugger
      return dispatch(receiveLocationsSuccess(null)); // what is the key inside the queries...?
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
