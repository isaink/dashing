import { FETCH_PROVIDER_BY_SKILL } from "../Redux_Actions/comboBoxAction";

const initialState = {
  providersBySkill: [],
}

export const providersBySkillReducer = (state = initialState, action ) => {
  switch(action.type) {
    case FETCH_PROVIDER_BY_SKILL:
    return {
      ...state,
      providersBySkill: action.payload
    }
    default:
    return state;
  }
}


// const initialState = {
//   service_to_skills_map: {
//     // service_id: [],  // reference
//   },
// }
//
// export const skillsByServiceReducer = (state = initialState, action ) => {
//   switch(action.type) {
//     case FETCH_ALL_SKILLS_FOR_SINGLE_SERVICE:
//     return {
//       ...state,
//       service_to_skills_map: {
//         ...state.service_to_skills_map, // keep old key:value pairs
//         [action.payload.service_id]: action.payload.skills //computed property. [as yet unknown key]
//       },
//     }
//
//     default:
//     return state;
//   }
// }



// import { RECEIVE_SERVICE_SKILLS_SUCCESS, FETCH_ALL_SKILLS_FOR_SINGLE_SERVICE } from "../Redux_Actions/comboBoxAction";
//
// export const skillsByServiceReducer = (state = {}, action) => {
//   const newState = { ...state };
//   switch (action.type) {
//     case RECEIVE_SERVICE_SKILLS_SUCCESS:
//       const { service_id, skills } = action.payload;
//       newState[service_id] = skills;
//       return newState;
//
//     default:
//       return state;
//   }
// };
