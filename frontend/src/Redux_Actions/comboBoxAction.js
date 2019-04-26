import axios from "axios";
import { receivedProvidersSuccess } from './providerAction'
export let FETCH_PROVIDER_BY_SKILL = "FETCH_PROVIDER_BY_SKILL"
export let FETCH_ERROR = "FETCH_ERROR";


// getting the skills --> AXIOS
export const getProvidersBySkill = (service_id, skill_id) => dispatch => {
  axios
    .get(`/providers/bySkill/${skill_id}`)
    .then(res => {
      // console.log(res.data.data);
      // debugger
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
