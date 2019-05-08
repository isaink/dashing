import React, { Component } from "react";
import {
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";

import { Welcome } from "./Welcome";
import Hair from "./Hair";
import Nails from "./Nails";
import Barber from "./Barber";
import Makeup from "./Makeup";
import ProviderSignUpForm from '../UserAuth/ProviderSignUpForm';
import  LogInForm from '../UserAuth/LogIn';

import EducationProv_Container  from "../../Redux_Containers/EducationProv_Container";
import { AboutUs } from "./AboutUs";
import NavbarHome from "../NavBars/Navbar";
import homeLogo from "../../photo_assets/dashing_logo_invert.png";

import axios from 'axios';
import SingleService from './SingleService';

import "./../../Css/Home.css";
import NavbarForComponents from "../NavBars/NavbarForComponents";



class Home extends Component {
  state = {
    services: [],
    serviceName: '',

    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
    startUp: '',    // toggleForms switch statement
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });

    this.getServices()
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 3000,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }



  handleSignUp = (e) => {
    this.setState({
      startUp: true
    })
  };

  handleLogIn = (e) => {
      this.setState({
        startUp: false
    })
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleLogginUser = (e) => {
    e.preventDefault();
    let { email, password } = this.state;

    this.props.logInUser({ email, password });
  };

  handleLogOutUser = () => {
    this.props.LogOutUser();
  };

  handleSubmission = async (event) => {
    event.preventDefault();
    let { username, password,  email} = this.state;

    // CALL REDUX ACTION AFTER
    await this.props.newUser({ username, password, email });
    await this.props.logInUser({ username, password }); // this state have to macth with the backend router

  };

  handleForms = () => {
    switch(this.state.startUp){
      case false :
        return (
          <>
            <LogInForm
              startUp={this.startUp}
              loginUser={this.loginUser}
              email={this.state.email}
              password={this.state.password}
              handleChange={this.handleChange}
              handleLogginUser={this.handleLogginUser}
            />
          </>
      )
      case true:
      return (
          <>
             <ProviderSignUpForm
              startUp={this.startUp}
              email={this.state.email}
              password={this.state.password}
              first_name={this.state.first_name}
              last_name={this.state.last_name}
              phone_number={this.state.phone_number}
              handleChange={this.handleChange}
              handleSubmission={this.handleSubmission}
            />
          </>
      )
      default :
        return (
          <>
            <div className='button_welcome'>
              <button type='submit' className='start' onClick={this.handleSignUp}>
                  Get Started
              </button >

              <button type='submit' className='log_in' onClick={this.handleLogIn}>
                Log In
              </button>
            </div>
        </>
      )
    }
  };



  getServices = () => {
    axios.get(`/services`)
    .then(res => {
      console.log(res.data.body);
      // debugger
      this.setState({
        services: res.data.body
      })
    })
    .catch(err => {
      console.log('GET SERVICE ERR', err);
    })
  }


  serviceList = () => {
    return this.state.services.map((service, index) => {
    // console.log(service.name, service.id);
    // debugger

      return (
        <dd key={service.id}>
          <Element name={service.name.toLowerCase()} className='Element'>
            <SingleService service={service} index={index}/>
          </Element>
        </dd>
      )
    })
  }


  render() {
    console.log(this.state.services);
    console.log(this.getServices);
    console.log(this.serviceList);

    return (
      <div className="HomepageDiv">
        <NavbarForComponents />

        <dl>

          <dd>
            <div className="bg_welcome">
              <div className="homeLogo">
                <img src={homeLogo} alt="" width="700px"  />
              </div>
            </div>
          </dd>

          <dd>
            <Element name="home" className="Element">
              <Welcome />
            </Element>
          </dd>

          <dt>
            <div className='NavbarDiv'>
              <NavbarHome className='NavbarComponentTag'/>
            </div>
          </dt>


          {this.serviceList()}

        </dl>
      </div>

    );
  }
};

export default Home;


//  {/* <button onClick={this.scrollToTop}>To the top!</button> */}




// <dd>
//   <Element name="nails" className='Element'>
//   {this.serviceInElement()}
//   </Element>
//   </dd>


// {/*
//
//   <div className="HomepageDiv">
//   <dl>
//   <dd>
//   <div className="bg_welcome">
//   <div className="homeLogo">
//   <img src={homeLogo} alt="" width="700px"  />
//   </div>
//   </div>
//   </dd>
//
//   <dd>
//   <Element name="home" className="Element">
//   <Welcome />
//   </Element>
//   </dd>
//
//   <dt>
//   <div className='NavbarDiv'>
//   </div>
//   </dt>
//
//
//
//   <dd>
//   <Element name="hair" className='Element'>
//   <Hair />
//   </Element>
//   </dd>
//
//   <dd>
//   <Element name="nails" className='Element'>
//   <Nails />
//   </Element>
//   </dd>
//
//   <dd>
//   <Element name="barber" className="Element">
//   <Barber />
//   </Element>
//   </dd>
//
//   <dd>
//   <Element name="makeup" className="Element">
//   <Makeup />
//   </Element>
// </dd>
//
//
// </dl>
// </div>
// */}
