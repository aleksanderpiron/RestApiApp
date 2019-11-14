import React from 'react';

const NavItem =(props)=>{
    return(
        <a onMouseOver={props.hover} onMouseOut={props.hover} className={props.isActive?'active':''} href={props.link}>{props.label}</a>
    );
}

export default NavItem;