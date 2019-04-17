import React from "react";

export const ProviderInfo = props => {


  const renderProviderInfo = () => {
      console.log("PROPS ON PROPS", props);
    if (Object.keys(props.providerInfo).length) {
      let userKey = Object.keys(props.providerInfo)[0]
      let providerVals = props.providerInfo[userKey]
      return providerVals.map(pInfo => {
        return (
          <div key={pInfo.provider_id}>
            <img src={pInfo.avatar} alt="pic not rendering" />
            <h2>Provider: {pInfo.providername}</h2>

          </div>
        );
      });
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
