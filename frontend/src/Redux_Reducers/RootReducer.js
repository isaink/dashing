import { combineReducers } from "redux";
import { providersByServiceReducer } from './providersByServiceReducer';
import { singleProviderReducer } from './singleProviderReducer';

export default combineReducers({
// this variables will be the key on the state.
    providersByService: providersByServiceReducer,
    singleProviderInfo: singleProviderReducer
});
