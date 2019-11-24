import React, {Component} from 'react';
import Input from '../Inputs/Input';
import Textarea from '../Inputs/Textarea';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import Notif from '../Notification/Notif';
import InputValidateHandler from './InputValidateHandler';
import './Form.css';

class AddProductForm extends Component{
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
                errMsg:''
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
        loadedFileText:"Choose product image",
        loadedFileClasses:"loaded-file"
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
    fileInputHandle=(e)=>{
        let loadedFileText;
        let loadedFileClasses;
        const file = e.target.files[0];
        if(file.type !== "image/jpeg" && file.type !== "image/jpg" && file.type !== "image/png"){
            loadedFileText = 'Invaild file type! Please choose png|jpeg|jpg file';
            loadedFileClasses = ('loaded-file invalid-file');
        }else{
            let fileName = file.name;
            loadedFileClasses = ('loaded-file');

            if(fileName.length > 25){
                fileName = fileName.substring(0, 14)+'...'+fileName.substring(fileName.length - 8);
            }
            loadedFileText = 'Choosen '+fileName;
        }
        const newValues = this.state.inputs.image;
        newValues.value = file;
        this.setState({
            loadedFileClasses,
            loadedFileText,
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
    submitHandler= async ()=>{
        const formData = new FormData();
        const inputs = this.state.inputs;
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
        const data = await res.json();
        await this.toggleLoading(false);
        if(res.status === 201){
            this.refs.notif.create('success','Your product has been added successfuly!', 10000)
        }
        else if(res.status === 400){
            this.refs.notif.create('error','Invaid provided data and product creating failed! Please try again with correct data', 10000)
        }
    }
    render(){
        return(
            <div className='form form-box'>
                {this.state.loading &&
                    <Spinner />
                }
                {!this.state.loading && !this.state.thanks &&
                    <>
                        <Input blur={this.blurHandler} inputData={this.state.inputs.name} change={this.textInputHandler} underline label='Name' type='text' name='name'/>
                        <Input blur={this.blurHandler} inputData={this.state.inputs.price} change={this.textInputHandler} underline label='Price' type='number' step='0.1' name='price'/>
                        <Input inputData={this.state.inputs.image} change={this.fileInputHandle} label='Image/Images' type='file' name='image' loadedFileClasses={this.state.loadedFileClasses} loadedFileText={this.state.loadedFileText}/>
                        <Textarea blur={this.blurHandler} inputData={this.state.inputs.description} change={this.textInputHandler} underline label='Description' name='description' />
                        <Button click={this.submitHandler} full type='primary' label='Add product'/>
                        <Notif ref='notif'/>
                    </>
                }
            </div>
        )
    }
}

export default AddProductForm;