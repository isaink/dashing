import React from "react";
// import { SkillsByService } from "../components/HomePage/SkillsByService";
// import ComboBox from "../components/HomePage/ComboBox";
import { connect } from "react-redux";
import { fetchSkillsByService } from "../Redux_Actions/skillsByServiceAction";
import { fetchAllSkills } from "../Redux_Actions/allSkillsAction";

import '../Css/ComboBox.css'

// let { Combobox } = ReactWidgets;

class SkillsByServiceComboBox extends React.Component {
  state = {
    selectedSkill: '',
  }

  componentDidMount() {
    this.props.fetchSkillsByService(1)
    this.props.fetchAllSkills()
    // debugger
  }

  // handleChange = (selectedOption) => {
  //   this.setState({ selectedOption });
  //   console.log(`Option selected:`, selectedOption);
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  options = () => {
    const skills = this.props.allSkills.map(skill => {
      return (
        <option key={skill.skill_id} value={skill.skill_id} >{skill.skill_name}</option>
      )
    })

    return skills
  }


  render() {
    console.log(this.props);
    console.log(this.props.skillsByService);
    console.log(this.props.allSkills);

    console.log(this.state.selectedSkill);
    console.log(this.options());
    // debugger

    let options = this.props.allSkills.map(skill => {
    return (
        <option key={skill.skill_id}>{skill.skill_name}</option>)})

    // console.log(options);
    // debugger


    return (
      <>
      {/*
        <select
          onChange={this.handleChange}
          name='selectedService' >
          <option key='0' value=''></option>
          {options}
        </select>

        {this.options}
        {test}

        */}

        <select onChange={this.handleChange} name='selectedSkill' >
          <option key='0' value=''></option>
          {this.options()}
        </select>


      </>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    skillsByService: state.skillsByService[1],
    allSkills: state.allSkills.allSkills,
    // allSkills: state.allSkills.allSkills.skills[1],
    // skillsByService: state.skillsByService
  };
};

const mapDispatchToProps = dispatch => {
  console.log('dispatch', fetchSkillsByService);
  return {
    fetchSkillsByService: (service_id) => dispatch(fetchSkillsByService(service_id)),
    fetchAllSkills: () => dispatch(fetchAllSkills())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsByServiceComboBox);
