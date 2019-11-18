import React from 'react';
import {Link} from 'react-router-dom';

const NavItem =(props)=>{
    return(
        <Link to={props.target} onMouseOver={props.hover} onMouseOut={props.hover} className={props.isActive?'active':''} href={props.link}>{props.label}</Link>
    );
}

export default NavItem;