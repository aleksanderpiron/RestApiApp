import React from 'react';
import Spinner from '../Spinner/Spinner';
import './Button.css';

const Button =(props)=>{
    let classes = 'btn ';
    if(props.full){
        classes += 'full ';
    }
    if(props.center){
        classes += 'center ';
    }
    if(props.round){
        classes += 'round ';
    }
    if(props.disabled){
        classes += 'disabled ';
    }
    if(props.customClass){
        classes += props.customClass+' ';
    }
    if(props.type){
        classes += props.type;
    }
    const onClickPlaceholder=(e)=>{
        e.preventDefault();
        if(typeof props.disabledClick !== 'undefined'){
            props.disabledClick();
        }else{
            return false;
        }
    }
    return(
        <button className={classes} type={props.submit?'submit':'button'} onClick={!props.disabled?props.click:onClickPlaceholder}>
            {props.loading?<Spinner type='dots'/>:props.label}
        </button>
    )
}

export default Button;