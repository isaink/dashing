import { RECEIVE_ALL_SKILLS_SUCCESS } from "../Redux_Actions/allSkillsAction";

// export const allSkillsReducer = (state = {}, action) => {
//   const newState = { ...state };
//   switch (action.type) {
//     case RECEIVE_ALL_SKILLS_SUCCESS:
//       const { skills } = action.payload;
//       newState = skills;
//       return newState;
//
//     default:
//       return state;
//   }
// };


const initialState = {
  allSkills: [],
}

export const allSkillsReducer = (state = initialState, action ) => {
  switch(action.type) {
    case RECEIVE_ALL_SKILLS_SUCCESS:
      return {
        ...state,
        allSkills: action.payload
      }
      default:
    return state;
  }
}
