import { RECEIVE_PROVIDER_INFO } from '../Redux_Actions/providerAction';
import { RECEIVE_PROVIDER_SERVICES } from '../Redux_Actions/providerAction';

export const singleProviderReducer = (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {

        case RECEIVE_PROVIDER_INFO:
            const { provider} =
                action.payload;
                newState = provider;
        return newState;

        case RECEIVE_PROVIDER_SERVICES:
            const { services } = action.payload;
            newState['services'] = services ; 
            return newState

        default:
        return state;
    }
};

