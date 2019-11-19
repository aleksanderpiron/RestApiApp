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
    scrollHandle(e){
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
        window.addEventListener('scroll', (e)=>this.scrollHandle(e))
    }
    render(){
        return(
            <nav className={!this.state.navShown?'hidden':''}>
                <div className='top'>
                    <div className="menu left">
                        <NavItem target="/" click={()=>{this.props.switchPageTo('Home')}} isActive={this.props.currentPage === 'Home'?true:false} label='Home'/>
                        <NavItem target="/products" click={()=>{this.props.switchPageTo('ProductList')}} isActive={this.props.currentPage === 'ProductList'?true:false} label='Products'/>
                        <NavItem target="/login" click={()=>{this.props.switchPageTo('AuthForm')}} isActive={this.props.currentPage === 'AuthForm'?true:false} label='Login/Register'/>
                    </div>
                    <div className="right">
                        <NavItem target="/add-product" click={()=>{this.props.switchPageTo('AddProduct')}} isActive={this.props.currentPage === 'AddProduct'?true:false} label={<Icon type="plus" />}/>
                    </div>
                </div>
                {/* <Dropdown isActive={dropdownShown}/> */}
            </nav>
        );
    }
}

export default Nav;