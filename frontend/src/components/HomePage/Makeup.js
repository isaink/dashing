import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ComboBox } from "./ComboBox.js";
import { getProvidersBySkill } from "../../Redux_Actions/comboBoxAction";
import { getProvidersByService } from '../../Redux_Actions/comboBoxAction';
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import "../Css/provider.css";
import makeupPic from "../../photo_assets/makeup.jpg";
import makeup from '../../img/makeup1.jpg'

class Makeup extends React.Component {
  state = {
    skills: [],
    locations: [],
    serviceId: 2,
  }

  componentDidMount() {
    this.props.fetchProvidersByService();
    // this.props.getProvidersBySkill();
  };

  componentDidUpdate(prevProps, prevState){
    if (!prevProps.makeupProviders && this.props.makeupProviders) {
      this.getSkillsForService();
    }
  };

  getSkillsForService = () => {
    axios.get(`/services/skills/4`)
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
    if (this.props.makeupProviders) {

      const providerObj = {};
      const providerArr = [];
      this.props.makeupProviders.forEach(provider => {
        if(!providerObj[provider.provider_id]) {
          providerObj[provider.provider_id] = true;
          providerArr.push(provider);
        }
      });

      return providerArr.map(makeupP => {
        return (
          <div key={makeupP.provider_id}>
            <Link to={`/singleProviderProfile/${makeupP.provider_id}`}>
              <div className="box">
                <div className="content">
                    <img
                      alt="avatar"
                      className="hvrbox-layer_bottom"
                      src={makeupP.avatar}
                      style={{ height: "140px" }}
                    />
                </div>

                  <div className='hvrbox-layer_top'>
                      <div className='hvrbox-text'>
                    <span id="providername" className='ih-fade-down ih-delay-sm'>{makeupP.provider}</span>
                    <br />
                    <div style={{ zIndex: '4', textAlign: 'center'}}>
                      {makeupP.borough} <br />
                      {makeupP.email} <br />
                      {makeupP.phone_number} <br />
                      {makeupP.website_link}
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
      )
    }
  };

  render() {
    return (
      <>
      <div className='ctnr_prov'>
          <div className="ctnr_box_right">
            <div className="img_intro_right">
              <img
                alt="intro"
                src={makeup}
                // width="600px"
                height='100%'
                style={{ objectFit: "cover", borderBottom: 'solid #ecb99c',borderTop: 'solid #ecb99'}}
                />
            </div>

            <div className="inner_ctnr_providers_right">
              <div className='ctnr_nav'>

                <div className="title" style={{    paddingLeft: '20px'}}>Makeup</div>
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
    makeupProviders: state.providersByService[4],
    // makeupProvidersBySkill: [state.providersBySkill[4]],
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(4)),
    fetchProBySvcAndBoro: borough => dispatch(fetchProvidersByService(4, borough)),

    getProvidersBySkill: (skill_id) => dispatch(getProvidersBySkill(4, skill_id)),
    getProvidersByService: (skill_id, borough) => dispatch(getProvidersByService(4, skill_id, borough))

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Makeup);
