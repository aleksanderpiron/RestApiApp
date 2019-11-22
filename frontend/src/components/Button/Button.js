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
    if(props.type){
        classes += props.type;
    }
    return(
        <button className={classes} onClick={props.click}>
            {props.label}
        </button>
    )
}

export default Button;