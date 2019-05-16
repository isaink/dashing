import axios from "axios";

export let FETCH_ERROR = "FETCH_ERROR";
export let RECEIVE_SKILLS_SUCCESS = "RECEIVE_SKILLS_SUCCESS";

// PROVIDER ACTION & PAYLOAD (Action Creator: Function that returns an action object)
export const receivedSkillsSuccess = (skills, service_id) => {
  console.log(service_id);
  return {
    type: RECEIVE_SKILLS_SUCCESS,
    payload: {
      // is the payload
      service_id: service_id,
      skills: [...skills]
    }
  };
};

// PROVIDER BY SERVICES --> AXIOS
export const fetchSkillsByService = service_id => dispatch => {
  axios
    .get(`/services/skills/singleSkill/${service_id}`)
    .then(res => {
      let skills = res.data.data;
      return dispatch(receivedSkillsSuccess(skills, service_id)); // what is the key inside the queries...?
    })
    .catch(err => {
      console.log('SERVICE SKILLS ERRRR', err)
      return dispatch(fetchErrors(err));
    });
};

export const fetchErrors = err => {
  return {
    type: FETCH_ERROR,
    err: err
  };
};
