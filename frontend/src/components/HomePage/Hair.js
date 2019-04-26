import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import { Dropdown } from "./Dropdown.js";

import axios from 'axios';
import { ComboBox } from "./ComboBox.js";
import { getProvidersBySkill } from '../../Redux_Actions/comboBoxAction';

class Hair extends React.Component {
  state = {
    skills: []
  }

  componentDidMount() {
    this.props.fetchProvidersByService();
  }

  componentDidUpdate(prevProps, prevState){
    if (!prevProps.hairProviders && this.props.hairProviders) {
      this.getSkillsForService();
    }
  }

  getSkillsForService = () => {
    axios.get(`/services/skills/1`)
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
      return this.props.hairProviders.map(hairP => {
        return (
          <div key={hairP.provider_id}>
            <Link to={`/singleProviderProfile/${hairP.provider_id}`}>
              <div className="hair_avatar box">
                <img
                  alt="avatar"
                  className="pic_hair content"
                  src={hairP.avatar}
                  style={{ height: "150px" }}
                  />
                <span id="providername">{hairP.provider}</span>
                <br />
                {hairP.borough} <br />
              {hairP.email} <br />
            {hairP.phone_number} <br />
          {hairP.website_link}
        </div>
      </Link>
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
  console.log('HAIR STATE', this.state)

  return (
    <>
    <div className="hair_title">Hair</div>
    <span className="dropdown">
      <h1>Select Your Location</h1>
      <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
    </span>

    <span className="combobox">
      <ComboBox
        fetchSkillList={this.state.skills}
        getProvidersBySkill={this.props.getProvidersBySkill}
        />
    </span>


    <div className="hair_box">
      <div className="img_intro">
        <img
          alt="intro"
          src="http://fashionbombdaily.com/wp-content/uploads/2016/08/fashion-bomb-daily-Kat-Morgan-Cardi-B-17.jpg"
          width="600px"
          height="auto"
          />
      </div>
      <div className="inner_ctnr_providers">
        <div className="providers">{this.renderProviders()}</div>
      </div>
    </div>
    </>
);
}
}

const mapStateToProps = (state, ownProps) => {
  return {
    hairProviders: state.providersByService[1],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(1)),
    fetchProBySvcAndBoro: borough =>
    dispatch(fetchProvidersByService(1, borough)),

    getProvidersBySkill: (skill_id) => dispatch( getProvidersBySkill(1, skill_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hair);
