import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
// import SkillsByServiceComboBox from "./SkillsByServiceComboBox";
import hairPic from "../../photo_assets/hair.jpg";
import nailsPic from "../../photo_assets/nails.jpg";
import barberPic from "../../photo_assets/barber.jpeg";
import makeupPic from '../../img/makeup.png'

// import { Dropdown } from "./Dropdown.js";


import { ComboBox } from "./ComboBox.js";
import { getProvidersBySkill } from '../../Redux_Actions/comboBoxAction';
import { getProvidersByService } from '../../Redux_Actions/comboBoxAction';

import "../../Css/provider.css";

import $ from 'jquery';

class SingleService extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: [],
      locations: [],
      serviceId: this.props.service.id,
      index: this.props.index,
      img_intro: {hairPic} ,
    }
  }

  componentDidMount() {

    this.props.getProvidersByService(this.state.serviceId);
    this.getSkillsForService(this.state.serviceId);

    this.renderImage();
    this.toggleImage();
  };

  componentDidUpdate(prevProps, prevState){
    if (!prevProps.hairProviders && this.props.hairProviders) {
      this.getSkillsForService(this.state.serviceId);
    }
  }

  getSkillsForService = (service_id) => {
    service_id = this.state.serviceId
    axios.get(`/services/skills/${service_id}`)
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
    if (this.props.hairProviders) {
      const providerObj = {};
      const providerArr = [];
      this.props.hairProviders.forEach(provider => {
        if(!providerObj[provider.provider_id]) {
          providerObj[provider.provider_id] = true;
          providerArr.push(provider);
        }
      })
      return providerArr.map(serviceP => {
        return (
          <div key={serviceP.provider_id}>
          <Link to={`/singleProviderProfile/${serviceP.provider_id}`}>
            <div className="box">
              <div className="content">
                <img
                    alt="avatar"
                    className='hvrbox-layer_bottom'
                    src={serviceP.avatar}
                    style={{ height: "140px",  transform: 'translateX(20px)'}}
                  />

                <div className='hvrbox-layer_top'>
                  <div className='hvrbox-text'>
                    <span id="providername" className='ih-fade-down ih-delay-sm'>{serviceP.provider}</span>
                    <br />
                    <div style={{ zIndex: '4', textAlign: 'center'}}>
                    {serviceP.borough} <br />
                  {serviceP.email} <br />
                {serviceP.phone_number} <br />
              {serviceP.website_link}
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
      return <div className="lds-heart"><div></div></div>;
    }
  };

  renderImage = () => {
    if (this.state.serviceId === 2 ) {
      // this.setState ({
      //   img_intro: {nailsPic}
      // })
      return (
        <img
          alt="intro"
          src={nailsPic}
          width="600px"
          />
      )
    }
    else if (this.state.serviceId === 3) {
      // this.setState ({
      //   img_intro: {barberPic}
      // })
      return (
        <img
          alt="intro"
          src={barberPic}
          width="600px"
          />
      )
    } else if (this.state.serviceId === 4) {
      // this.setState({
      //   img_intro: {makeupPic}
      // })
      return (
        <img
          alt="intro"
          src={makeupPic}
          width="600px"
          />
      )
    } else if (this.state.serviceId === 1) {
      // this.setState ({
      //   img_intro: {hairPic}
      // })
      return (
        <img
          alt="intro"
          src={hairPic}
          width="600px"
          />
      )
    }


    // return (
    //   <img
    //     alt="intro"
    //     src={this.state.img_intro}
    //     width="600px"
    //     />
    // )


  }

  toggleImage = () => {
    // let id1 = $('#1')
    // let id2 = $('#2')

    let idNumber = this.state.serviceId
    let id = $(`#` + idNumber)

    let ctnr_box = $('.ctnr_box');
    let img_intro = $('.img_intro');
    let inner_ctnr_providers = $('.inner_ctnr_providers')

    if (idNumber % 2 === 1) {
      ctnr_box
        .removeClass('ctnr_box')
        .addClass('ctnr_box_right');
      img_intro
        .removeClass('img_intro')
        .addClass('img_intro_right')
      inner_ctnr_providers
        .removeClass('inner_ctnr_providers')
        .addClass('inner_ctnr_providers_right')
    }


    // else
    // if ( idNumber % 2 === 1 ) {
    //   ctnr_box
    //     .removeClass('ctnr_box_right')
    //     .addClass('ctnr_box');
    //   img_intro
    //     .removeClass('img_intro_right')
    //     .addClass('img_intro')
    //   inner_ctnr_providers
    //     .removeClass('inner_ctnr_providers_right')
    //     .addClass('inner_ctnr_providers')
    // }
  }


  render() {
    const { index } = this.state;

    return (
      <div id={this.state.serviceId}>
      <div className='ctnr_prov'>
        <div className={index % 2 === 1 ? 'ctnr_box_right' : "ctnr_box"} >
          <div className={index % 2 === 1 ? "img_intro_right" : "img_intro"} style={{borderTop: 'solid #ecb99c'}}>
            {this.renderImage()}
            {/*
            <img
              alt="intro"
              src={hairPic}
              width="600px"
              />
              */}
          </div>
          <div className={index % 2 === 1 ? "inner_ctnr_providers_right" : "inner_ctnr_providers"}>
            <div className='ctnr_nav'>
              <div className="title_hair">{this.props.service.name}</div>
              <span className="dropdown">
                <ComboBox
                  fetchSkillList={this.state.skills}
                  getProvidersByService = {this.props.getProvidersByService}
                  fetchProvidersByService = {this.props.fetchProvidersByService}
                  serviceId={this.state.serviceId}
                  />
              </span>
            </div>

            <div className="providers">
              <div className="prov">{this.renderProviders()}</div>
            </div>
          </div>


        </div>
      </div>
    </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    hairProviders: state.providersByService[ownProps.service.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: (service_id) => dispatch(fetchProvidersByService(service_id)),
    fetchProBySvcAndBoro: (service_id, borough) => dispatch(fetchProvidersByService(service_id, borough)),
    getProvidersBySkill: (service_id, skill_id) => dispatch( getProvidersBySkill(service_id, skill_id)),
    getProvidersByService: (service_id, skill_id, borough) => dispatch(getProvidersByService(service_id, skill_id, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleService);
