import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    render() {
        const { username, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form'>
                    <FormInput type = 'text' name='username' value={username} label='Hash Name' required></FormInput>
                    <FormInput type = 'email' name='email' value={email} label='Email' required></FormInput>
                    <FormInput type = 'password' name='password' value={password} label='Password' required></FormInput>
                    <FormInput type = 'password' name='confirmPassword' value={confirmPassword} label='Confirm Password' required></FormInput>
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;