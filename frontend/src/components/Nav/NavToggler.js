import React from 'react';

const NavLink =(props)=>{
    return(
        <a
            className={props.active&&'active'}
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