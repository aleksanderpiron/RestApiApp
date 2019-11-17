import React, {Component} from 'react';
import NavItem from './NavItem';
// import Dropdown from './Dropdown';
import './Nav.css';
import Icon from '../Icon/Icon';

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
                        <NavItem click={this.props.switchPageTo} isActive={this.props.currentPage === 'Home'?true:false} label='Home'/>
                        <NavItem click={this.props.switchPageTo} isActive={this.props.currentPage === 'Products'?true:false} label='Products'/>
                    </div>
                    <div className="right">
                        <NavItem click={this.props.switchPageTo} isActive={this.props.currentPage === 'Account'?true:false} label={<Icon type="plus" />}/>
                    </div>
                </div>
                {/* <Dropdown isActive={dropdownShown}/> */}
            </nav>
        );
    }
}

export default Nav;