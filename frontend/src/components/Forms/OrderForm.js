import React, { Component } from 'react';
import Input from '../Inputs/Input';
import Select from '../Inputs/Select';
import Button from '../Button/Button';
import InputValidateHandler from './InputValidateHandler';
import ErrorViewHandler from './ErrorViewHandler';
import './Form.css';

class OrderFrom extends Component{
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
            surname:{
                value:'',
                conditions:{
                    isLength:3,
                },
                correct:false,
                blured:false,
                errMsg:''
            },
            address:{
                value:'',
                conditions:{
                    isLength:3
                },
                correct:false,
                blured:false,
                errMsg:''
            },
            delivery:{
                value:'',
                correct:false,
                conditions:{
                    isNot:'---'
                },
                options:[
                    '---','Inpost','DPD','ABC'
                ],
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
    submitHandler=async(e)=>{
        e.preventDefault();
        this.toggleLoading(true);
        const formData = new FormData();
        const inputs = this.state.inputs;
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('name', inputs.name.value);
        formData.append('surname', inputs.surname.value);
        formData.append('address', inputs.address.value);
        formData.append('delivery', inputs.delivery.value);
        const url = '//localhost:8080/place-order';
        try{
            const res = await fetch(url, {
                body: formData,
                method: 'POST'
            });
            const data = await res.json();
            this.toggleLoading(false);
            if(res.status === 200){
                console.log('order succesfuly placed');
            }
            else if(res.status === 401 || res.status === 422){
                console.log('order failed');
            }
        }catch(err){
            console.log(err)
        }

    }
    render(){
        return(
            <form onSubmit={this.submitHandler} className='form form-box login-form'>
                <h2 className="form-heading">Order</h2>
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
                    inputData={this.state.inputs.surname}
                    underline
                    type="text"
                    name='surname'
                    label='Surname'/>
                <Input
                    blur={this.blurHandler}
                    change={this.textInputHandler}
                    inputData={this.state.inputs.address}
                    underline
                    type="text"
                    name='address'
                    label='Address'/>
                <Select
                    options={this.state.inputs.delivery.options}
                    change={this.textInputHandler}
                    blur={this.blurHandler}
                    name='delivery'
                    label='Delivery'/>
                <Button loading={this.state.loading} disabled={!this.state.allInputsCorrect} submit type="primary" full label='Place order'/>
            </form>
        )
    }
}

export default OrderFrom;