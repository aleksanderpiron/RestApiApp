import React from 'react';
import './Inputs.css';

const Textarea =(props)=>{
    return(
        <label className="textarea">
            <span>{props.label}</span>
            <textarea onChange={props.change} value={props.inputData.value} name={props.name}/>
            {props.underline && <div className="underline"></div>}
        </label>
    )
}

export default Textarea;