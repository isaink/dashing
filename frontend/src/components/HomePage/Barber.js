import React from "react";
import { Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
import SkillsByServiceComboBox from "./SkillsByServiceComboBox";
import barberPic from "../../photo_assets/barber.jpeg";
import { Dropdown } from "./Dropdown.js";

class Barber extends React.Component {
  componentDidMount() {
    this.props.fetchProvidersByService();
  };

  renderProviders = () => {
    if (this.props.barberProviders) {
      return this.props.barberProviders.map(barberP => {
        return (
          <>
            <Link to={`/singleProviderProfile/${barberP.provider_id}`}>
              <a href="box" className="box btn">
                <img
                  alt="avatar"
                  className="content"
                  src={barberP.avatar}
                  style={{ height: "150px" }}
                />
                <span id="providername">{barberP.provider}</span>
                <br />
                {barberP.borough} <br />
                {barberP.email} <br />
                {barberP.phone_number} <br />
                {barberP.website_link}
              </a>
            </Link>
          </>
        );
      });
    } else {
      return (
        <div className="lds-heart"><div></div></div>
      );
    }
  };

  render() {
    return (
      <>
       <div className='ctnr_prov'>
        <div className="ctnr_box">
            <div className="img_intro">
              <img
                alt="intro"
                src={barberPic}
                width="600px"
                height="auto"
              />
            </div>

            <div className="inner_ctnr_providers">
              <div className="title">B a r b e r</div>
              <hr />
            
              <span className="dropdown">
                <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
                <SkillsByServiceComboBox />
              </span>

              <div className="providers">
                <div className="prov">{this.renderProviders()}</div>
              </div>
            </div>
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
