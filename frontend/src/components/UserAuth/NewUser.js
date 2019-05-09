import React, { Component } from "react";
import "../Css/user.css";
import homeLogo from "../../photo_assets/dashing_logo_invert.png";
import bk_img from "../../photo_assets/beautybackground.jpg";

import ProviderSignUpForm from './ProviderSignUpForm'
import ClientSignUpForm from './ClientSignUpForm'
import UserLogInForm from './UserLogInForm'
import '../../Css/NewUser.css'

import ReactDOM from 'react-dom';  // REACT MODAL
import Modal from 'react-modal';    // REACT MODAL

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')


// class App extends React.Component {
export default class NewUser extends Component {
  constructor() {
    super();

    this.state = {
      navBarClicked: false,   // show first Modal

      isLoggedIn: false,
      signUpClicked: false,     // show sign up form
      logInClicked: false,      // show login form
      isProvider: false,
      isClient: false,

      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal() {
    this.setState({
      modalIsOpen: true,
      navBarClicked: true,
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
    this.closeButton.style.width = 'fit-content';
    this.closeButton.style.height = 'fit-content';
    this.closeButton.style.padding = '10px';
    this.closeButton.style.align = 'right';
  }

  closeModal() {
    this.setState ({
      modalIsOpen: false,
      signUpClicked: false,
      // isProvider: false,
      // isClient: false,
      logInClicked: false,
    });
  }



  signUpToggle = () => {
    this.setState ({
      modalIsOpen: true,
      navBarClicked: true,
      signUpClicked: true,
      isProvider: false,
      isClient: false,
      logInClicked: false,
    })
  }

  logInToggle = () => {
    this.setState ({
      modalIsOpen: true,
      navBarClicked: true,
      logInClicked: true,
    })
  }

  ProviderToggle = () => {
    this.setState ({
      modalIsOpen: true,
      navBarClicked: true,
      signUpClicked: true,
      isProvider: true,
      isClient: false,
      logInClicked: false,
    })
  }

  ClientToggle = () => {
    this.setState ({
      modalIsOpen: true,
      navBarClicked: true,
      signUpClicked: true,
      isProvider: false,
      isClient: true,
      logInClicked: false,
    })
  }


  displayFirstModal = () => {
    const { navBarClicked, isLoggedIn, signUpClicked, logInClicked, isProvider, isClient, modalIsOpen} = this.state

    if (navBarClicked && modalIsOpen && !signUpClicked && !logInClicked) {
    return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          >

          {/* // <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2> */}
            <div className='closeXButtonDiv'>
              <button
                ref={closeButton => this.closeButton = closeButton}
                className='closeXButton'
                onClick={this.closeModal} >
                x
              </button>
            </div>

          <div className='formBody'>
            <form>
              <button onClick={this.signUpToggle} >Sign Up</button>
              <button onClick={this.logInToggle}>Login</button>
            </form>
          </div>

        </Modal>
      )
    }
  }


  displayProviderClientOptions = () => {  // click Sign Up
    const { navBarClicked, isLoggedIn, signUpClicked, logInClicked, isProvider, isClient, modalIsOpen} = this.state

    if (navBarClicked && modalIsOpen && signUpClicked && !isProvider && !isClient && !logInClicked) {
    return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          >

          {/* // <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2> */}
            <div className='closeXButtonDiv'>
              <button
                ref={closeButton => this.closeButton = closeButton}
                className='closeXButton'
                onClick={this.closeModal} >
                x
              </button>
            </div>

          <div className='formBody'>
            <form>
              <button onClick={this.ProviderToggle} >I am a Provider</button>
              <button onClick={this.ClientToggle}>I am a Client</button>
            </form>
          </div>

        </Modal>
      )
    }
  }


  displayProviderSignUpForm = () => {
    const { navBarClicked, isLoggedIn, signUpClicked, logInClicked, isProvider, isClient, modalIsOpen} = this.state

    if (signUpClicked && modalIsOpen && isProvider && !logInClicked) {
      return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          >

          {/* // <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2> */}
            <div className='closeXButtonDiv'>
              <button
                ref={closeButton => this.closeButton = closeButton}
                className='closeXButton'
                onClick={this.closeModal} >
                x
              </button>
            </div>

            <div className='formBody'>
              <ProviderSignUpForm />
            </div>

        </Modal>
      )
    }
  }


  displayClientSignUpForm = () => {
    const { navBarClicked, isLoggedIn, signUpClicked, logInClicked, isProvider, isClient, modalIsOpen} = this.state

    if (signUpClicked && modalIsOpen && isClient && !logInClicked) {
      return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          >

          {/* // <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2> */}
            <div className='closeXButtonDiv'>
              <button
                ref={closeButton => this.closeButton = closeButton}
                className='closeXButton'
                onClick={this.closeModal} >
                x
              </button>
            </div>

            <div className='formBody'>
              <ClientSignUpForm />
            </div>

        </Modal>
      )
    }
  }

  displayLoginForm = () => {
    const { navBarClicked, isLoggedIn, signUpClicked, logInClicked, isProvider, isClient, modalIsOpen} = this.state

    if (logInClicked && modalIsOpen && !signUpClicked) {
      return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          >

          {/* // <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2> */}
            <div className='closeXButtonDiv'>
              <button
                ref={closeButton => this.closeButton = closeButton}
                className='closeXButton'
                onClick={this.closeModal} >
                x
              </button>
            </div>

            <div className='formBody'>
              <UserLogInForm />
            </div>

        </Modal>
      )
    }
  }




  render() {
    const { modalIsOpen, navBarClicked, signUpClicked, logInClicked, isProvider, isClient } = this.state;
    return (
      <div>
        {this.state.isLoggedIn ?
          <button className='loginButton' onClick={this.openModal}>Logout</button>
        : <button className='loginButton' onClick={this.openModal}>Login</button>
        }

        { (navBarClicked && modalIsOpen ) ? this.displayFirstModal() : null }
        { (signUpClicked && modalIsOpen && !logInClicked) ? this.displayProviderClientOptions() : null }
        { (signUpClicked && modalIsOpen && isProvider && !logInClicked) ? this.displayProviderSignUpForm() : null }
        { (signUpClicked && modalIsOpen && isClient && !logInClicked) ? this.displayClientSignUpForm() : null }
        { (logInClicked && modalIsOpen && !signUpClicked) ? this.displayLoginForm() : null }



      </div>
    );
  }
}



// import React, { Component } from "react";
// import "../Css/user.css";
// import homeLogo from "../../photo_assets/dashing_logo_invert.png";
// import bk_img from "../../photo_assets/beautybackground.jpg";
//
// export default class NewUser extends Component {
//
// render() {
//     return (
//         <>
//
//         <img src={bk_img} alt="" style={{  maxHeight: '800px'}}/>
//
//         <div className='ctnr_user'>
//
//             <img src={homeLogo} alt='logo' style={{ height: '30px', zIndex: -1}}/>
//             <p>Set Up as </p>
//
//             <h2 className='type_user'> CUSTOMER </h2>
//             <p>Set Up as </p>
//             <h2 className='type_user'> PROVIDER </h2>
//         </div>
//
//       </>
//     );
//   }
// };
