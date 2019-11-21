import React from 'react';
import {Link} from 'react-router-dom';

const NavItem =(props)=>{
    return(
        <Link
            onClick={props.click}
            to={props.link}
            onMouseOver={props.hover}
            onMouseOut={props.hover}
            className={props.link === props.currentPage?'active':''}>
            {props.label}
        </Link>
    );
}

export default NavItem;