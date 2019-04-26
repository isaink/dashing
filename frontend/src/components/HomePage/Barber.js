
import React from "react";
import { Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
import SkillsByServiceComboBox from "./SkillsByServiceComboBox";
import barberPic from "../../photo_assets/barber.jpeg";
import { Dropdown } from "./Dropdown.js";

import { ComboBox } from "./ComboBox.js";
import axios from 'axios';
import { getProvidersBySkill } from "../../Redux_Actions/comboBoxAction";


class Barber extends React.Component {
  state = {
    skills: []
  }

  componentDidMount() {
    this.props.fetchProvidersByService();
  };

  componentDidUpdate(prevProps, prevState){
    if (!prevProps.barberProviders && this.props.barberProviders) {
      this.getSkillsForService();
    }
  }

  getSkillsForService = () => {
    axios.get(`/services/skills/3`)
    .then(res => {
      this.setState({
        skills: res.data.data
      })
    })
    .catch(err => {
      console.log('GET SKILLS ERR', err);
    })
  }

  renderProviders = () => {
    if (this.props.barberProviders) {
      return this.props.barberProviders.map(barberP => {
        return (
          <>
            <Link to={`/singleProviderProfile/${barberP.provider_id}`}>
            <div className="box">
              <div className="content">
                <img
                  alt="avatar"
                  className="hvrbox-layer_bottom"
                  src={barberP.avatar}
                  style={{ height: "150px", display: 'block' }}
                />

                <div className='hvrbox-layer_top'>
                    <div className='hvrbox-text'>
                      <span id="ih-fade-down ih-delay-sm">{barberP.provider}</span>
                      <br />

                    <div className='ih-zoom-in ih-delay-md'>
                      {barberP.borough} <br />
                      {barberP.email} <br />
                      {barberP.phone_number} <br />
                      {barberP.website_link}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="title">Barber</div>
              <hr />

              <span className="dropdown">
                <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
                <ComboBox
                  fetchSkillList={this.state.skills}
                  getProvidersBySkill={this.props.getProvidersBySkill}
                  />
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
    fetchProBySvcAndBoro: borough => dispatch(fetchProvidersByService(3, borough)),

    getProvidersBySkill: (skill_id) => dispatch(getProvidersBySkill(3, skill_id)),

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Barber);
