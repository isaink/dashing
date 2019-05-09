import React, { Component } from "react";

export default class UserLogInForm extends Component {

    render(){
        console.log('SIGNUP PROPS',this.props)

        const { handleChange, handleSubmission, email, password, first_name, last_name, phone_number} = this.props

        return (
            <>
                <form className='form_register' onSubmit={handleSubmission} >

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


                  <button className='signUpBttn'type='submit' onSubmit={handleSubmission} >Log In</button>
                </form>
            </>
        )
    }
};
