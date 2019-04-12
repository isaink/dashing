import { combineReducers } from "redux";
import { providersByServiceReducer } from './providersByServiceReducer';
import { skillsByServiceReducer } from './skillsByServiceReducer';

export default combineReducers({
// this variables will be the key on the state.
    providersByService: providersByServiceReducer,
    skillsByService: skillsByServiceReducer,
});
