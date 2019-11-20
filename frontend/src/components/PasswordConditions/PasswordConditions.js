import React from 'react';
import './PasswordConditions.css';

const PasswordConditions=(props)=>{
    return(
        <div className="condition-box">
            <div className={props.correct.length?'condition correct':'condition'}>
                <p className="big">6</p>
                <p>Length</p>
            </div>
            <div className={props.correct.number?'condition correct':'condition'}>
                <p className="big">1</p>
                <p>Number</p>
            </div>
            <div className={props.correct.uppercase?'condition correct':'condition'}>
                <p className="big">1</p>
                <p>Uppercase</p>
            </div>
            <div className={props.correct.lowercase?'condition correct':'condition'}>
                <p className="big">1</p>
                <p>Lowercase</p>
            </div>
        </div>
    )
}

export default PasswordConditions