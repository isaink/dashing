import React from "react";
import { connect } from "react-redux";
import { fetchSkillsByService } from "../Redux_Actions/skillsByServiceAction";
import { fetchAllSkills } from "../Redux_Actions/allSkillsAction";

import '../Css/ComboBox.css'

import 'react-widgets/dist/css/react-widgets.css'
import Combobox from 'react-widgets/lib/Combobox';
import { render } from 'react-dom';
// import { Combobox } from 'react-widgets'   // let { Combobox } = ReactWidgets;

class SkillsByServiceComboBox extends React.Component {
  state = {
    selectedSkill: '',
  }

  componentDidMount() {
    this.props.fetchAllSkills() // debugger
    // this.props.fetchSkillsByService(1)
  }

  handleChange = (selectedSkill) => {
    this.setState({ selectedSkill });
    console.log(`Option selected:`, selectedSkill);
  }

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value, })
  // }

  options = () => {
    const skills = this.props.allSkills.map(skill => {
      return (
        <option key={skill.skill_id} value={skill.skill_id} >{skill.skill_name}</option>
      )
    })
    return skills
  }

  render() {
    console.log(this.props);  console.log(this.props.skillsByService);  console.log(this.props.allSkills);  console.log(this.options());
    console.log(this.state.selectedSkill);  // debugger

    let options = this.props.allSkills.map(skill => {
      return (
        <option key={skill.skill_id}> {skill.skill_name} </option>
      )
    })    // console.log(options); // debugger

    return (
      <>
        <select onChange={this.handleChange} name='selectedSkill' >
          <option key='0' value=''></option>
            {this.options()}
        </select>

        <Combobox
          data={this.props.allSkills}
          defaultValue='Select a Skill'
          textField='name'
          groupBy={service => service.service_name}
          name='selectedSkill'
          onChange={this.handleChange}
        />
      </>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    allSkills: state.allSkills.allSkills,   // skillsByService: state.skillsByService[1],
  };
};

const mapDispatchToProps = dispatch => {
  console.log('dispatch', fetchSkillsByService);
  return {
    fetchAllSkills: () => dispatch(fetchAllSkills())
    // fetchSkillsByService: (service_id) => dispatch(fetchSkillsByService(service_id)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsByServiceComboBox);
