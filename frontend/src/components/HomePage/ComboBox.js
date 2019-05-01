import React, { Component } from 'react';
import '../Css/ComboBox.css'
import '../Css/Dropdown.css'

export class ComboBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skill_id: '',
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
    this.setState ({
      skill_selected: true,
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    let location = this.state.location
    let skill_id = this.state.skill_id
    // let service_id = this.state.serviceId

    this.props.getProvidersByService(skill_id, location)

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
            <option value=""> ** Select Your Location ** </option>

            <option value="Brooklyn">Brooklyn</option>
            <option value="Bronx">Bronx</option>
            <option value="Manhattan">Manhattan</option>
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
            <option value='' >** Select Skill **</option>
            {skillList}
          </select>
        </div>

        <hr />

        <div>
          <button type='submit'> Submit </button>
        </div>

      </form>
    );
  }
};
