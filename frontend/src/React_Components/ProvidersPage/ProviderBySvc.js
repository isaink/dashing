import React, { Component } from "react";
import './../../Css/provider.css';

let intro_professional = require('./../../img/provider.jpg');

export default class Provider extends Component {
    render(){
        return(
            <>  
                <header className='header_services'>
                        <h1 > HAIR </h1>
                </header>
                <div className="ctnr_provider">
                  
             
                    <div className='img_intro'> 
                        <img alt='intro' src={intro_professional}/>
                    </div>

                    <div className='inner_ctnr_providers'> 
                    </div>
                </div>
            </>
        )
    }
};