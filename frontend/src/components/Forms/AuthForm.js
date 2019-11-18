import React, { Component } from 'react';
import Input from '../Inputs/Input';
import ButtonTriple from '../Button/ButtonTriple';
import PasswordConditions from '../PasswordConditions/PasswordConditions'
import './Form.css';

class AuthForm extends Component{
    state={

    }

    render(){
        return(
            <div className='form form-box'>
                <Input underline type="text" name='name' label='Name'/>
                <Input underline type="email" name='email' label='Email'/>
                <Input underline type="text" name='password' label='Password'/>
                <PasswordConditions />
                <Input underline type="text" name='confirmPassword' label='Confirm password'/>
                <ButtonTriple label={['Login', 'Register', 'Send reset link']}/>
            </div>
        )
    }
}

export default AuthForm;