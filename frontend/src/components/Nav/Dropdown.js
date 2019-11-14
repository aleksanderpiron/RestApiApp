import React from 'react';
import './Nav.css';

const Dropdown =(props)=>{
    return(
        <div className={props.isActive?'dropdown active':'dropdown'}>
            <a href="#" className="dropdown-item">Option 1</a>
            <a href="#" className="dropdown-item">Option 2</a>
            <a href="#" className="dropdown-item">Option 3</a>
        </div>
    );
}

export default Dropdown;