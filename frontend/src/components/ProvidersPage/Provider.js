import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { Hair } from "../HomePage/Hair";
import { fetchProvidersByService } from "../../Redux_Actions/providerAction";
import "./../../Css/provider.css";

class Provider extends Component {
  componentDidMount() {
    this.props.fetchProvidersByService();
    this.props.fetchProBySvcAndBoro();
  };

  handleServHair = (e) => {
    this.setState({
      hair: 1
    })
  };

  handleServNail = (e) => {
    this.setState({
      nail: 2
    })
  };

  render() {
    return (
      <>
        <div className="hair_box">
          <div className="img_intro">
          <div className='line'>
            <img
              alt="intro"
              src="http://fashionbombdaily.com/wp-content/uploads/2016/08/fashion-bomb-daily-Kat-Morgan-Cardi-B-17.jpg"
              width="600px"
              height="auto"
            />
             </div>
          </div>
            
          <div className="inner_ctnr_providers">
         
            <Hair
         hairProviders={this.props.hairProviders}
        //  fetchProBySvcAndBoro={this.props.fetchProBySvcAndBoro}
              
            />
            
          </div>
        </div>

      <Switch>
        <Route path='/provider/:id'/>
      </Switch>

        
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
      dispatch(fetchProvidersByService(1, borough))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Provider);
