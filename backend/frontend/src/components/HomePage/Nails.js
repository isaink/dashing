import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ComboBox } from "./ComboBox.js";
import { getProvidersBySkill } from "../../Redux_Actions/comboBoxAction";
import { getProvidersByService } from "../../Redux_Actions/comboBoxAction";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
import "../../Css/provider.css";
import nailsPic from "../../photo_assets/nails.jpg";
import nail from "../../img/nails1.jpg";

class Nails extends React.Component {
  state = {
    skills: [],
    locations: [],
    serviceId: 0
  };
  componentDidMount() {
    this.props.getProvidersByService();
  }
  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.nailProviders && this.props.nailProviders) {
      this.getSkillsForService();
    }
  }
  getSkillsForService = () => {
    axios
      .get(`/services/skills/2`)
      .then(res => {
        this.setState({
          skills: res.data.data
        });
      })
      .catch(err => {
        console.log("GET SKILLS ERR", err);
      });
  };
  // };
  renderProviders = () => {
    if (this.props.nailProviders) {
      const providerObj = {};
      const providerArr = [];
      this.props.nailProviders.forEach(provider => {
        if (!providerObj[provider.provider_id]) {
          providerObj[provider.provider_id] = true;
          providerArr.push(provider);
        }
      });
      return providerArr.map(nailP => {
        return (
          <div key={nailP.provider_id}>
            <div className="content">
              <div className="ctnr_avatar">
                <Link to={`/singleProviderProfile/${nailP.provider_id}`}>
                  <img
                    alt="avatar"
                    className="prov_avatar"
                    src={nailP.avatar}
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
                  {nailP.first_name} {nailP.last_name} <br />
                </div>
                {nailP.borough} <br />
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
            <div className="title">NAILS</div>
            <span className="dropdown">
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
                src={nail}
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>
            <div className="inner_ctnr_providers_right">
              <h3 className="text_intro_srv">
                {" "}
                Choose your time saver and{" "}
                <b style={{ color: "white" }}>NAILS</b> care
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
    nailProviders: state.providersByService[2]
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(2)),
    fetchProBySvcAndBoro: borough =>
      dispatch(fetchProvidersByService(2, borough)),
    getProvidersBySkill: skill_id => dispatch(getProvidersBySkill(2, skill_id)),
    getProvidersByService: (skill_id, borough) =>
      dispatch(getProvidersByService(2, skill_id, borough))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nails);
