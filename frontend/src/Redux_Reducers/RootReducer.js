import { combineReducers } from "redux";
import { providersByServiceReducer } from "./providersByServiceReducer";
import { allSkillsReducer } from "./allSkillsReducer";
import { singleProviderReducer } from "./singleProviderReducer";
import { providersBySkillReducer } from "./comboBoxReducer";
import { educationProv_Reducer } from "./educationProv_Reducer";
import { DropdownServiceReducer } from "./DropdownServiceReducer";
import { userAuthReducer } from './userAuthReducer';

export default combineReducers({
  // this variables will be the key on the state.
  providersByService: providersByServiceReducer,
  allSkills: allSkillsReducer,
  singleProviderInfo: singleProviderReducer,
  providersBySkill: providersBySkillReducer,
  educationProviders: educationProv_Reducer,
  services: DropdownServiceReducer,
  userAuth: userAuthReducer
});
