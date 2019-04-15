import React from 'react';
import { ProviderInfo } from '../components/providerPro/providerProfile'
import { connect } from 'react-redux';
import { getProviderInfo } from "../Redux_Actions/providerAction";

class SingleProviderContainer extends React.Component {
    componentDidMount() {
        this.props.getProviderInfo();
    };

    render() {
        return(
            <>
            <ProviderInfo providerInfo = {this.props.providerInfo} />
            </>
        )
    };
}
const mapStateToProps = (state, ownProps) => {


    return {
        providerInfo: state.singleProviderInfo
    };
};
const mapDispatchToProps = dispatch => {
    return {
      getProviderInfo: () => dispatch(getProviderInfo(3))
    };
  };



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleProviderContainer)
