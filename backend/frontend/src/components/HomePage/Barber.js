import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ComboBox } from "./ComboBox.js";
import { getProvidersBySkill } from "../../Redux_Actions/comboBoxAction";
import { getProvidersByService } from "../../Redux_Actions/comboBoxAction";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
import "../../Css/provider.css";
import barberPic from "../../photo_assets/barber.jpeg";
import barber from "../../img/barber2.png";

class Barber extends React.Component {
  state = {
    skills: [],
    locations: [],
    serviceId: 3
  };
  componentDidMount() {
    this.props.getProvidersByService();
  }
  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.barberProviders && this.props.barberProviders) {
      this.getSkillsForService();
    }
  }
  getSkillsForService = () => {
    axios
      .get(`/services/skills/3`)
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
    if (this.props.barberProviders) {
      const providerObj = {};
      const providerArr = [];
      this.props.barberProviders.forEach(provider => {
        if (!providerObj[provider.provider_id]) {
          providerObj[provider.provider_id] = true;
          providerArr.push(provider);
        }
      });
      return providerArr.map(barberP => {
        return (
          <div key={barberP.provider_id}>
            <div className="content">
              <div className="ctnr_avatar">
                <Link to={`/singleProviderProfile/${barberP.provider_id}`}>
                  <img
                    alt="avatar"
                    className="prov_avatar"
                    src={barberP.avatar}
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
                  {barberP.first_name} {barberP.last_name} <br />
                </div>
                <div>
                  {barberP.borough}
                  <div className="bio" > "{barberP.bio}" </div>
                </div>
                  <div className='ctnr_bottom_info'>
                    <p> {barberP.availability.toUpperCase()}  </p>
                    <Link to={`/singleProviderProfile/${barberP.provider_id}`} >
                      <button className='bttn_toProfile'> View my Profile </button>
                    </Link>
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
            <div className="title">BARBER</div>
            <span style={{ paddingLeft: "55px", width: "1074px" }}>
              <ComboBox
                fetchSkillList={this.state.skills}
                getProvidersByService={this.props.getProvidersByService}
                fetchProvidersByService={this.props.fetchProvidersByService}
                serviceId={this.state.service_id}
              />
            </span>
          </div>
          <div className="ctnr_box_barber">
            <div className="img_intro">
              <img
                alt="intro"
                src={barberPic}
                objectFit="cover"
                // height='600px'
              />
            </div>
            <div className="inner_ctnr_providers">
              <div className="providers">
                <h3 className="text_intro_srv">
                  Choose your{" "}
                  <b style={{ color: "white" }}>BARBER</b> provider
                </h3>
                <div className="prov" style={{width: '873px'}}>{this.renderProviders()}</div>}
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
      dispatch(fetchProvidersByService(3, borough)),
    getProvidersBySkill: skill_id => dispatch(getProvidersBySkill(3, skill_id)),
    getProvidersByService: (skill_id, borough) =>
      dispatch(getProvidersByService(3, skill_id, borough))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Barber);
