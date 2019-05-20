import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ComboBox } from "./ComboBox.js";
import { getProvidersBySkill } from "../../Redux_Actions/comboBoxAction";
import { getProvidersByService } from "../../Redux_Actions/comboBoxAction";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import "../../Css/provider.css";
import makeupPic from "../../photo_assets/makeupRight.jpg";
import makeup from "../../img/makeup.png";

class Makeup extends React.Component {
  state = {
    skills: [],
    locations: [],
    serviceId: 0
  };

  componentDidMount() {
    this.props.getProvidersByService();
    this.getSkillsForService();
  }

  getSkillsForService = () => {
    axios
      .get(`/services/skills/4`)
      .then(res => {
        this.setState({
          skills: res.data.data
        });
      })
      .catch(err => {
        console.log("GET SKILLS ERR", err);
      });
  };

  renderProviders = () => {
    if (this.props.makeupProviders) {
      const providerObj = {};
      const providerArr = [];
      this.props.makeupProviders.forEach(provider => {
        if (!providerObj[provider.user_id]) {
          providerObj[provider.user_id] = true;
          providerArr.push(provider);
        }
      });

      return providerArr.map(makeupP => {
        return (
          <div key={makeupP.user_id}>
            <div className="content">
              <div className="ctnr_avatar">
                <Link to={`/singleProviderProfile/${makeupP.user_id}`}>
                  <img
                    alt="avatar"
                    className="prov_avatar"
                    src={makeupP.avatar}
                    style={{ height: "150px" }}
                  />
                </Link>
              </div>
              <div className="info_prov">
                <div
                  style={{
                    textTransform: "uppercase",
                    fontSize: "20px",
                    color: "#ECB99C"
                  }}
                >
                  {makeupP.first_name} {makeupP.last_name} <br />
                </div>
                <div>
                  {makeupP.borough}
                  <div className="bio"> "{makeupP.bio}" </div>

                  <div className="ctnr_bottom_info">
                    <p> {makeupP.availability.toUpperCase()} </p>
                    <Link to={`/singleProviderProfile/${makeupP.user_id}`}>
                      <button className="bttn_toProfile">
                        {" "}
                        View my Profile{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <div className="ctnr_prov">
          <div className="ctnr_nav">
            <div className="title">MAKEUP</div>
            <span style={{ paddingLeft: "78px", width: "1074px" }}>
              <ComboBox
                fetchSkillList={this.state.skills}
                getProvidersByService={this.props.getProvidersByService}
                fetchProvidersByService={this.props.fetchProvidersByService}
                serviceId={this.state.service_id}
              />
            </span>
          </div>
          <div className="ctnr_box_right">
            <div className="img_intro_right">
              <img
                alt="intro"
                src={makeupPic}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
            <div className="inner_ctnr_providers_right">
              <h3 className="text_intro_srv">
                Choose your <b style={{ color: "white" }}>MAKEUP</b> provider
              </h3>
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
    makeupProviders: state.providersByService[4]
    // makeupProvidersBySkill: [state.providersBySkill[4]],
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(4)),
    fetchProBySvcAndBoro: borough =>
      dispatch(fetchProvidersByService(4, borough)),

    getProvidersBySkill: skill_id => dispatch(getProvidersBySkill(4, skill_id)),
    getProvidersByService: (skill_id, borough) =>
      dispatch(getProvidersByService(4, skill_id, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Makeup);
