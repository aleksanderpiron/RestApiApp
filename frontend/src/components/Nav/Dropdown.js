import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Dropdown =(props)=>{
    const dropdownOptions = props.dropdownOptions.map((option, index)=>{
        if(option.type === 'link'){
            return <Link key={`dropdownItem_${index}`} to={option.href}>{option.label}</Link>
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