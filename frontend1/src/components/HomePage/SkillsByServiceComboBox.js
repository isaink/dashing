import React from "react";
import { connect } from "react-redux";
import { fetchAllSkills } from "../../Redux_Actions/allSkillsAction";

import '../../Css/ComboBox.css'

import 'react-widgets/dist/css/react-widgets.css'
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
    console.log(`Option selected:`, selectedSkill.skill_name, ': ',  selectedSkill.service_name);
  }

  render() {
    console.log(this.props.allSkills);
    console.log(this.state.selectedSkill.skill_name, ': ', this.state.selectedSkill.service_name);


    return (
      <>
        <div className='ComboboxDiv'>

          <Combobox
            data={this.props.allSkills}
            defaultValue='Select a Skill'
            textField='name'
            groupBy={service => service.service_name}
            name='selectedSkill'
            onChange={this.handleChange}
            className='Combobox'
          />
        </div>
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
