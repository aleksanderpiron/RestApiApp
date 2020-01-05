import React, { Component } from 'react';
import Input from '../Inputs/Input';
import IconRadio from '../Inputs/IconRadio';
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
            street:{
                value:'',
                conditions:{
                    isLength:3
                },
                correct:false,
                blured:false,
                errMsg:''
            },
            email:{
                value:'',
                conditions:{
                    isEmail:true,
                    isLength:3
                },
                correct:false,
                blured:false,
                errMsg:''
            },
            city:{
                value:'',
                conditions:{
                    isLength:3
                },
                correct:false,
                blured:false,
                errMsg:''
            },
            phone:{
                value:'',
                conditions:{
                    isLength:3,
                    isPhoneNumber:true,
                },
                correct:false,
                blured:false,
                errMsg:''
            },
            country:{
                value:'',
                correct:false,
                conditions:{
                    isNot:'---'
                },
                options:[
                    '---','Poland','Germany','Czech'
                ],
            },
            payment:{
                value:'',
                correct:false,
                conditions:{
                    isNot:''
                },
                options:[
                    {
                        icon:'card',
                        label:'Credit card'
                    },
                    {
                        icon:'money',
                        label:'Cash'
                    },
                    {
                        icon:'present',
                        label:'Gift card'
                    },
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
        formData.append('street', inputs.street.value);
        formData.append('city', inputs.city.value);
        formData.append('country', inputs.country.value);
        formData.append('phone', inputs.phone.value);
        formData.append('email', inputs.email.value);
        formData.append('payment', inputs.payment.value);
        const url = '//localhost:8080/place-order';
        try{
            const res = await fetch(url, {
                body: formData,
                method: 'POST'
            });
            const data = await res.json();
            this.toggleLoading(false);
            if(res.status === 200){
                this.props.setStep('success', data.orderId);
            }
            else if(res.status === 401 || res.status === 403){

            }
            else if(res.status === 500){
                this.props.setStep('error');
            }
        }catch(err){
            console.log(err)
        }

    }
    render(){
        return(
            <form onSubmit={this.submitHandler} className='form form-box order-form'>
                <div className="input-row">
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
                </div>
                <Input
                    blur={this.blurHandler}
                    change={this.textInputHandler}
                    inputData={this.state.inputs.street}
                    underline
                    type="text"
                    name='street'
                    label='Street & house number'/>
                <Input
                    blur={this.blurHandler}
                    change={this.textInputHandler}
                    inputData={this.state.inputs.city}
                    underline
                    type="text"
                    name='city'
                    label='City'/>
                <Select
                    options={this.state.inputs.country.options}
                    change={this.textInputHandler}
                    blur={this.blurHandler}
                    name='country'
                    label='Country'/>
                <Input
                    blur={this.blurHandler}
                    change={this.textInputHandler}
                    inputData={this.state.inputs.phone}
                    underline
                    type="text"
                    name='phone'
                    label='Phone number (without space & only polish)'/>
                <Input
                    blur={this.blurHandler}
                    change={this.textInputHandler}
                    inputData={this.state.inputs.email}
                    underline
                    type="text"
                    name='email'
                    label='Email address'/>
                <IconRadio
                    inputData={this.state.inputs.payment}
                    change={this.textInputHandler}
                    blur={this.blurHandler}
                    name='payment'
                    label='Choose payment method'/>
                    <div className="buttons">
                        <Button click={()=>{this.props.setStep('cart')}} type="secondary" label='Return to cart'/>
                        <Button loading={this.state.loading} disabled={!this.state.allInputsCorrect} submit  type="primary" label='Place order'/>
                    </div>
            </form>
        )
    }
}

export default OrderFrom;