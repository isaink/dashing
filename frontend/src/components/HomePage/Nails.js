import React from "react";
import { Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
// import SkillsByServiceComboBox from "./SkillsByServiceComboBox";
import nailsPic from "../../photo_assets/nails.jpg";
// import { Dropdown } from "./Dropdown.js";

import axios from 'axios';
import { ComboBox } from "./ComboBox.js";
import { getProvidersBySkill } from '../../Redux_Actions/comboBoxAction';
import { getProvidersByService } from '../../Redux_Actions/comboBoxAction';


class Nails extends React.Component {
  state = {
    skills: [],
    locations: [],
    serviceId: 2,
  }

  componentDidMount() {
    this.props.fetchProvidersByService();
  }

  componentDidUpdate(prevProps, prevState){
    if (!prevProps.nailProviders && this.props.nailProviders) {
      this.getSkillsForService();
    }
  }

  getSkillsForService = () => {
    axios.get(`/services/skills/2`)
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
    if (this.props.nailProviders) {
      const providerObj = {};
      const providerArr = [];
      this.props.nailProviders.forEach(provider => {
        if(!providerObj[provider.provider_id]) {
          providerObj[provider.provider_id] = true;
          providerArr.push(provider);
        }
      })

      return providerArr.map(nailP => {
        return (
          <div key={nailP.provider_id}>
            <Link to={`/singleProviderProfile/${nailP.provider_id}`}>
              <div className="box">
                <div className="content">
                  <img
                    alt="avatar"
                    className="hvrbox-layer_bottom"
                    src={nailP.avatar}
                    style={{ height: "150px" , display: 'block'}}
                    />
                  <div className='hvrbox-layer_top'>
                    <div className='hvrbox-text'>
                      <span id="providername"  className='ih-fade-down ih-delay-sm'>>{nailP.provider}</span>
                      <br />
                      <div className='ih-zoom-in ih-delay-md'>
                        {nailP.borough} <br />
                      {nailP.email} <br />
                    {nailP.phone_number} <br />
                  {nailP.website_link}
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
  console.log('NAIL STATE', this.state)

  return (
    <>
    <div className='ctnr_prov'>
      <div className="ctnr_box">
        <div className="img_intro">
          <img
            alt="intro"
            src={nailsPic}
            width="600px"
            height="auto"
            />
        </div>

        <div className="inner_ctnr_providers">
          <div className="title">Nails</div>
          <hr />

          <span className="dropdown">
            {/*
              // <div className="providers">{this.renderProviders()}</div>
            // <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
            getProvidersBySkill={this.props.getProvidersBySkill}
            fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro}
            */}
            <ComboBox
              fetchSkillList={this.state.skills}
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
    fetchProBySvcAndBoro: borough => dispatch(fetchProvidersByService(2, borough)),

    getProvidersBySkill: (skill_id) => dispatch( getProvidersBySkill(2, skill_id)),
    getProvidersByService: (skill_id, borough) => dispatch(getProvidersByService(2, skill_id, borough))

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nails);
