import React from "react";
import { Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
import SkillsByServiceComboBox from "./SkillsByServiceComboBox";
import { Dropdown } from "./Dropdown.js";

class Makeup extends React.Component {
  componentDidMount() {
    this.props.fetchProvidersByService();
  };

  renderProviders = () => {
    if (this.props.makeupProviders) {
      return this.props.makeupProviders.map(makeupP => {
        return (
          <>
            <Link to={`/singleProviderProfile/${makeupP.provider_id}`}>
              <div className="box">
                <img
                  alt="avatar"
                  className="content"
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
          </>
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

        <div className="ctnr_box">
          <div className="img_intro">
            <img
              alt="intro"
              src="http://fashionbombdaily.com/wp-content/uploads/2016/08/fashion-bomb-daily-Kat-Morgan-Cardi-B-17.jpg"
              width="600px"
              height="auto"
            />
          </div>

          <div className="inner_ctnr_providers">
            <div className="title">M a k e u p</div>
            <hr />

            <span className="dropdown">
              <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
              <SkillsByServiceComboBox />
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
