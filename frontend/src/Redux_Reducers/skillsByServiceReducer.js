import { RECEIVE_SKILLS_SUCCESS } from "../Redux_Actions/skillsByServiceAction";

export const skillsByServiceReducer = (state = {}, action) => {
  const newState = { ...state };
  console.log('this is new state',newState);
  
  switch (action.type) {

    case RECEIVE_SKILLS_SUCCESS:
      const { service_id, skills } = action.payload;
      newState[service_id] = skills;
      return newState;

    default:
      return state;
  }
};
