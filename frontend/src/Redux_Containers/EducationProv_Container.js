import React from "react";
import { connect } from "react-redux";
import Education from "../components/HomePage/Education";
import { getEducationProviders } from "../Redux_Actions/EducationProv_Action";

class EducationProv_Container extends React.Component {
  componentDidMount() {
    this.props.getEducationProviders();
  }

  render() {
    console.log("props in edu servicessssss", this.props);
    return (
      <>
        <Education
          educationProviders={this.props.educationProviders}
          getEducationProviders={this.props.getEducationProviders}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    educationProviders: state.educationProviders
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEducationProviders: (name, service_id) =>
      dispatch(getEducationProviders(name, service_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EducationProv_Container);
