import React from 'react';
import './PasswordConditions.css';

const PasswordConditions=()=>{
    return(
        <div className="condition-box">
            <div className="condition">
                <p className="big">6</p>
                <p>Minimal length</p>
            </div>
            <div className="condition">
                <p className="big">1</p>
                <p>Number</p>
            </div>
            <div className="condition">
                <p className="big">1</p>
                <p>Uppercase character</p>
            </div>
            <div className="condition">
                <p className="big">1</p>
                <p>Lowercase character</p>
            </div>
        </div>
    )
}

export default PasswordConditions