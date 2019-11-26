import React, { Component } from 'react';
import Input from '../Inputs/Input';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import InputValidateHandler from './InputValidateHandler';
import ErrorViewHandler from './ErrorViewHandler';
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
        },
        loading:false,
        successPage:false,
        allInputsCorrect:false
    }
    textInputHandler=(e)=>{
        const updatedState = InputValidateHandler(e, this.state);
        this.setState(updatedState);
    }
    toggleLoading=(setTo)=>{
        if(typeof setTo === 'boolean'){
            this.setState({
                loading:setTo
            })
        }
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
    submitHandler=async()=>{
        const formData = new FormData();
        const inputs = this.state.inputs;
        formData.append('name', inputs.name.value);
        formData.append('email', inputs.email.value);
        formData.append('password', inputs.password.value);
        this.toggleLoading(true);
        const url = '//localhost:8080/register';
        const res = await fetch(url, {
            body: formData,
            method: 'POST'
        });
        const data = await res.json();
        await this.toggleLoading(false);
        if(res.status === 201){
            this.setState({
                successPage:true
            })
        }
        else if(res.status === 422){
            const updatedInputs = ErrorViewHandler(data, this.state.inputs)
            this.setState({
                inputs:updatedInputs,
                allInputsCorrect:false
            })
        }
    }
    resetForm=()=>{
        this.props.switchForm();
        this.setState({
            successPage:false,
        })
    }
    render(){
        return(
            <div className='form form-box register-form'>
                {this.state.successPage &&
                    <div className='success-page'>
                        <Icon type='success'/>
                        <p>
                            Your accout has been created!
                        </p>
                        <Button click={this.resetForm} type='primary' label='Login to your new accout'/>
                    </div>
                }
                {this.state.loading && !this.state.successPage &&
                    <Spinner />
                }
                {!this.state.loading && !this.state.successPage &&
                <>
                    <h2 className="form-heading">Register</h2>
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
                    <Button disabled={!this.state.allInputsCorrect} click={this.submitHandler} type="primary" full label='Register'/>
                </>
                }
            </div>
        )
    }
}

export default RegisterForm;