import React, { Component } from "react";

export default class ProviderSignUpForm extends Component {

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

                    <input className='signUpInput'
                        name='phone_number' 
                        placeholder='Phone Number' 
                        type="text" 
                        value={phone_number} 
                        onChange={handleChange}
                    />
                    
                    <button className='signUpBttn'type='submit' onSubmit={handleSubmission} >SIGN UP</button>
                </form>
            </>
        )
    }
};