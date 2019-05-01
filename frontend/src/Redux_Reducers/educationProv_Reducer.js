import { RECEIVE_EDU_PROVIDERS_SUCCESS } from "../Redux_Actions/EducationProv_Action";

const initialState = []


export const educationProv_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EDU_PROVIDERS_SUCCESS:
      return [
        ...state,
         ...action.payload
      ]
      // debugger

    default:
      return state;
  }
};
