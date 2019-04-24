import React from "react";
import { Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
import SkillsByServiceComboBox from "./SkillsByServiceComboBox";
import hairPic from "../../photo_assets/hair.jpg";
import { Dropdown } from "./Dropdown.js";

class Hair extends React.Component {
  componentDidMount() {
    this.props.fetchProvidersByService();
  };

  renderProviders = () => {
    if (this.props.hairProviders) {
      return this.props.hairProviders.map(hairP => {
        return (
          <>  
        
            <Link to={`/singleProviderProfile/${hairP.provider_id}`}>
            <div>
            <div>
                <img
                    alt="avatar"
                    className='hvrbox-layer_bottom'
                    src={hairP.avatar}
                    style={{ height: "150px", display: 'block'}}
                  />
                
                  <div className='hvrbox-layer_top'>
                    <div className='hvrbox-text'>
                    <span id="providername" className='ih-fade-down ih-delay-sm'>{hairP.provider}</span>
                    <br />
                    <div className='ih-zoom-in ih-delay-md'>
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
          </>
        );
      });
    } else {
      return <div className="lds-heart"><div></div></div>;
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
              src={hairPic}
              width="600px"
              height="auto"
            />
          </div>

          <div className="inner_ctnr_providers">
            <div className="title">Hair</div>
            <hr />

            <span className="dropdown">
              <Dropdown fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro} />
              <SkillsByServiceComboBox />;

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
    hairProviders: state.providersByService[1]
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(1)),
    fetchProBySvcAndBoro: borough =>
      dispatch(fetchProvidersByService(1, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hair);
