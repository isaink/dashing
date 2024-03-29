import React, { Component } from "react";
import "../../Css/ComboBox.css";
// import '../../Css/Dropdown.css'

export class ComboBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill_id: "",
      skill_selected: false,
      boro_selected: false,
      location: "",
      serviceId: this.props.serviceId
    };
  }

  handleBoroChange = event => {
    this.setState({
      boro_selected: true,
      [event.target.name]: event.target.value
    });
  };

  handleSkillChange = event => {
    this.setState({
      skill_selected: true,
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let location = this.state.location;
    let skill_id = this.state.skill_id;

    this.props.getProvidersByService(skill_id, location);
  };

  render() {
    const skillList =
      this.props.fetchSkillList &&
      this.props.fetchSkillList.length > 0 &&
      [...this.props.fetchSkillList].map(skill => (
        <option key={skill.skill_id} value={skill.skill_id}>
          {" "}
          {skill.skill_name}{" "}
        </option>
      ));

    return (
      <form onSubmit={this.handleSubmit} className="ctnr_options">
        <select
          onChange={this.handleBoroChange}
          value={this.state.location}
          name="location"
          className="select_loc"
          style={{}}
        >
          <option value=""> Select A Location </option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Bronx">Bronx</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Queens">Queens</option>
          <option value="Staten Island">Staten Island</option>
        </select>

        <select
          className="select_skill"
          onChange={this.handleSkillChange}
          value={this.state.skill_id}
          name="skill_id"
          
        >
          <option value=""> Select A Skill </option>
          {skillList}
        </select>

        <button className="bttn_form" type="submit">
          {" "}
          Submit{" "}
        </button>
      </form>
    );
  }
}
