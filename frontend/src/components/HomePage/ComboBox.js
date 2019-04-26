import React, { Component } from 'react';


import '../../Css/ComboBox.css'


export class ComboBox extends Component {
  state = {
    skill_id: 0,
    skill_selected: false,
    boro_selected: false,
    // selectedSkill: '',
    location: '',
  }


  handleBoroChange = (event) => {
    // let borough = event.target.value;
    // this.props.fetchProBySvcAndBoro(borough);
    this.setState({
      boro_selected: true,
      [event.target.name]: event.target.value,
    })
  };

  handleSkillChange = (event) => {
    // let skill_id = event.target.value
    // this.props.getProvidersBySkill(skill_id)
    this.setState ({
      // skill_id : skill_id,   // skill_id (made up name) : skill_id (the event.target.value variable)
      skill_selected: true,
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
      let location = this.state.location
      let skill_id = this.state.skill_id
      this.props.getProvidersByService(skill_id, location)
  }



  render() {
    console.log(this.state);

    const skillList = this.props.fetchSkillList.length !== 0 && [...this.props.fetchSkillList].map(skill => (
      <option key={skill.skill_id} value={skill.skill_id} > {skill.skill_name} </option>
    ))

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <select
            className="selector"
            onChange={this.handleBoroChange}

            style={{ width: "300px", height: "50px" }}
            name="location"
            id="select-profession"

            value={this.state.location}
          >
            <option value=""> Select Your Location </option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Bronx">Bronx</option>
            <option value="New York">Manhattan</option>
            <option value="Queens">Queens</option>
            <option value="Staten Island">Staten Island</option>
          </select>
        </div>

        <hr />

        <div className='ComboboxDiv'>
          <select
            className='comboSelector'
            onChange={this.handleSkillChange}
            value={this.state.skill_id}
            name='skill_id'
            >
            <option value='0' disabled >Select Skill</option>
            {skillList}
          </select>
        </div>

        <div>
          <button type='submit'> Submit </button>
        </div>

      </form>
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
