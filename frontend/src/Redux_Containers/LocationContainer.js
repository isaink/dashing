import React from "react";
import { Dropdown } from "../components/Homepage/Dropdown";
import { connect } from "react-redux";
import { getProviderLocation } from "../Redux_Actions/dropdownAction";

class LocationContainer extends React.Component {
  componentDidMount() {
    this.props.getProviderLocation();
  }

  render() {
    return (
      <>
        <Dropdown location={this.props.location} />
      </>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    providerLocation: state.providerLocation.providers
  };
};

const mapDispatchToProps = dispatch => {
  return{
    getProviderLocation: () => dispatch(getProviderLocation())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationContainer);
