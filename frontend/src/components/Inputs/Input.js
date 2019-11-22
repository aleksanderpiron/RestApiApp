import React from 'react';
import PasswordConditions from '../PasswordConditions/PasswordConditions';
import './Inputs.css';

const Input =(props)=>{
    let labelClass = '';
    if(props.type==='file'){
        labelClass += 'file-input ';
    }
    if(props.inputData.errMsg!=='' && props.inputData.blured){
        labelClass += 'error ';
    }
    return(
        <label className={labelClass}>
            <span>{props.label}</span>
            <input onBlur={props.blur} onChange={props.change} type={props.type} value={props.inputData.value} name={props.name}/>
            {props.type==='file' && <p className={props.loadedFileClasses}>{props.loadedFileText}</p>}
            {props.underline && <div className="underline"></div>}
            {<p className={props.inputData.errMsg!=='' && props.inputData.blured?'visible error-message':'error-message'}>{props.inputData.errMsg}</p> }
            {props.passwordConditionsCorrect && <PasswordConditions correct={props.passwordConditionsCorrect}/>}
        </label>
    )
}

export default Input;