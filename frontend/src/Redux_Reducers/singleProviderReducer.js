import { RECEIVE_PROVIDER_INFO } from '../Redux_Actions/providerAction';

export const singleProviderReducer = (state = {}, action) => {
    const newState = {... state};
    switch (action.type) {
        case RECEIVE_PROVIDER_INFO:
        const { provider, provider_id} = 
        action.payload;
        newState[provider_id] = provider;
        return newState;

        default:
        return state; 
    }
}