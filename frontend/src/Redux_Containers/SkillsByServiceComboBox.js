import React from "react";
// import { SkillsByService } from "../components/HomePage/SkillsByService";
// import ComboBox from "../components/HomePage/ComboBox";
import { connect } from "react-redux";
import { fetchSkillsByService } from "../Redux_Actions/skillsByServiceAction";
import { fetchAllSkills } from "../Redux_Actions/allSkillsAction";


class SkillsByServiceComboBox extends React.Component {
  constructor(){
    super()
    this.state = {
      
    }
  }

  componentDidMount() {
    this.props.fetchSkillsByService(1)
    this.props.fetchAllSkills()
    debugger
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    console.log('hello');
    console.log(this.props.skillsByService);
    console.log(this.props.allSkills);
    debugger

    const test = this.props.skillsByService.map(skills => (
      console.log({skills})
    ))


    // const options = this.props.allSkills.map(skills => {
    //   return (
    //     <option
    //       key={skills.skill_id}
    //       value={skills.skill_id}
    //       groupBy={skills.service_name}
    //       >
    //         {skills.skill_name}
    //     </option>
    //   )
    // })
    //
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

        */}
        {test}
      </>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    skillsByService: state.skillsByService[1],
    allSkills: state.allSkills,
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
