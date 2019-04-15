import React, { Component } from "react";
import { Hair } from './../../components/HomePage/Hair';
import './../../Css/provider.css';
import { connect } from "react-redux";
import { fetchProvidersByService } from "./../../Redux_Actions/providerAction";

// let intro_professional = require('./../../img/provider.jpg');  

class Provider extends Component {
    componentDidMount() {
        this.props.fetchProvidersByService();
    };

    render(){
        return(
            <>  
                <div className="ctnr_provider">
                    <div className='img_intro'> 
                        <img alt='intro' src='https://media.giphy.com/media/fzub3vneXmvx6/giphy.gif' />
                        <header className='header_services' >
                            <h1 className='provider_name' > HAIR </h1>
                        </header>
                    </div>

                    <div className='inner_ctnr_providers'> 
                        <Hair hairProviders={this.props.hairProviders}/>
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
      fetchProvidersByService: () => dispatch(fetchProvidersByService(1))
    };
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Provider);