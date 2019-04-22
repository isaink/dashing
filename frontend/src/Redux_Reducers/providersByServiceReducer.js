import { RECEIVE_PROVIDERS_SUCCESS } from "../Redux_Actions/providerAction";

export const providersByServiceReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_PROVIDERS_SUCCESS:
      const { service_id, providers } = action.payload;
      newState[service_id] = providers;
      return newState;
      
    default:
      return state;
  }
};
