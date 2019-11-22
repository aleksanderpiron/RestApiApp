import React from 'react';
import {Link} from 'react-router-dom';

const NavLink =(props)=>{
    return(
        <a
            onClick={props.click}
            to={props.link}
            onMouseOver={props.hover}
            onMouseOut={props.hover}
            className={props.link === props.currentPage?'active':''}>
            {props.label}
        </a>
    );
}

export default NavLink;