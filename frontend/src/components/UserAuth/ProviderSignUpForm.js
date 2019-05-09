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

        checkbox_service: {
          hair: false,
          nails: false,
          barber: false,
          makeup: false,
        },

        formCompleted: false,
        formSubmitted: false,
      }
    }

    handleChange = (e) => {
      this.setState ({
        [e.target.name]: e.target.value
      })

      const {first_name, last_name, email, password, phone_number} = this.state

      if (first_name && last_name && email && password) {
        this.setState ({
          formCompleted: true
        })
      }
    }

    handleCheckboxChange = (event) => {
    event.stopPropagation()
    let checkedItems = this.state[event.target.name]
    checkedItems[event.target.id] = event.target.checked
    // console.log(event)
    // debugger
    // console.log('=>', event.target.name , '-->' ,checkedItems)
    this.setState({
      [event.target.name]: checkedItems
    })
  }


    handleSubmit = (e) => {
      e.preventDefault()

      const {first_name, last_name, email, password, phone_number, formCompleted} = this.state
      if (formCompleted) {
        this.setState ({
          formSubmitted: true,
        })
      }
    }

    render(){
        console.log('SIGNUP STATE',this.state)

        const { handleChange, handleSubmit, email, password, first_name, last_name, phone_number, formCompleted, formSubmitted } = this.state

        return (
            <div className='form_register_Div'>
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

                    <div className='checkboxDiv'>
                      <div className='checkboxLabel'>
                        <label htmlFor='checkbox'>My services:</label>
                      </div>

                      <div className='checkboxOptions'>
                        <div className='checkboxAndLabelEach'>
                          <input
                            type='checkbox'
                            name='checkbox_service'
                            checked={this.state.checkbox_service.hair}
                            onChange={this.handleCheckboxChange}
                            id='hair'
                            className='checkboxBox'>
                          </input>
                          <label htmlFor='checkbox'> Hair </label>
                        </div>

                        <div className='checkboxAndLabelEach'>
                          <input
                            type='checkbox'
                            name='checkbox_service'
                            checked={this.state.checkbox_service.nails}
                            onChange={this.handleCheckboxChange}
                            id='nails'
                            className='checkboxBox'>
                          </input>
                          <label htmlFor='checkbox'> Nails </label>
                        </div>

                        <div className='checkboxAndLabelEach'>
                          <input
                            type='checkbox'
                            name='checkbox_service'
                            checked={this.state.checkbox_service.barber}
                            onChange={this.handleCheckboxChange}
                            id='barber'
                            className='checkboxBox'>
                          </input>
                          <label htmlFor='checkbox'> Barber </label>
                        </div>

                        <div className='checkboxAndLabelEach'>
                          <input
                            type='checkbox'
                            name='checkbox_service'
                            checked={this.state.checkbox_service.makeup}
                            onChange={this.handleCheckboxChange}
                            id='makeup'
                            className='checkboxBox'>
                          </input>
                          <label htmlFor='checkbox'> Makeup </label>
                        </div>

                      </div>
                    </div>

                  { formCompleted ?
                    <div className='signUpBttnDiv'><button className='signUpBttn' type='submit' >Sign Up</button></div>
                  : <div className='signUpBttnDisabledDiv'><button className='signUpBttnDisabled' type='submit' disabled >Sign Up</button></div>
                  }

                </form>
            </div>
        )
    }
};
