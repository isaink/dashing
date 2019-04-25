import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import { Dropdown } from "./Dropdown.js";

import { ComboBox } from "./ComboBox.js";
import axios from 'axios';

class Makeup extends React.Component {
  state = {
    skills: []
  }

  componentDidMount() {
    this.props.fetchProvidersByService();
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


  renderProviders = () => {
    if (this.props.makeupProviders) {
      return this.props.makeupProviders.map(makeupP => {
        return (
          <div key={makeupP.provider_id}>
            <Link to={`/singleProviderProfile/${makeupP.provider_id}`}>
              <div className="makeup_avatar box">
                <img
                  alt="avatar"
                  className="pic_makeup content"
                  src={makeupP.avatar}
                  style={{ height: "150px" }}
                />
                <span id="providername">{makeupP.provider}</span>
                <br />
                {makeupP.borough} <br />
                {makeupP.email} <br />
                {makeupP.phone_number} <br />
                {makeupP.website_link}
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
    console.log('MAKEUP STATE', this.state)

    return (
      <>
        <div className="makeup_title">Makeup</div>
        <span className="dropdown">
          <h1>Select Your Location</h1>
          <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
        </span>

        <span className="combobox">
          <ComboBox fetchProviderByServiceAndSkill={this.state.skills} />
        </span>

        <div className="makeup_box">
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
    makeupProviders: state.providersByService[4]
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(4)),
    fetchProBySvcAndBoro: borough =>
      dispatch(fetchProvidersByService(4, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Makeup);
