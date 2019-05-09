import React, { Component } from "react";
import '../../Css/SignUpLogIn.css'

export default class ClientSignUpForm extends Component {
    constructor() {
      super()
      this.state = {
        isProvider: false,
        isClient: false,
      }
    }

    render(){
        console.log('SIGNUP PROPS',this.props)

        const { handleChange, handleSubmission, email, password, first_name, last_name, phone_number} = this.props

        return (
            <>
                <form className='form_register' onSubmit={handleSubmission} >
                    <input className='signUpInput'
                        name='first_name'
                        placeholder='First Name'
                        type="text"
                        value={first_name}
                        onChange={handleChange}
                    />

                    <input className='signUpInput'
                        name='last_name'
                        placeholder='Last Name'
                        type="text"
                        value={last_name}
                        onChange={handleChange}
                    />

                    <input className='signUpInput'
                        name='email'
                        placeholder='Email'
                        type="text"
                        value={email}
                        onChange={handleChange}
                    />

                    <input className='signUpInput'
                        name='password'
                        placeholder='Password'
                        type="text"
                        value={password}
                        onChange={handleChange}
                    />


                  <button className='signUpBttn'type='submit' onSubmit={handleSubmission} >Sign Up</button>
                </form>
            </>
        )
    }
};
