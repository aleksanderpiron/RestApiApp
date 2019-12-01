import React from 'react';
import './Nav.css';

const Dropdown =(props)=>{
    const dropdownOptions = props.dropdownOptions.map(option=>{
        if(option.type === 'link'){
            return <a href={option.href}>{option.label}</a>
        }
        if(option.type === 'click'){
            return <a onClick={option.click}>{option.label}</a>
        }
    });
    return(
        <div className='dropdown'>
            <div className="dropdown-label">{props.dropdownLabel}</div>
            <div className="dropdown-body">
                {dropdownOptions}
            </div>
        </div>
    );
}

export default Dropdown;