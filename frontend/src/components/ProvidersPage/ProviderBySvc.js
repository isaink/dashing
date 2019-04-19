import React, { Component } from "react";
import { Hair } from "../HomePage/Hair";
import "./../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

// let intro_professional = require('./../../img/provider.jpg');

class Provider extends Component {
  componentDidMount() {
    this.props.fetchProvidersByService();
  }

  render() {
    return (
      <>
        <div className="hair_box">
          <div className="img_intro">
            <img
              alt="intro"
              src="http://fashionbombdaily.com/wp-content/uploads/2016/08/fashion-bomb-daily-Kat-Morgan-Cardi-B-17.jpg"
              width="600px"
              height="auto"
            />
          </div>
          <div className="inner_ctnr_providers">
            <Hair
              hairProviders={this.props.hairProviders}
              fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    hairProviders: state.providersByService[1]
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(1)),
    fetchProBySvcAndBoro: borough =>
      dispatch(fetchProvidersByService(1, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Provider);
