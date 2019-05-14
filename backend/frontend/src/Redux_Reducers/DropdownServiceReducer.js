import { RECEIVE_DROPDOWN_SERVICE_SUCCESS } from "../Redux_Actions/DropdownServiceAction";

export const DropdownServiceReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case RECEIVE_DROPDOWN_SERVICE_SUCCESS:
      const { services } = action.payload;
      newState = services;
      return newState;

    default:
      return state;
  }
};
