import React from 'react';
import './Button.css';

const ButtonTriple =(props)=>{
    return(
        <button className='btn primary triple full' onClick={props.click}>
            {props.label.map(label=>{
                return <span>{label}</span>
            })}
        </button>
    )
}

export default ButtonTriple;