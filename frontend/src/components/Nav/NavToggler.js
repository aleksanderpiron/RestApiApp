import React from 'react';
import {Link} from 'react-router-dom';

const NavLink =(props)=>{
    return(
        <a
            onClick={props.click}
            to={props.link}
            onMouseOver={props.hover}
            onMouseOut={props.hover}
            >
            {props.label}
        </a>
    );
}

export default NavLink;