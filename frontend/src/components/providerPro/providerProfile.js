import React from "react";
import './../../Css/porfolio.css';

export const ProviderProfile = props => {

  const renderProviderInfo = () => {
    console.log('provider info', props.providerInfo);
    if (props.providerInfo.id) {
      return (
          <div key={props.providerInfo.provider_id} id='providerInfo'>
            <img src={props.providerInfo.avatar} alt='' />
            <h2>Provider: {props.providerInfo.providername}</h2>
             {/* <p>Services: {props.providerInfo.services}</p> */}
          </div>
      );
    } else {
      return <div id='providerInfo'>Collecting Info ... </div>;

    }
};
  return (
    <>
      <h1>Provider Information</h1>
      {renderProviderInfo()}
    </>
  );
};
