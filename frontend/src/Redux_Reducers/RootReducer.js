import { combineReducers } from "redux";
import { providersByServiceReducer } from './providersByServiceReducer';
import { dropDownReducer } from './dropDownReducer'

export default combineReducers({
// this variables will be the key on the state.
    providersByService: providersByServiceReducer,
    providerLocation: dropDownReducer
});
