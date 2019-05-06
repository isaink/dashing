import React, { Component } from "react";
import "../Css/user.css";
import homeLogo from "../../photo_assets/dashing_logo_invert.png";
import bk_img from "../../photo_assets/beautybackground.jpg";

export default class NewUser extends Component {

render() {
    return (
        <>

        <img src={bk_img} alt="" style={{  maxHeight: '800px'}}/>

        <div className='ctnr_user'>

            <img src={homeLogo} alt='logo' style={{ height: '30px', zIndex: -1}}/>
            <p>Set Up as </p>
            <h2 className='type_user'> CUSTOMER </h2>
            <p>Set Up as </p>
            <h2 className='type_user'> PROVIDER </h2>
        </div>
        
      </>
    );
  }
};
      
