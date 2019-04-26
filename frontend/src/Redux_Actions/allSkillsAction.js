import axios from "axios";

export let FETCH_ERROR = "FETCH_ERROR";
export let RECEIVE_ALL_SKILLS_SUCCESS = "RECEIVE_ALL_SKILLS_SUCCESS";

// PROVIDER ACTION & PAYLOAD (Action Creator: Function that returns an action object)
export const receivedAllSkillsSuccess = (skills) => {
  return {
    type: RECEIVE_ALL_SKILLS_SUCCESS,
    payload: skills
    // payload: {
    //   skills: [...skills]
    // }

  };
};

export const fetchAllSkills = () => dispatch => {
  axios
    .get(`/services/skills`)
    .then(res => {
      // console.log(res);
      // debugger
      let skills = res.data.data;
      return dispatch(receivedAllSkillsSuccess(skills)); // what is the key inside the queries...?
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
