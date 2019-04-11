import { RECEIVE_PROVIDERS_SUCCESS } from '../Redux_Actions/providerAction';

export const providerReducer = ( initialState = [ ], action) => {

    switch(action.type){
        case RECEIVE_PROVIDERS_SUCCESS :
            return [
                ...initialState,
                ...action.providers  //payload
            ]
        default:
            return initialState;
    }
};