import React from "react";
import axios from "axios";
// import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ComboBox } from "./ComboBox.js";
import { getProvidersBySkill } from "../../Redux_Actions/comboBoxAction";
import { getProvidersByService } from "../../Redux_Actions/comboBoxAction";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
import "../../Css/provider.css";
import hairPic from "../../photo_assets/hair.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarForComponents from "./components/NavBars/NavbarForComponents";
import NavbarForComponents from "../NavBars/NavbarForComponents";
// import NewNav from '../NavBars/newNav';
// import Nails from './Nails';
// import Makeup from './Makeup';
// import Barber from './Barber';

class Hair extends React.Component {
  state = {
    skills: [],
    locations: [],
    serviceId: 1,
    activePage: 3
  };
  // handlerPaggination = () => {
  //   let active = 3;
  //   let items = [];
  //   for (let number = 1; number <= 3; number++) {
  //     items.push(
  //       <Pagination.Item key={number} active={number === active}>
  //         {number}
  //       </Pagination.Item>
  //     );
  //   }
  //   const paginationBasic = (
  //     <div>
  //       <Pagination>{items}</Pagination>
  //       {/* <br /> */}
  //
  //       {/* <Pagination size="lg">{items}</Pagination> */}
  //       {/* <br /> */}
  //
  //       {/* <Pagination size="sm">{items}</Pagination> */}
  //     </div>
  //   );
  //   return paginationBasic;
  // };
  componentDidMount() {
    this.props.getProvidersByService();
    this.getSkillsForService();
  }
  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.hairProviders && this.props.hairProviders) {
      this.getSkillsForService();
    }
  }
  getSkillsForService = () => {
    axios
      .get(`/services/skills/1`)
      .then(res => {
        this.setState({
          skills: res.data.data
        });
      })
      .catch(err => {
        console.log("GET SKILLS ERR", err);
      });
  };
  renderProviders = () => {
    if (this.props.hairProviders) {
      const providerObj = {};
      const providerArr = [];
      this.props.hairProviders.forEach(provider => {
        if (!providerObj[provider.provider_id]) {
          providerObj[provider.provider_id] = true;
          providerArr.push(provider);
        }
      });
      return providerArr.map(hairP => {
        return (
          <div key={hairP.provider_id}>
            <div className="content">
              <div className="ctnr_avatar">
                <Link to={`/singleProviderProfile/${hairP.provider_id}`}>
                  <img
                    alt="avatar"
                    className="prov_avatar"
                    src={hairP.avatar}
                    style={{ height: "150px" }}
                  />
                </Link>
              </div>
              <div className="info_prov">
                <div
                  style={{
                    textTransform: "uppercase",
                    fontSize: "20px",
                    color: "#ECB99C"
                  }}
                >
                  {hairP.first_name} {hairP.last_name} <br />
                </div>
                {hairP.borough} <br />
              </div>
            </div>
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
    console.log('HAIR COMPONENT', this.props)
    return (
      <>
        <div className="ctnr_prov">
          <div className="ctnr_nav">
            <div className="title_hair">HAIR</div>
            <span className="dropdown">
              <ComboBox
                fetchSkillList={this.state.skills}
                getProvidersByService={this.props.getProvidersByService}
                fetchProvidersByService={this.props.fetchProvidersByService}
                serviceId={this.state.serviceId}
              />
            </span>
          </div>
          <div className="ctnr_box">
            <div className="img_intro">
              {/* <NewNav /> */}
              <img alt="intro" src={hairPic} width="600px" />
            </div>
            <div className="inner_ctnr_providers">
              <div className="providers">
                <h3 className="text_intro_srv">
                  Choose your time saver and{" "}
                  <b style={{ color: "white" }}>HAIR</b> care
                </h3>
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
    hairProviders: state.providersByService[1]
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchProvidersByService: () => dispatch(fetchProvidersByService(1)),
    fetchProBySvcAndBoro: borough =>
      dispatch(fetchProvidersByService(1, borough)),
    getProvidersBySkill: skill_id => dispatch(getProvidersBySkill(1, skill_id)),
    getProvidersByService: (skill_id, borough) =>
      dispatch(getProvidersByService(1, skill_id, borough))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hair);
