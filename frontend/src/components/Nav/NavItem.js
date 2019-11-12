import React from 'react';

const NavItem =(props)=>{
    return(
        <a className="nav-item" href={props.link}>{props.label}</a>
    );
}

export default NavItem;