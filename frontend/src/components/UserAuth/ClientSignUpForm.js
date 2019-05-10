import React, { Component } from "react";
import '../../Css/SignUpLogIn.css'

export default class ClientSignUpForm extends Component {
    constructor() {
      super()
      this.state = {
        first_name: '',
        last_name: '',
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
      const {first_name, last_name, email, password } = this.state
      if (first_name && last_name && email && password) {
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
        console.log('SIGNUP STATE',this.state)

        const { email, password, first_name, last_name, phone_number, formCompleted, formSubmitted} = this.state

        return (
            <>
                <form className='form_register' onSubmit={this.handleSubmit} >

                    <input className='signUpInput'
                        name='first_name'
                        placeholder='First Name'
                        type="text"
                        value={first_name}
                        onChange={this.handleChange}
                    />

                    <input className='signUpInput'
                        name='last_name'
                        placeholder='Last Name'
                        type="text"
                        value={last_name}
                        onChange={this.handleChange}
                    />

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
