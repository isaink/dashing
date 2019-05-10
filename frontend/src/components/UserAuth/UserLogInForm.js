import React, { Component } from "react";

export default class UserLogInForm extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',

      formCompleted: false,
      formSubmitted: false,
    }
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
    const {email, password } = this.state
    if (email && password) {
      this.setState ({
        formCompleted: true
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {formCompleted} = this.state
    if (formCompleted) {
      this.setState ({
        formSubmitted: true,
      })
    }
  }


  render(){
    console.log('SIGNUP PROPS',this.state)

    const { email, password, formCompleted, formSubmitted } = this.state

    return (
      <>
        <form className='form_register' onSubmit={this.handleSubmit} >

          <input className='signUpInput'
              name='email'
              placeholder='Email'
              type="text"
              value={email}
              onChange={this.handleChange}
          />

          <input className='signUpInput'
              name='password'
              placeholder='Password'
              type="text"
              value={password}
              onChange={this.handleChange}
          />

          { formCompleted ?
            <div className='signUpBttnDiv'><button className='signUpBttn' type='submit' >Sign Up</button></div>
          : <div className='signUpBttnDisabledDiv'><button className='signUpBttnDisabled' type='submit' disabled >Sign Up</button></div>
          }

        </form>
      </>
    )
  }
};








// <button className='signUpBttn' type='submit' >Log In</button>
