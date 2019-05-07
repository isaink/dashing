import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ComboBox } from "./ComboBox.js";
import { getProvidersBySkill } from "../../Redux_Actions/comboBoxAction";
import { getProvidersByService } from '../../Redux_Actions/comboBoxAction';
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import "../../Css/provider.css";
import barberPic from "../../photo_assets/barber.jpeg";
import barber from  '../../img/barber2.png'

class Barber extends React.Component {
  state = {
    skills: [],
    locations: [],
    serviceId: 3,
  }

  componentDidMount() {
    this.props.getProvidersByService();
    this.getSkillsForService();

  };

  componentDidUpdate(prevProps, prevState){
    if (!prevProps.barberProviders && this.props.barberProviders) {
      this.getSkillsForService();
    }
  };

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
  };

  renderProviders = () => {
    if (this.props.barberProviders) {

      const providerObj = {};
      const providerArr = [];
      this.props.barberProviders.forEach(provider => {
        if(!providerObj[provider.provider_id]) {
          providerObj[provider.provider_id] = true;
          providerArr.push(provider);
        }
      });

      return providerArr.map(barberP => {
        return (
          <div key={barberP.provider_id}>
            <Link to={`/singleProviderProfile/${barberP.provider_id}`}>
            <div className="box">
              <div className="content">
                <img
                  alt="avatar"
                  className="hvrbox-layer_bottom"
                  src={barberP.avatar}
                  style={{ height: "140px" }}
                />

                <div className='hvrbox-layer_top'>
                    <div className='hvrbox-text'>
                      <span id="ih-fade-down ih-delay-sm">{barberP.provider}</span>
                      <br />

                    <div style={{ zIndex: '4', textAlign: 'center'}} >
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
          </div>
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
        <div className="ctnr_box_barber">
            <div className="img_intro" style={{ borderTop: 'solid #ecb99c'}}>
              <img
                alt="intro"
                src={barber}
                // width="1200px"
                height='100%'
                style={{ objectFit: "cover"}}
              />
            </div>

            <div className="inner_ctnr_providers">
              <div className='ctnr_nav'>
                <div className="title" >Barber</div>
                  <span className="dropdown">
                    <ComboBox
                      fetchSkillList={this.state.skills}
                      getProvidersByService = {this.props.getProvidersByService}
                      fetchProvidersByService = {this.props.fetchProvidersByService}
                      serviceId={this.state.service_id}
                      />
                  </span>
                </div>

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
    getProvidersByService: (skill_id, borough) => dispatch(getProvidersByService(3, skill_id, borough))

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Barber);
