import React from "react";

export const Hair = props => {
  const renderProviders = () => {
    if (props.hairProviders) {
      return props.hairProviders.map(hairP => {
        return <>{hairP.name}</>;
      });
    } else {
      return <div>Loading...</div>;
    }
  };
  return (
    <>
      <h1> Hair </h1>

      {renderProviders()}
    </>
  );
};
