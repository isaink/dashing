import React from "react";
import './../../Css/porfolio.css';

export const ProviderProfile = props => {
 console.log( props, 'PROPS')
  const renderProviderInfo = () => {
    if (props.providerInfo.id) {
      return ( 
          <div key={props.providerInfo.provider_id} id='providerInfo'>
            <img src={props.providerInfo.avatar} alt='' />
            <h2>Provider: {props.providerInfo.providername}</h2>
            <p>Skills: {props.providerInfo.skills}</p>
          </div>
      );
    } else {
      return <div>Collecting Info</div>;
    }
};
  return (
    <>
      <h1>Provider Information</h1>
      {renderProviderInfo()}
    </>
  );
};
