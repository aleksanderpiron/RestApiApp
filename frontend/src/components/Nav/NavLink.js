import React from 'react';
import {Link} from 'react-router-dom';

const NavLink =(props)=>{
    return(
        <Link
            onClick={props.click}
            to={props.link}
            onMouseOver={props.hover}
            onMouseOut={props.hover}
            className={props.isActive?'active':''}>
            {props.label}
        </Link>
    );
}

export default NavLink;