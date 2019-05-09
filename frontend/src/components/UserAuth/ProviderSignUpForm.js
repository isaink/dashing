import React, { Component } from "react";
import '../../Css/SignUpLogIn.css'

export default class ProviderSignUpForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',

        formSubmitted: false,
      }
    }

    handleChange = (e) => {
      this.setState ({
        [e.target.name]: e.target.value,
      })
    }

    handleSubmit = (e) => {
      e.preventDefault()

      const {first_name, last_name, email, password, phone_number} = this.state

      if (first_name && last_name && email && password) {
        this.setState ({
          formSubmitted: true
        })
      }
    }

    render(){
        console.log('SIGNUP STATE',this.state)

        const { handleChange, handleSubmit, email, password, first_name, last_name, phone_number, formSubmitted } = this.state

        return (
            <>
                <form className='form_register' onSubmit={handleSubmit} >
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

                    <input className='signUpInput'
                        name='phone_number'
                        placeholder='Phone Number'
                        type="text"
                        value={phone_number}
                        onChange={handleChange}
                    />

                  { formSubmitted ?
                    <button className='signUpBttn' type='submit' >Sign Up</button>
                  : <button className='signUpBttnDisabled' type='submit' disabled >Sign Up</button>
                  }

                </form>
            </>
        )
    }
};
