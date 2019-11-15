import React, {Component} from 'react';
import NavItem from './NavItem';
// import Dropdown from './Dropdown';
import './Nav.css';

class Nav extends Component{
    state = {
        navShown:true,
        dropdownShown:false,
    }
    wheelHandle(e){
        if(this.prev > window.scrollY && window.scrollY > 40){
            this.setState({navShown:true})
        }
        else if(this.prev < window.scrollY && window.scrollY > 40){
            this.setState({navShown:false})
        }
        this.prev = window.scrollY;
    }
    componentDidMount(){
        this.prevScroll = window.scrollY;
        window.addEventListener('scroll', (e)=>this.wheelHandle(e))
    }
    render(){
        return(
            <nav className={!this.state.navShown?'hidden':''}>
                <div className='top'>
                    <div className="menu left">
                        <NavItem isActive={this.props.currentPage === 'Home'?true:false} link='/' label='Home'/>
                        <NavItem isActive={this.props.currentPage === 'Products'?true:false} link='/posts' label='Products'/>
                    </div>
                    <div className="right">
                        <NavItem  isActive={this.props.currentPage === 'Account'?true:false} link='/account' label='Account'/>
                    </div>
                </div>
                {/* <Dropdown isActive={dropdownShown}/> */}
            </nav>
        );
    }
}

export default Nav;