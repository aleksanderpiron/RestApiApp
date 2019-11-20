import React, { Component } from 'react';
import Input from '../Inputs/Input';
import ButtonTriple from '../Button/ButtonTriple';
import PasswordConditions from '../PasswordConditions/PasswordConditions'
import InputValidateHandler from './InputValidateHandler';
import './Form.css';

class AuthForm extends Component{
    state={
        inputs:{
            name:{
                value:'',
                conditions:{
                    isLength:3,
                },
                correct:false,
                errMsg:''
            },
            email:{
                value:'',
                conditions:{
                    isEmail:true,
                },
                correct:false,
                errMsg:''
            },
            password:{
                value:'',
                conditions:{
                    isLength:6,
                    containsNumber:true,
                    containsUppercase:true,
                    containsLowercase:true,
                },
                correct:false,
                errMsg:''
            },
            confirmPassword:{
                value:'',
                conditions:{
                    isSameAs:'password'
                },
                correct:false,
                errMsg:''
            },
        }
    }

    textInputHandler=(e)=>{
        const newInputs = InputValidateHandler(e, this.state.inputs)
        // this.setState({
        //     values: newValues
        // })
    }
    render(){
        return(
            <div className='form form-box'>
                <Input change={this.textInputHandler} underline type="text" name='name' label='Name'/>
                <Input value={this.state.inputs.email.value} change={this.textInputHandler} underline type="email" name='email' label='Email'/>
                <Input value={this.state.inputs.password.value} change={this.textInputHandler} underline type="text" name='password' label='Password'/>
                <PasswordConditions />
                <Input value={this.state.inputs.confirmPassword.value} change={this.textInputHandler} underline type="text" name='confirmPassword' label='Confirm password'/>
                <ButtonTriple label={['Login', 'Register', 'Send reset link']}/>
            </div>
        )
    }
}

export default AuthForm;