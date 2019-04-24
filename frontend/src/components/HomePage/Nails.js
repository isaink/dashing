import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import nailsPic from "../../photo_assets/nails.jpg";

import { Dropdown } from "./Dropdown.js";

class Nails extends React.Component {
  componentDidMount() {
    this.props.fetchProvidersByService();
  }

  renderProviders = () => {
    if (this.props.nailProviders) {
      return this.props.nailProviders.map(nailP => {
        return (
          <>
          <div className="pageContainer">
            <Link to={`/singleProviderProfile/${nailP.provider_id}`}>
              <div className="makeup_avatar box">
                <img
                  alt="avatar"
                  className="pic_makeup content"
                  src={nailP.avatar}
                  style={{ height: "200px" }}
                />
              <div id="providername">{nailP.provider}</div>
                <br />
                {nailP.borough} <br />
              {nailP.email} <br />
            {nailP.phone_number} <br />
          {nailP.website_link}
              </div>
            </Link>
          </div>
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
        <div className="makeup_title">Nails</div>
        <span className="dropdown">
          <h1>Select Your Location</h1>
          <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
        </span>

        <div className="makeup_box">
          <div className="img_intro">
            <img
              alt="intro"
              src={nailsPic}
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
    nailProviders: state.providersByService[2]
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(2)),
    fetchProBySvcAndBoro: borough =>
      dispatch(fetchProvidersByService(2, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nails);
