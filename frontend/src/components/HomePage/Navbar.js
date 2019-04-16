import React, {Component} from "react";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from 'react-scroll';
import "../../Css/Navbar.css";

import logo from "../../photo_assets/dashing_logo.png";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render(){
    return (
      <>
      <div className="navbar">
        <span className="dashingNav">
          <h3>
            <Link to={"/"}>
              <img 
                src={logo}
                alt=""
                width="175px"
                height="auto"
                onClick={this.scrollToTop}
              />
            </Link>
          </h3>
        </span>
  
        <div className="links">
          <Link 
            className='links'
            activeClass='active'
            to="Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Home</Link>
  
          <Link 
            className='links'
            activeClass='active'
            to='/provider'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Hair Provider</Link>
  
          <Link 
            className='links'
            activeClass='active'
            to="/makeup"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Makeup</Link>
  
          <Link 
            className='links'
            activeClass='active'
            to="/nails"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Nails</Link>
  
          <Link 
            className='links'
           activeClass='active'
           to="/barber"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}
           >Barber</Link>
  
          <Link 
            className='links'
            activeClass='active'
            to="/education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Educational Services</Link>
  
          <Link 
          className='links'
          activeClass='active'
          to="/aboutme"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >About Me</Link>
        </div>
      </div>
      </>
    );
  }
  
};
