import React, { Component } from "react";

export default class LogInForm extends Component {

    render(){
        const {handleLogginUser, email, password, handleChange  } = this.props;

        return (
            <>
                <form onSubmit={handleLogginUser}> 

                    <div>
                        <input className='LogInform' name='email' value={email} placeholder='Email' onChange={handleChange} />
                    </div>
                    
                    <div>
                        <input className='LogInform' name='password' value={password} placeholder='Password' onChange={handleChange} />
                    </div>

                    <div>   
                        <button className='log_inBlue' type='submit'>LOG IN</button>
                    </div>
                    
                </form>

            </>
        )
    }
};

