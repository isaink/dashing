import axios from "axios";
import { receivedProvidersSuccess } from './providerAction'
export let FETCH_PROVIDER_BY_SKILL = "FETCH_PROVIDER_BY_SKILL"
export let FETCH_ERROR = "FETCH_ERROR";


// getting the skills --> AXIOS
export const getProvidersBySkill = (service_id, skill_id) => dispatch => {
  axios
    .get(`/providers/bySkill/${skill_id}`)
    .then(res => {
      // console.log(res.data.data);
      // debugger
      let providers = res.data.data;
      return dispatch(receivedProvidersSuccess(providers, service_id)); // what is the key inside the queries...?
    })
    .catch(err => {
      return dispatch(fetchErrors(err));
    });
};

export const fetchErrors = err => {
  return {
    type: FETCH_ERROR,
    err: err
  };
};

export const getProvidersByService = (service_id, skill_id, borough) => dispatch => {
  console.log(borough, typeof borough);
  console.log(skill_id, typeof skill_id);
  let url = `/providers/byService/${service_id}?`
  if (skill_id !== 0 && borough !== 0) {
    url += `skill_id=${skill_id}&borough=${borough}`
  }
  else if (skill_id !== 0) {
    url += `skill_id=${skill_id}`
  }
  else if (borough !== 0) {
    url += `borough=${borough}`
  }

  axios
  .get(url)
  .then(res => {
    let providers = res.data.data;
    return dispatch(receivedProvidersSuccess(providers, service_id));
  })
  .catch(err => {
    return dispatch(fetchErrors(err));
  })
}

// ---------------------------------------------


// import axios from "axios";
// export let FETCH_ALL_SKILLS_FOR_SINGLE_SERVICE = "FETCH_ALL_SKILLS_FOR_SINGLE_SERVICE"
// export let FETCH_ERROR = "FETCH_ERROR";
//
// export const fetchAllSkillsForSingleService = (service_id) => dispatch => {
//   axios.get(`/services/skills/${service_id}`)
//   .then(res => {
//     // console.log(res.data);
//     // debugger
//     dispatch ({
//       type: FETCH_ALL_SKILLS_FOR_SINGLE_SERVICE,
//       payload: {
//         skills: res.data.data,
//         service_id: service_id // all comments for a given song_id
//       }
//     })
//   })
//   .catch(err => {
//     return dispatch(fetchErrors(err));
//   });
// }
//
// export const fetchErrors = err => {
//   return {
//     type: FETCH_ERROR,
//     err: err
//   };
// };



// ---------------------------------------------

// export let RECEIVE_SKILLS_SUCCESS = "RECEIVE_SKILLS_SUCCESS"
// export let FETCH_ERROR = "FETCH_ERROR";
//
// export const receiveSkillsSuccess = (skills)=> {
//   return {
//     type: RECEIVE_SKILLS_SUCCESS,
//     payload: {
//       skills: skills
//     }
//   }
// }
//
// // getting the skills --> AXIOS
// export const getSkillsByServiceId = (skills, service_id) => dispatch => {
//   axios
//     .get(`/services/skills/${service_id}`)
//     .then(res => {
//       debugger
//       return dispatch(receiveSkillsSuccess(null)); // what is the key inside the queries...?
//     })
//     .catch(err => {
//       return dispatch(fetchErrors(err));
//     });
// };
//
// export const fetchErrors = err => {
//   return {
//     type: FETCH_ERROR,
//     err: err
//   };
// };

// ---------------------------------------------


// export let FETCH_ERROR = "FETCH_ERROR";
// export let RECEIVE_PROVIDERS_SUCCESS = "RECEIVE_PROVIDERS_SUCCESS";
// export let RECEIVE_PROVIDER_INFO = "RECEIVE_PROVIDER_INFO"
// export let RECEIVE_PROVIDER_SERVICES = "RECEIVE_PROVIDER_SERVICES";
//
// export let RECEIVE_SERVICE_SKILLS_SUCCESS = "RECEIVE_SERVICE_SKILLS_SUCCESS";
// export let RECEIVE_SERVICE_SKILLS_INFO = "RECEIVE_SERVICE_SKILLS_INFO"
// export let RECEIVE_SERVICE_SKILLS = "RECEIVE_SERVICE_SKILLS";
//
// // PROVIDER ACTION & PAYLOAD (Action Creator: Function that returns an action object)
// // export const receivedServiceSkillsSuccess = (skills, service_id) => {
// //   return {
// //     type: RECEIVE_SERVICE_SKILLS_SUCCESS,
// //     payload: {
// //       // is the payload
// //       service_id: service_id,
// //       skills: [...skills]
// //     }
// //   };
// // };
//
// export const receivedProvidersSuccess = (providers, service_id) => {
//   return {
//     type: RECEIVE_PROVIDERS_SUCCESS,
//     payload: {
//       // is the payload
//       service_id: service_id,
//       providers: [...providers]
//     }
//   };
// };
//
// // PROVIDER BY SERVICES --> AXIOS // This is an action function that makes async calls.
//
// export const fetchProvidersByService = (service_id, borough="") => dispatch => {
//   axios
//     .get(`/srvProviders/${service_id}/${borough}`)
//     .then(res => {
//       let providers = res.data.data;
//       return dispatch(receivedProvidersSuccess(providers, service_id)); // what is the key inside the queries...?
//     })
//     .catch(err => {
//       return dispatch(fetchErrors(err));
//     });
// };
//
// // export const fetchSkillsByService = (service_id, skill='') => dispatch => {
// //   axios
// //     .get(`/services/${service_id}/${skill}`)
// //     .then(res => {
// //       let providers = res.data.data;
// //       return dispatch(receivedServiceSkillsSuccess(providers, service_id)); // what is the key inside the queries...?
// //     })
// //     .catch(err => {
// //       return dispatch(fetchErrors(err));
// //     });
// // };
//
//
// export const fetchErrors = err => {
//   return {
//     type: FETCH_ERROR,
//     err: "did not get service/skills info"
//   };
// };
//
// export const receiveSingleProvider = (provider, provider_id) => {
//   return {
//     type: RECEIVE_PROVIDER_INFO,
//     payload: {
//       provider_id: provider_id,
//       provider: provider
//     }
//   }
// }
//
// export const getProviderInfo = provider_id => dispatch => {
//   axios.get(`/providers/${provider_id}`)
//     .then(res => {
//       console.log(res.data.info);
//
//       let provider = res.data.info;
//       let action = receiveSingleProvider(provider, provider_id)
//       return dispatch(action)
//     }).then(res => {
//       axios.get(`/providers/services/${provider_id}`)
//         .then(res => {
//           let services = res.data.info;
//           let action = receiveProviderServices(services, provider_id)
//           return dispatch(action)
//         })
//     })
//     .catch(err =>{
//       return dispatch(fetchErrors(err));
//     })
// }
//
// export const receiveProviderServices = (services, provider_id) => {
//   return {
//     type: RECEIVE_PROVIDER_SERVICES,
//     payload: {
//       provider_id: provider_id,
//       services: services
//     }
//   }
// }
//
//
// // export const receiveSingleService = (service, service_id) => {
// //   return {
// //     type: RECEIVE_SERVICE_SKILLS_INFO,
// //     payload: {
// //       service_id: service_id,
// //       service: service
// //     }
// //   }
// // }
//
// // export const getProviderInfo = service_id => dispatch => {
// //   axios.get(`/skills/${service_id}`)
// //     .then(res => {
// //       console.log(res.data.info);
// //
// //       let service = res.data.info;
// //       let action = receiveSingleService(service, service_id)
// //       return dispatch(action)
// //     }).then(res => {
// //       axios.get(`/skills/skills/${service_id}`)
// //         .then(res => {
// //           let skills = res.data.info;
// //           let action = receiveServiceSkills(skills, service_id)
// //           return dispatch(action)
// //         })
// //     })
// //     .catch(err =>{
// //       return dispatch(fetchErrors(err));
// //     })
// // }
//
// // export const receiveServiceSkills = (skills, service_id) => {
// //   return {
// //     type: RECEIVE_SERVICE_SKILLS,
// //     payload: {
// //       service_id: service_id,
// //       skills: skills
// //     }
// //   }
// // }
