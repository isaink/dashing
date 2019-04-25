import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import { Dropdown } from "./Dropdown.js";

import { ComboBox } from "./ComboBox.js";
import axios from 'axios';

class Nails extends React.Component {
  state = {
    skills: []
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

  renderProviders = () => {
    if (this.props.nailProviders) {
      return this.props.nailProviders.map(nailP => {
        return (
          <div key={nailP.provider_id}>
            <Link to={`/singleProviderProfile/${nailP.provider_id}`}>
              <div className="hair_avatar box">
                <img
                  alt="avatar"
                  className="pic_hair content"
                  src={nailP.avatar}
                  style={{ height: "150px" }}
                />
                <span id="providername">{nailP.provider}</span>
                <br />
                {nailP.borough} <br />
                {nailP.email} <br />
                {nailP.phone_number} <br />
                {nailP.website_link}
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
    console.log('NAIL STATE', this.state)

    return (
      <>
        <div className="hair_title">Nails</div>
        <span className="dropdown">
          <h1>Select Your Location</h1>
          <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
        </span>

        <span className="combobox">
          <ComboBox fetchProviderByServiceAndSkill={this.state.skills} />
        </span>


        <div className="providers">{this.renderProviders()}</div>
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
    fetchProBySvcAndBoro: borough =>
      dispatch(fetchProvidersByService(2, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nails);
