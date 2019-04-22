import React from "react";
import { connect } from "react-redux";
import 'react-widgets/dist/css/react-widgets.css';

// import { fetchSkillsByService } from "../Redux_Actions/skillsByServiceAction";
import { fetchAllSkills } from "../Redux_Actions/allSkillsAction";
import Combobox from 'react-widgets/lib/Combobox';

class SkillsByServiceComboBox extends React.Component {
  state = {
    selectedSkill: '',
  }

  componentDidMount() {
    this.props.fetchAllSkills()
  }

  handleChange = (selectedSkill) => {
    this.setState({ selectedSkill });
    console.log(`Option selected:`, selectedSkill);
  }

  render() {
    console.log(this.props.allSkills);
    console.log(this.state.selectedSkill.skill_name);

    return (
      <>
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
    allSkills: state.allSkills.allSkills,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllSkills: () => dispatch(fetchAllSkills())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillsByServiceComboBox);
