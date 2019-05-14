import React from "react";
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import hairPic from "../../photo_assets/hair.jpg";
import nailsPic from "../../photo_assets/nails.jpg";
import barberPic from "../../photo_assets/barber.jpeg";
import makeupPic from '../../img/makeup.png'

import { ComboBox } from "./ComboBox.js";
import { getProvidersBySkill } from '../../Redux_Actions/comboBoxAction';
import { getProvidersByService } from '../../Redux_Actions/comboBoxAction';

import "../../Css/provider.css";

const pics = {
  1: hairPic,
  2: nailsPic,
  3: barberPic,
  4: makeupPic,
}

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
  };

  componentDidUpdate(prevProps, prevState){
    if (!prevProps.hairProviders && this.props.hairProviders) {
      this.getSkillsForService(this.state.serviceId);
    }
  };

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
  };


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
            <div className="content">
              <div className='ctnr_avatar'> 
                <Link to={`/singleProviderProfile/${serviceP.provider_id}`}>
                  <img
                    alt="avatar"
                    className='prov_avatar'
                    src={serviceP.avatar}
                    style={{ height: "150px"}}
                  />
                  </Link>  
                <div>
                  <div className='info_prov'>
                    <div style={{textTransform: 'uppercase', fontSize: '20px', color: '#ECB99C'}} >
                      {serviceP.first_name} { " "}   {serviceP.last_name} <br />
                    </div>
                    {serviceP.borough} 
                  </div>
                </div>
            </div>
            </div>
        </div>
        );
      });
    } else {
      return <div className="lds-heart"><div></div></div>;
    }
  };

  render() {
    const { index } = this.state;

    return (
      <div id={this.state.serviceId}>
      <div className='ctnr_prov'>
        <div className={index % 2 === 1 ? 'ctnr_box_right' : "ctnr_box"} >
          <div className={index % 2 === 1 ? "img_intro_right" : "img_intro"} style={{borderTop: 'solid #ecb99c'}}>
            <img
              alt="intro"
              src={pics[this.state.serviceId]}
              width="600px"
              />
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
            <h3 className="text_intro_srv"> 
              Choose your time saver and <b style={{ color: 'white'}}>HAIR</b> care
            </h3>
              <div className="prov">{this.renderProviders()}</div>
              {this.handlerPaggination()}
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
