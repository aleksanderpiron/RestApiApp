import React from 'react';
import NavItem from './NavItem';
import '../../styles/css/nav.css'

const Nav =()=>{
    return(
        <nav>
            <div className="menu left">
                <NavItem link='/' label='Home'/>
                <NavItem link='/posts' label='Posts'/>
            </div>
            <div className="right">
                <NavItem link='/account' label='Account'/>
            </div>
        </nav>
    );
}

export default Nav;