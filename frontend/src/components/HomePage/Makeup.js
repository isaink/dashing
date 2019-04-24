import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import makeupPic from "../../photo_assets/makeup.jpg";

import { Dropdown } from "./Dropdown.js";

class Makeup extends React.Component {
  componentDidMount() {
    this.props.fetchProvidersByService();
  }

  renderProviders = () => {
    if (this.props.makeupProviders) {
      return this.props.makeupProviders.map(makeupP => {
        return (
          <>
            <Link to={`/singleProviderProfile/${makeupP.provider_id}`}>
              <div className="makeup_avatar box">
                <img
                  alt="avatar"
                  className="pic_makeup content"
                  src={makeupP.avatar}
                  style={{ height: "150px" }}
                />
                <span id="providername">{makeupP.provider}</span>
                <br />
                {makeupP.borough} <br />
                {makeupP.email} <br />
                {makeupP.phone_number} <br />
                {makeupP.website_link}
              </div>
            </Link>
          </>
        );
      });
    } else {
      return (
        <div className="lds-heart">
          <div />
        </div>
      );
    }
  };

  render() {
    return (
      <>
        <div className="makeup_title">Makeup</div>
        <span className="dropdown">
          <h1>Select Your Location</h1>
          <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
        </span>

        <div className="makeup_box">
          <div className="img_intro">
            <img
              alt="intro"
              src={makeupPic}
              width="600px"
              height="auto"
            />
          </div>
          <div className="inner_ctnr_providers">
            <div className="providers">{this.renderProviders()}</div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    makeupProviders: state.providersByService[4]
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(4)),
    fetchProBySvcAndBoro: borough =>
      dispatch(fetchProvidersByService(4, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Makeup);
