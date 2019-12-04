import React from 'react';
import './Nav.css';

const Dropdown =(props)=>{
    const dropdownOptions = props.dropdownOptions.map((option, index)=>{
        if(option.type === 'link'){
            return <button key={`dropdownItem_${index}`} href={option.href}>{option.label}</button>
        }
        else if(option.type === 'click'){
            return <button key={`dropdownItem_${index}`} onClick={option.click}>{option.label}</button>
        }
        else{
            return false
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