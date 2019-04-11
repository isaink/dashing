import { combineReducers } from "redux";
import { providerReducer } from './providersReducer';

export default combineReducers({
// this variables will be the key on the state.
    providers: providerReducer
});