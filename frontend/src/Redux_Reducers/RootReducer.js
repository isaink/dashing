import { combineReducers } from "redux";
import { providersByServiceReducer } from './providersByServiceReducer';
import { skillsByServiceReducer } from './skillsByServiceReducer';
import { allSkillsReducer } from './allSkillsReducer';
import { singleProviderReducer } from './singleProviderReducer';

export default combineReducers({
// this variables will be the key on the state.
    providersByService: providersByServiceReducer,
    skillsByService: skillsByServiceReducer,
    allSkills: allSkillsReducer,
    singleProviderInfo: singleProviderReducer
});
