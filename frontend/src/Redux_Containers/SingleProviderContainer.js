import React from "react";
import { ProviderProfile } from "../components/providerPro/providerProfile";
import { connect } from "react-redux";
import { getProviderInfo } from "../Redux_Actions/providerAction";

class SingleProviderContainer extends React.Component {

  componentDidMount() {
    this.props.getProviderInfo(this.props.match.params.id);
  }

  
    render() {
        console.log('props in render', this.props);
        return(
            <>
            <ProviderInfo providerInfo={this.props.providerInfo} />
            </>
        )
    }
};


  render() {
    console.log("props in render", this.props);
    return (
      <>
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
