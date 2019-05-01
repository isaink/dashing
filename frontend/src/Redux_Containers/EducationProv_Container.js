import React from "react";
import { connect } from "react-redux";
import {Education} from '../components/HomePage/Education'
import { getAllEducationProviders } from "../Redux_Actions/EducationProv_Action";


class EducationProv_Container extends React.Component {
  componentDidMount() {
    this.props.getAllEducationProviders();
  }

  render() {
    console.log("props in edu servicessssss", this.props);
    debugger
    return (
      <>
      <Education educationProviders={this.props.educationProviders} />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    educationProviders: state.educationProviders
  }

}

const mapDispatchToProps = dispatch => {
  return {
    getAllEducationProviders: (education) =>
    dispatch(getAllEducationProviders(education))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationProv_Container)
