import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import { Dropdown } from "./Dropdown.js";

class Hair extends React.Component {
  componentDidMount() {
    this.props.fetchProvidersByService();
  }

  renderProviders = () => {
    if (this.props.hairProviders) {
      return this.props.hairProviders.map(hairP => {
        return (
          <>
            <Link to={`/singleProviderProfile/${hairP.provider_id}`}>
              <div className="hair_avatar box">
                <img
                  alt="avatar"
                  className="pic_hair content"
                  src={hairP.avatar}
                  style={{ height: "150px" }}
                />
                <span id="providername">{hairP.provider}</span>
                <br />
                {hairP.borough} <br />
                {hairP.email} <br />
                {hairP.phone_number} <br />
                {hairP.website_link}
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
        <div className="hair_title">Hair</div>
        <span className="dropdown">
          <h1>Select Your Location</h1>
          <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
        </span>

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
            <div className="providers">{this.renderProviders()}</div>
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
)(Hair);
