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

export const getProvidersByService = (service_id, skill_id, borough) => dispatch => {
  console.log(borough, typeof borough);
  console.log(skill_id, typeof skill_id);
  let url = `/providers/byService/${service_id}`
  if (skill_id  && borough) {
    url += `?skill_id=${skill_id}&borough=${borough}`
  }
  else if (skill_id) {
    url += `?skill_id=${skill_id}`
  }
  else if (borough) {
    url += `?borough=${borough}`
  }

  axios
  .get(url)
  .then(res => {
    let providers = res.data.data;
    console.log('ERROR HERE??', res)
    return dispatch(receivedProvidersSuccess(providers, service_id));
  })
  .catch(err => {
    console.log('WHY???', err)
    return dispatch(fetchErrors(err));
  })
}
