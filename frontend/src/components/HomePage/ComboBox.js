import React, { Component } from 'react';

import '../../Css/ComboBox.css'

export class ComboBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skill_id: 0,
      skill_selected: false,
      boro_selected: false,
      location: '',
      serviceId: this.props.serviceId

    }
  }

  handleBoroChange = (event) => {
    this.setState({
      boro_selected: true,
      [event.target.name]: event.target.value,
    })
  };

  handleSkillChange = (event) => {
    // if (this.state.skill_id === 0) {
    //   this.setState ({
    //     skill_selected: false,
    //   })
    // }
    this.setState ({
      skill_selected: true,
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
      let location = this.state.location
      let skill_id = this.state.skill_id
      let service_id = this.state.serviceId

    // if (this.state.skill_id === 0) {
    //   this.props.fetchProvidersByService(serviceId)
    // }

    if (!skill_id) {
      this.props.fetchProvidersByService(service_id)
    }

    // if (this.state.boro_selected && this.state.skill_selected) {
      this.props.getProvidersByService(skill_id, location)
      // this.props.getProvidersByService(service_id, skill_id, location)
    // }
    // else if (this.state.boro_selected && !this.state.skill_selected) {
    //   this.props.fetchProBySvcAndBoro(location)
    // } else if (this.state.skill_selected && !this.state.boro_selected) {
    //   this.props.getProvidersBySkill(skill_id)
    // }
  }


  render() {
    console.log(this.state);
    console.log(this.props);

    const skillList = this.props.fetchSkillList.length !== 0 && [...this.props.fetchSkillList].map(skill => (
      <option key={skill.skill_id} value={skill.skill_id} > {skill.skill_name} </option>
    ))

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <select
            className="selector"
            onChange={this.handleBoroChange}
            value={this.state.location}
            name="location"

            style={{ width: "300px", height: "50px" }}
            id="select-profession"
          >
            <option value=""> Select Your Location </option>
            <hr />
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
            <option value='0' >Select Skill</option>
            <hr/>
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



// const skillList = this.props.fetchSkillList.length !== 0 && [...this.props.fetchSkillList].map(skill => (
//   <option key={skill.skill_id} value={skill.skill_id} > {skill.skill_name} </option>
// ))

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
