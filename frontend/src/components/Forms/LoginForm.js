import React, { Component } from 'react';
import Input from '../Inputs/Input';
import Button from '../Button/Button';
import InputValidateHandler from './InputValidateHandler';
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
                    isLength:6,
                },
                correct:false,
                blured:false,
                errMsg:''
            }
        },
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
                <Button type="primary" full label='Login'/>
            </div>
        )
    }
}

export default LoginForm;