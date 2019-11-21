import React, { Component } from 'react';
import Input from '../Inputs/Input';
import ButtonTriple from '../Button/ButtonTriple';
import InputValidateHandler from './InputValidateHandler';
import './Form.css';

class RegisterForm extends Component{
    state={
        inputs:{
            name:{
                value:'',
                conditions:{
                    isLength:3,
                },
                correct:false,
                blured:false,
                errMsg:''
            },
            email:{
                value:'',
                conditions:{
                    isEmail:true,
                },
                correct:false,
                blured:false,
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
                blured:false,
                errMsg:''
            },
            confirmPassword:{
                value:'',
                conditions:{
                    isSameAs:'password'
                },
                correct:false,
                blured:false,
                errMsg:''
            },
        },
        passwordConditionBox:{
            length:false,
            number:false,
            uppercase:false,
            lowercase:false
        }
    }
    textInputHandler=(e)=>{
        const updatedState = InputValidateHandler(e, this.state);
        this.setState(updatedState);
    }
    blurHandler=(e)=>{  
        const updatedInputs = this.state.inputs;
        if(!updatedInputs[e.target.name].blured){
            updatedInputs[e.target.name].blured = true;
            this.setState({
                inputs: updatedInputs
            })
        }
    }
    render(){
        return(
            <div className='form form-box'>
                <Input 
                    blur={this.blurHandler}
                    change={this.textInputHandler} 
                    inputData={this.state.inputs.name}
                    underline 
                    type="text" 
                    name='name' 
                    label='Name'/>
                <Input
                    blur={this.blurHandler}
                    change={this.textInputHandler} 
                    inputData={this.state.inputs.email}
                    underline 
                    type="email" 
                    name='email' 
                    label='Email'/>
                <Input
                    blur={this.blurHandler}
                    change={this.textInputHandler} 
                    inputData={this.state.inputs.password}
                    passwordConditionsCorrect={this.state.passwordConditionBox}
                    underline
                    type="password" 
                    name='password' 
                    label='Password'/>
                <Input
                    blur={this.blurHandler}
                    change={this.textInputHandler} 
                    inputData={this.state.inputs.confirmPassword}
                    underline 
                    type="password" 
                    name='confirmPassword' 
                    label='Confirm password'/>
                <ButtonTriple label={['Login', 'Register', 'Send reset link']}/>
            </div>
        )
    }
}

export default RegisterForm;