import React, { Component } from "react";
import "../Css/user.css";
import homeLogo from "../../photo_assets/dashing_logo_invert.png";
import bk_img from "../../photo_assets/beautybackground.jpg";

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
}



// ReactDOM.render(<NewUser/>, newUser);



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
//             <h2 className='type_user'> CUSTOMER </h2>
//             <p>Set Up as </p>
//             <h2 className='type_user'> PROVIDER </h2>
//         </div>
//
//       </>
//     );
//   }
// };
