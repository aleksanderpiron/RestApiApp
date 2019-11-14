import React from 'react';
import NavItem from './NavItem';
import Dropdown from './Dropdown';
import './Nav.css';

const Nav =(props)=>{
    // let dropdownShown = false;
    // const dropdownHandle = (e)=>{
    //     console.log(e.type);
    //     if(e.type === 'mouseover'){
    //         dropdownShown = true
    //     }
    //     else if(e.type === 'mouseover'){
    //         dropdownShown = false
    //     }
    // }
    return(
        <nav>
        <div className="top">
            <div className="menu left">
                <NavItem isActive={props.currentPage === 'Home'?true:false} link='/' label='Home'/>
                <NavItem isActive={props.currentPage === 'Products'?true:false} link='/posts' label='Products'/>
            </div>
            <div className="right">
                <NavItem  isActive={props.currentPage === 'Account'?true:false} link='/account' label='Account'/>
            </div>
        </div>
        {/* <Dropdown isActive={dropdownShown}/> */}
    </nav>
    );
}

export default Nav;