import React from 'react';

const NavLink =(props)=>{
    return(
        <button
            className={props.active&&'active'}
            onClick={props.click}
            to={props.link}
            onMouseOver={props.hover}
            onMouseOut={props.hover}
            >
            {props.label}
        </button>
    );
}

export default NavLink;