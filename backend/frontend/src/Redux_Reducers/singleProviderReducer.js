import { RECEIVE_PROVIDER_INFO } from '../Redux_Actions/providerAction';
import { RECEIVE_PROVIDER_SERVICES } from '../Redux_Actions/providerAction';
import { RECEIVE_PROVIDER_PORTFOLIIO } from '../Redux_Actions/providerAction';
import { RECEIVE_SKILLSBYPRO_SUCCESS } from
'../Redux_Actions/providerAction';
import { RECEIVE_PROVIDER_SKILLS } from '../Redux_Actions/providerAction';

export const singleProviderReducer = (state = {}, action) => {
    let newState = {...state};
    switch (action.type) {

        case RECEIVE_PROVIDER_INFO:
            const { provider} = action.payload;
                newState = provider;
        return newState;

        case RECEIVE_PROVIDER_SERVICES:
            const { services } = action.payload;
                newState['services'] = services ;
            return newState;

        case RECEIVE_PROVIDER_PORTFOLIIO:
            const { portfolio } = action.payload;
                newState['portfolio'] = portfolio;
            return newState;

            case RECEIVE_PROVIDER_SKILLS:
                const { providerSkills } = action.payload;
                    newState['providerSkills'] = providerSkills;
                return newState;

        case RECEIVE_SKILLSBYPRO_SUCCESS:
        const { skills } = action.payload;
              newState['skills'] = skills;
              return newState;

        default:
        return state;
    }
};
