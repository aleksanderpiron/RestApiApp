import React, {Component} from 'react';
import Input from '../Inputs/Input';
import Textarea from '../Inputs/Textarea';
import Button from '../Button/Button';
import Spinner from '../Spinner/Spinner';
import Notif from '../Notification/Notif';
import './Form.css';

class AddProductForm extends Component{
    state={
        loading:false,
        thanks:false,
        values:{
            name:'',
            price: '',
            image: '',
            description:''
        },
        loadedFileText:"Choose product image",
        loadedFileClasses:"loaded-file"
    }

    inputHandle=(e)=>{
        const {value, name} = e.target;
        const newValues = this.state.values; 
        newValues[name] = value;
        this.setState({
            values: newValues
        })
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
        const newValues = this.state.values; 
        newValues['image'] = file;
        console.log(file);
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
        formData.append('name', this.state.values.name);
        formData.append('price', this.state.values.price);
        formData.append('description', this.state.values.description);
        formData.append('image', this.state.values.image);
        // {
        //     name:this.state.values.name,
        //     price: this.state.values.price,
        //     description: this.state.values.description,
        //     image:this.state.values.image
        // };
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
                        <Input value={this.state.values.name} change={this.inputHandle} underline label='Name' type='text' name='name'/>
                        <Input value={this.state.values.price} change={this.inputHandle} underline label='Price' type='number' step='0.1' name='price'/>
                        <Input change={this.fileInputHandle} label='Image/Images' type='file' name='image' loadedFileClasses={this.state.loadedFileClasses} loadedFileText={this.state.loadedFileText}/>
                        <Textarea value={this.state.values.description} change={this.inputHandle} underline label='Description' name='description' />
                        <Button click={this.submitHandler} full type='primary' label='Add product'/>
                        <Notif ref='notif'/>
                    </>
                }
            </div>
        )
    }
}

export default AddProductForm;