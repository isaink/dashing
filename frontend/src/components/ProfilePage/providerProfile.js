import React from "react";
import './../../Css/profile.css';
import pic from './../../img/pic_profile.png';

export const ProviderProfile = props => {
 console.log( props, 'PROPS')
    const renderProviderInfo = () => {
      if (props.providerInfo) {
        return ( 
            <div className='ctnr_profile' key={props.providerInfo.provider_id}>

              <div className='bg_intro_profile'>
                <img alt='intro_picture' src={pic}  className='intro_pic' style={{width: `2020px`}}/>
              </div>
                

              <img src={props.providerInfo.avatar} alt='avatar' className='avatar_profile'/>
            <div className='prov_info'>
              <h2 className='prov_name'>Provider: {props.providerInfo.providername} 
                <br/>
                Isa CSS
              </h2>

              <p className='prov_service'>Services: {props.providerInfo.servicesname}</p>

            </div>
              
            </div>
        );
      } else {
        return <div id='providerInfo'>Collecting Info ... </div>;

      }
    };
    // const providerSkills = () => {
    //   if(props)
    // }

  return (
    <>
      <h1>Provider Information</h1>
      {renderProviderInfo()}
    </>
  );
};
