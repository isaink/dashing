import React from "react";
import { withRouter, Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";

import { Dropdown } from "./Dropdown.js";

import { ComboBox } from "./ComboBox.js";
import axios from 'axios';


class Barber extends React.Component {
  state = {
    skills: []
  }

  componentDidMount() {
    this.props.fetchProvidersByService();
  }

  componentDidUpdate(prevProps, prevState){
    if (!prevProps.barberProviders && this.props.barberProviders) {
      this.getSkillsForService();
    }
  }

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
  }

  renderProviders = () => {
    if (this.props.barberProviders) {
      return this.props.barberProviders.map(barberP => {
        return (
          <div key={barberP.provider_id}>
            <Link to={`/singleProviderProfile/${barberP.provider_id}`}>
              <div className="barber_avatar box">
                <img
                  alt="avatar"
                  className="pic_barber content"
                  src={barberP.avatar}
                  style={{ height: "150px" }}
                />
                <span id="providername">{barberP.provider}</span>
                <br />
                {barberP.borough} <br />
                {barberP.email} <br />
                {barberP.phone_number} <br />
                {barberP.website_link}
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
    console.log('BARBER STATE', this.state)

    return (
      <>
        <div className="barber_title">Barber</div>
        <span className="dropdown">
          <h1>Select Your Location</h1>
          <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
        </span>

        <span className="combobox">
          <ComboBox fetchProviderByServiceAndSkill={this.state.skills} />
        </span>

        <div className="barber_box">
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
    barberProviders: state.providersByService[3]
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(3)),
    fetchProBySvcAndBoro: borough =>
      dispatch(fetchProvidersByService(3, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Barber);
