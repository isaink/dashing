import React from "react";
import { Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
// import SkillsByServiceComboBox from "./SkillsByServiceComboBox";
import hairPic from "../../photo_assets/hair.jpg";
import { Dropdown } from "./Dropdown.js";

import axios from 'axios';
import { ComboBox } from "./ComboBox.js";
import { getProvidersBySkill } from '../../Redux_Actions/comboBoxAction';
import { getProvidersByService } from '../../Redux_Actions/comboBoxAction';

class Hair extends React.Component {
  state = {
    skills: [],
    locations: [],
    serviceId: 1,
  }

  componentDidMount() {
    this.props.fetchProvidersByService();
  };

  componentDidUpdate(prevProps, prevState){
    if (!prevProps.hairProviders && this.props.hairProviders) {
      this.getSkillsForService();
      // this.getLocationsForService();
    }
  }

  getSkillsForService = () => {
    axios.get(`/services/skills/1`)
    .then(res => {
      // console.log(res.data.data);
      // debugger
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
      return this.props.hairProviders.map(hairP => {
        return (
          <div key={hairP.provider_id}>
          <Link to={`/singleProviderProfile/${hairP.provider_id}`}>
            <div className="box ">
              <div className="content">
                <img
                    alt="avatar"
                    className='hvrbox-layer_bottom'
                    src={hairP.avatar}
                    style={{ height: "140px", display: 'block'}}
                  />

                <div className='hvrbox-layer_top'>
                  <div className='hvrbox-text'>
                    <span id="providername" className='ih-fade-down ih-delay-sm'>{hairP.provider}</span>
                    <br />
                    <div style={{ zIndex: '4', textAlign: 'center'}}>
                    {hairP.borough} <br />
                    {hairP.email} <br />
                    {hairP.phone_number} <br />
                    {hairP.website_link}
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


  render() {
    console.log(this.props);
    return (
      <>
      <div className='ctnr_prov'>

        <div className="ctnr_box">
          <div className="img_intro">
            <img
              alt="intro"
              src={hairPic}
              width="600px"
              height="auto"
              />
          </div>

          <div className="inner_ctnr_providers">
            <div className="title">Hair</div>
            <hr />

            <span className="dropdown">
              {/*
              // <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
              */}
              <ComboBox
                fetchSkillList={this.state.skills}
                getProvidersBySkill={this.props.getProvidersBySkill}
                fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro}
                getProvidersByService = {this.props.getProvidersByService}
                fetchProvidersByService = {this.props.fetchProvidersByService}
                serviceId={this.state.service_id}
                />
            </span>

            <div className="providers">
              <div className="prov">{this.renderProviders()}</div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    hairProviders: state.providersByService[1],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(1)),
    fetchProBySvcAndBoro: borough => dispatch(fetchProvidersByService(1, borough)),

    getProvidersBySkill: (skill_id) => dispatch( getProvidersBySkill(1, skill_id)),
    getProvidersByService: (skill_id, borough) => dispatch(getProvidersByService(1, skill_id, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hair);
