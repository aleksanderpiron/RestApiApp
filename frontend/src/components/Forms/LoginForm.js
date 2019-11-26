import React, { Component } from 'react';
import Input from '../Inputs/Input';
import Button from '../Button/Button';
import InputValidateHandler from './InputValidateHandler';
import Spinner from '../Spinner/Spinner';
import ErrorViewHandler from './ErrorViewHandler';
import './Form.css';

class LoginForm extends Component{
    state={
        inputs:{
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
                    isLength:1
                },
                correct:false,
                blured:false,
                errMsg:''
            }
        },
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
        this.toggleLoading(true);
        const formData = new FormData();
        const inputs = this.state.inputs;
        formData.append('email', inputs.email.value);
        formData.append('password', inputs.password.value);
        const url = '//localhost:8080/login';
        try{
            const res = await fetch(url, {
                body: formData,
                method: 'POST'
            });
            const data = await res.json();
            this.toggleLoading(false);
            if(res.status === 200){
                localStorage.setItem('authToken', data.token);
                const remainingMilliseconds = 60 * 60 * 1000;
                const expiryDate = new Date(
                  new Date().getTime() + remainingMilliseconds
                );
                localStorage.setItem('tokenExpiryDate', expiryDate.toISOString());
                localStorage.setItem('userId', data.userId);
            }
            else if(res.status === 404 || res.status === 422){
                const updatedInputs = ErrorViewHandler(data, this.state.inputs)
                this.setState({
                    inputs:updatedInputs,
                    allInputsCorrect:false
                })
            }
        }catch(err){
            alert(err)
        }

    }
    render(){
        return(
            <div className='form form-box login-form'>
                <h2 className="form-heading">Login</h2>
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
                    underline
                    type="password"
                    name='password'
                    label='Password'/>
                <Button disabled={!this.state.allInputsCorrect} click={this.submitHandler} type="primary" full label='Login'/>
            </div>
        )
    }
}

export default LoginForm;