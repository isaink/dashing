import React, { Component } from 'react';

export class ComboBox extends Component {
  state = {
    skill_id: 0,
  }

  handleSkillChange = event => {
    let skill_id = event.target.value
    this.props.getProvidersBySkill(skill_id)
    this.setState ({
      skill_id : skill_id   // skill_id (made up name) : skill_id (the event.target.value variable)
    })
  }

  render() {

    const skillList = this.props.fetchSkillList.length !== 0 && [...this.props.fetchSkillList].map(skill => (
      <option key={skill.skill_id} value={skill.skill_id} > {skill.skill_name} </option>
    ))

    return (
      <div>
        <select onChange={this.handleSkillChange} value={this.state.skill_id}>
          <option value='0' disabled >Select Skill</option>

          {skillList}
        </select>
      </div>
    );
  }
};



// const handleSkillChange = event => {
//   let skill = event.target.value
//   props.getProvidersBySkill(props.skill_id)
// }
//
//   return (
//     <div>
//       <select onChange={handleSkillChange} value={props.selectedSkill}>
//         {props.fetchSkillList.length !== 0 && ['', ...props.fetchSkillList].map(skill => (
//           <option key={skill.skill_id} value={skill.skill_id} >{skill.skill_name}</option>
//         ))}
//       </select>
//     </div>
//   );
// };
