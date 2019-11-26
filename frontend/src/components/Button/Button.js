import React from 'react';
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
    if(props.type){
        classes += props.type;
    }
    return(
        <button className={classes} onClick={!props.disabled && props.click}>
            {props.label}
        </button>
    )
}

export default Button;