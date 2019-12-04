import React, {Component} from 'react';
import Input from '../Inputs/Input';
import Textarea from '../Inputs/Textarea';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import InputValidateHandler from './InputValidateHandler';
import { Redirect } from 'react-router-dom'
import './Form.css';

class ProductForm extends Component{
    state={
        loading:false,
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
            price:{
                value:'',
                conditions:{
                    isNumeric:true,
                },
                correct:false,
                blured:false,
                errMsg:''
            },
            image:{
                value:'',
                correct:false,
                blured:false,
                errMsg:'',
                loadedFileText:"Choose product image",
                loadedFileClasses:"loaded-file"
            },
            description:{
                value:'',
                conditions:{
                    isLength:3,
                },
                correct:false,
                blured:false,
                errMsg:''
            },
        },
    }

    textInputHandler=(e)=>{
        const updatedState = InputValidateHandler(e, this.state);
        this.setState({
            inputs:updatedState.inputs
        });
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
    getProductData=async()=>{
        const resp = await fetch(`//localhost:8080/products/${this.props.productId}`);
        const data = await resp.json();
        const {name, price, description, imageUrl} = data;
        const updatedInputs = this.state.inputs;
        updatedInputs.name.value = name;
        updatedInputs.price.value = price;
        if(imageUrl !== null){
            updatedInputs.image.loadedFileText = `Choosen ${imageUrl.substring(imageUrl.indexOf('_')+1, imageUrl.length)}`;
        }
        updatedInputs.description.value = description;
        this.setState({
            inputs:updatedInputs
        })
    }
    fileInputHandle=(e)=>{
        const newValues = this.state.inputs.image;
        const file = e.target.files[0];
        if(file.type !== "image/jpeg" && file.type !== "image/jpg" && file.type !== "image/png"){
            newValues.loadedFileText = 'Invaild file type! Please choose png|jpeg|jpg file';
            newValues.loadedFileClasses = ('loaded-file invalid-file');
        }else{
            let fileName = file.name;
            newValues.loadedFileClasses = ('loaded-file');
            if(fileName.length > 25){
                fileName = fileName.substring(0, 14)+'...'+fileName.substring(fileName.length - 8);
            }
            newValues.loadedFileText = 'Choosen '+fileName;
        }
        newValues.value = file;
        this.setState({
            values: newValues
        })
    }
    toggleLoading=(goal)=>{
        if(typeof goal === 'boolean'){
            this.setState({
                loading:goal
            })
        }
    }
    submitAddHandler=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        const inputs = this.state.inputs;
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('name', inputs.name.value);
        formData.append('price', inputs.price.value);
        formData.append('description', inputs.description.value);
        formData.append('image', inputs.image.value);
        this.toggleLoading(true);
        const url = '//localhost:8080/add-product';
        const res = await fetch(url, {
            body: formData,
            method: 'POST'
        });
        await this.toggleLoading(false);
        if(res.status === 201){
            this.props.pushNotif('success','Your product has been added successfuly!', 5000);
            this.setState({
                redirect:true
            });
        }
        else if(res.status === 400){
            this.props.pushNotif('error','Invaid provided data and product creating failed! Please try again with correct data', 5000);
        }
    }
    submitEditHandler=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        const inputs = this.state.inputs;
        formData.append('id', this.props.productId);
        formData.append('name', inputs.name.value);
        formData.append('price', inputs.price.value);
        formData.append('description', inputs.description.value);
        formData.append('image', inputs.image.value);
        this.toggleLoading(true);
        const url = '//localhost:8080/edit-product';
        const res = await fetch(url, {
            body: formData,
            method: 'POST'
        });
        await this.toggleLoading(false);
        if(res.status === 204){
            this.props.pushNotif('success','Your product has been edited successfuly!', 5000);
            this.setState({
                redirect:true
            });
        }
        else if(res.status === 400){
            this.props.pushNotif('error','Invaid provided data and product editing failed! Please try again with correct data', 5000);
        }
    }
    UNSAFE_componentWillMount=()=>{
        if(this.props.edit){
            this.getProductData();
        }
    }
    render(){
        return(
            <form onSubmit={this.props.edit?this.submitEditHandler:this.submitAddHandler} className='form form-box'>
                {this.state.loading &&
                    <Spinner />
                }
                {!this.state.loading && !this.state.thanks &&
                    <>
                        <Input blur={this.blurHandler} inputData={this.state.inputs.name} change={this.textInputHandler} underline label='Name' type='text' name='name'/>
                        <Input blur={this.blurHandler} inputData={this.state.inputs.price} change={this.textInputHandler} underline label='Price' type='number' step='0.1' name='price'/>
                        <Input inputData={this.state.inputs.image} change={this.fileInputHandle} label='Image/Images' type='file' name='image' loadedFileClasses={this.state.loadedFileClasses} loadedFileText={this.state.loadedFileText}/>
                        <Textarea blur={this.blurHandler} inputData={this.state.inputs.description} change={this.textInputHandler} underline label='Description' name='description'/>
                        <Button submit full type='primary' label={this.props.edit?'Edit product':'Add product'}/>
                    </>
                }
                {this.state.redirect && <Redirect to='/products'/>}
            </form>
        )
    }
}

export default ProductForm;