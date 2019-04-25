import React from "react";

export const ComboBox = props => {

  // const renderSkills = () => {
  //   if (props.fetchProviderByServiceAndSkill.length) {
  //     return props.fetchProviderByServiceAndSkill.map(skill => {
  //       return <option>{skill.skill_name}</option>;
  //     });
  //   }
  // };

const handleSkillChange = event => {
  let skill = event.target.value
  props.fetchProviderByServiceAndSkill(skill)

}
  return (
    <div>
      <select onChange={handleSkillChange}>
        {props.fetchProviderByServiceAndSkill.length !== 0 && ['', ...props.fetchProviderByServiceAndSkill].map(skill => (
          <option key={skill.skill_id}>{skill.skill_name}</option>
        ))}
      </select>
    </div>
  );
};
