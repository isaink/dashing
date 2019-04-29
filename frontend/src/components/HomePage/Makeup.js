import React from "react";
import { Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
// import SkillsByServiceComboBox from "./SkillsByServiceComboBox";
import makeupPic from "../../photo_assets/makeup.jpg";
import { Dropdown } from "./Dropdown.js";

import { ComboBox } from "./ComboBox.js";
import axios from 'axios';
import { getProvidersBySkill } from "../../Redux_Actions/comboBoxAction";

class Makeup extends React.Component {
  state = {
    skills: [],
  }

  componentDidMount() {
    this.props.fetchProvidersByService();
    // this.props.getProvidersBySkill();
  }

  componentDidUpdate(prevProps, prevState){
    if (!prevProps.makeupProviders && this.props.makeupProviders) {
      this.getSkillsForService();
    }
  }

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
  }
// };


  renderProviders = () => {
    if (this.props.makeupProviders) {
      return this.props.makeupProviders.map(makeupP => {
        return (
          <div key={makeupP.provider_id}>
            <Link to={`/singleProviderProfile/${makeupP.provider_id}`}>
              <div className="box">
                <div className="content">
                    <img
                      alt="avatar"
                      className="hvrbox-layer_bottom"
                      src={makeupP.avatar}
                      style={{ height: "150px", display: 'block' }}
                    />
                </div>

                  <div className='hvrbox-layer_top'>
                      <div className='hvrbox-text'>
                    <span id="providername" className='ih-fade-down ih-delay-sm'>{makeupP.provider}</span>
                    <br />
                    <div className='ih-zoom-in ih-delay-md'>
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
    // console.log('MAKEUP STATE', this.state);
    // console.log('MAKEUP PROPS', this.props);
    // console.log(this.props.makeupProviders);
    // console.log(this.props.makeupProvidersBySkill);

    return (
      <>
      <div className='ctnr_prov'>

        <div className="makeup_box">
          <div className="ctnr_box">
            <div className="img_intro">
              <img
                alt="intro"
                src={makeupPic}
                width="600px"
                height="auto"
                />
            </div>

            <div className="inner_ctnr_providers">
              <div className="title">Makeup</div>
              <hr />

              <span className="dropdown">
                <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
                <ComboBox
                  fetchSkillList={this.state.skills}
                  getProvidersBySkill={this.props.getProvidersBySkill}
                  />
              </span>

              <span className="combobox">
              </span>


              <div className="providers">
                <div className="prov">{this.renderProviders()}</div>
              </div>
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
    makeupProvidersBySkill: [state.providersBySkill[4]],
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(4)),
    fetchProBySvcAndBoro: borough => dispatch(fetchProvidersByService(4, borough)),

    getProvidersBySkill: (skill_id) => dispatch(getProvidersBySkill(4, skill_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Makeup);
