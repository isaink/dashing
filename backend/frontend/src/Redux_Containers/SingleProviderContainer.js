import React from 'react';
import { connect } from 'react-redux';
import ProviderProfile from '../components/ProfilePage/providerProfile';
import { getProviderInfo } from "../Redux_Actions/providerAction";
// import  NavbarProfile  from "../components/NavBars/NavbarProfile";

class SingleProviderContainer extends React.Component {
  componentDidMount() {
    this.props.getProviderInfo(this.props.match.params.id);
  }

  render() {
    return (
      <>
        {/* <NavbarProfile /> */}
        <ProviderProfile providerInfo={this.props.providerInfo} />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    providerInfo: state.singleProviderInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProviderInfo: id => dispatch(getProviderInfo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProviderContainer);
