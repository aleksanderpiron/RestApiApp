import React from 'react';
import './Inputs.css';

const Input =(props)=>{
    return(
        <label className={props.type==='file'?'file-input':''}>
            <span>{props.label}</span>
            <input onChange={props.change} type={props.type} value={props.value} name={props.name}/>
            {props.type==='file' && <p className={props.loadedFileClasses}>{props.loadedFileText}</p>}
            {props.underline && <div className="underline"></div>}
        </label>
    )
}

export default Input;