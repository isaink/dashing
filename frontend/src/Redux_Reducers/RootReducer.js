import { combineReducers } from "redux";
import { providersByServiceReducer } from './providersByServiceReducer';

export default combineReducers({
// this variables will be the key on the state.
    providersByService: providersByServiceReducer
});
