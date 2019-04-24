import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import barberPic from "../../photo_assets/barber.jpeg";

import { Dropdown } from "./Dropdown.js";

class Barber extends React.Component {
  componentDidMount() {
    this.props.fetchProvidersByService();
  }

  renderProviders = () => {
    if (this.props.barberProviders) {
      return this.props.barberProviders.map(barberP => {
        return (
          <>
            <Link to={`/singleProviderProfile/${barberP.provider_id}`}>
              <div className="hair_avatar box">
                <img
                  alt="avatar"
                  className="pic_hair content"
                  src={barberP.avatar}
                  style={{ height: "150px" }}
                />
                <span id="providername">{barberP.provider}</span>
                <br />
                {barberP.borough} <br />
                {barberP.email} <br />
                {barberP.phone_number} <br />
                {barberP.website_link}
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
        <div className="hair_title">Barber</div>
        <span className="dropdown">
          <h1>Select Your Location</h1>
          <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
        </span>

        <div className="hair_box">
          <div className="img_intro">
            <img
              src={barberPic}
              alt=""
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
    barberProviders: state.providersByService[3]
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(3)),
    fetchProBySvcAndBoro: borough =>
      dispatch(fetchProvidersByService(3, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Barber);
