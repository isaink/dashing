import { RECEIVE_LOCATION_SUCCESS } from "../Redux_Actions/dropdownAction";

export const dropDownReducer = (state = {}, action) =>{
  let  newState = {...state};
    switch(action.type) {
      case RECEIVE_LOCATION_SUCCESS:
        const { boroughs } = action.payload
          newState = boroughs
          return newState;

          default:
          return state;
    }
}
