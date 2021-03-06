import React from 'react';
import PasswordConditions from '../PasswordConditions/PasswordConditions';
import Icon from '../Icon/Icon';
import './Inputs.css';

const Input =(props)=>{
    let labelClass = '';
    if(props.type==='file'){
        labelClass += 'file-input ';
    }
    if(props.inputData.errMsg!=='' && props.inputData.blured){
        labelClass += 'error ';
    }
    // if(props.inputData.correct){
    //     labelClass += 'success ';
    // }
    const showPassword=(e)=>{
        const label = e.target.parentNode.closest('label');
        const target = label.querySelector('input');
        if(target.type === 'password'){
            label.classList.add('password-showed');
            target.type = 'text';
        }else{
            label.classList.remove('password-showed');
            target.type = 'password';
        }
    }
    const blurTargetCheck=(e)=>{
        if(e.relatedTarget !== null && e.relatedTarget.classList.contains('icon')){
            e.preventDefault();
        }
    }
    let fileText;
    if(props.inputData.loadedFileText){
        fileText = props.inputData.loadedFileText;
        if(props.inputData.loadedFileText.length>30){
            fileText = `${fileText.substring(0, 25)}...${fileText.substring(fileText.length - 10, fileText.length)}`;
        }
    }
    return(
        <label className={labelClass}>
            <span>{props.label}</span>
            <input onBlur={props.blur?(e)=>{props.blur(e); blurTargetCheck(e);}:null} onChange={props.change} type={props.type} value={props.type !=='file'?props.inputData.value:''} name={props.name}/>
            {props.type === 'password' && <Icon tabIndex='0' iconClass='password-show' type='eye' click={showPassword}/>}
            {props.type==='file' && <p className={props.inputData.loadedFileClasses}>{fileText}</p>}
            {props.underline && <div className="underline"></div>}
            {<p className={props.inputData.errMsg!=='' && props.inputData.blured?'visible error-message':'error-message'}>{props.inputData.errMsg}</p> }
            {props.passwordConditionsCorrect && <PasswordConditions correct={props.passwordConditionsCorrect}/>}
        </label>
    )
}

export default Input;