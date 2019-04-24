import React from "react";
import { Link } from "react-router-dom";
import "../../Css/provider.css";
import { connect } from "react-redux";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
import SkillsByServiceComboBox from "./SkillsByServiceComboBox";
import { Dropdown } from "./Dropdown.js";

class Nails extends React.Component {
  componentDidMount() {
    this.props.fetchProvidersByService();
  };

  renderProviders = () => {
    if (this.props.nailProviders) {
      return this.props.nailProviders.map(nailP => {
        return (
          <>
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
          </>
        );
      });
    } else {
      return (
        <div className="lds-heart"><div></div></div>
      );
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
              <div className="title">N a i l s</div>
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
