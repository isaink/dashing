import React from "react";

export const SkillsByService = props => {
  const renderSkills = () => {
    if (props.skillsByService) {
      return props.skillsByService.map(serviceSkills => {
        return <>{serviceSkills.name}</>;
      });
    } else {
      return <div>Loading...</div>;
    }
  };
  return (
    <>
      <h1> SkillsByService </h1>

      {renderSkills()}
    </>
  );
};
