import axios from "axios";

export let RECEIVE_DROPDOWN_SERVICE_SUCCESS =
  "RECEIVE_DROPDOWN_SERVICE_SUCCESS";

export let FETCH_ERROR = "FETCH_ERROR";

export const receiveDropdownServiceSuccess = (services) => {
  return {
    type: RECEIVE_DROPDOWN_SERVICE_SUCCESS,
    payload: {
      services: services
    }
  };
};

export const getAllServices = services => dispatch => {
  axios
    .get("/services")
    .then(res => {
      debugger
      return dispatch(receiveDropdownServiceSuccess(null));
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
