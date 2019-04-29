import axios from "axios";

export let FETCH_ERROR = "FETCH_ERROR";
export let RECEIVE_LOCATIONS_SUCCESS = "RECEIVE_LOCATIONS_SUCCESS";

// PROVIDER ACTION & PAYLOAD (Action Creator: Function that returns an action object)
export const receivedLocationsSuccess = (locations, service_id) => {
  console.log(service_id);
  return {
    type: RECEIVE_LOCATIONS_SUCCESS,
    payload: {
      // is the payload
      service_id: service_id,
      locations: [...locations]
    }
  };
};

// PROVIDER BY SERVICES --> AXIOS
export const fetchLocationsByService = service_id => dispatch => {
  axios
    .get(`/services/locations/${service_id}`)
    .then(res => {
      // console.log(res);
      // debugger
      let locations = res.data.data;
      return dispatch(receivedLocationsSuccess(locations, service_id)); // what is the key inside the queries...?
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
