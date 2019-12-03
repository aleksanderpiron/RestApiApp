import React, { Component } from 'react';
import NavLink from './NavLink';
import NavToggler from './NavToggler';
import Dropdown from './Dropdown';
import {withRouter} from 'react-router-dom';
import './Nav.css';
import Icon from '../Icon/Icon';

class Nav extends Component{
    state = {
        navShown:true,
        dropdownShown:false,
        currentPage:'/products',
        underlineStyles:{
            left:'0',
            width:'0'
        }
    }
    scrollHandle=(e)=>{
        if(this.prev > window.scrollY && window.scrollY > 40){
            this.setState({navShown:true})
        }
        else if(this.prev < window.scrollY && window.scrollY > 40){
            this.setState({navShown:false})
        }
        this.prev = window.scrollY;
    }
    calculateHandler=()=>{
        const activeNavEl = document.querySelector('nav .top a.active');
        let newUnderlineStyles;
        if(activeNavEl !== null){
            newUnderlineStyles = {
                left: activeNavEl.offsetLeft + 'px',
                width: activeNavEl.offsetWidth + 'px'
            }
        }else{
            newUnderlineStyles = {
                left: '80px',
                width: '0px'
            }
        }
        this.setState({
            underlineStyles: newUnderlineStyles
        })
    }
    componentWillMount(){
        this.setState({
            currentPage:this.props.location.pathname
        })
    }
    componentDidMount(){
        this.prevScroll = window.scrollY;
        window.addEventListener('scroll', (e)=>this.scrollHandle(e))
        this.calculateHandler();
    }
    componentDidUpdate(prevProps, prevState) {
      if (this.props.location !== prevProps.location) {
        this.setState({
            currentPage:this.props.location.pathname
        })
      }
      if(this.state.currentPage !== prevState.currentPage){
        this.calculateHandler();
      }
    }
    render(){
        return(
            <nav className={!this.state.navShown?'hidden':''}>
                <div className='top'>
                    <div className="menu left">
                        <NavLink
                            currentPage={this.state.currentPage}
                            link="/"
                            label='Home'/>
                        <NavLink
                            currentPage={this.state.currentPage}
                            link="/products"
                            label='Products'/>
                    </div>
                    <div className="right">
                        <NavLink
                            link="/products/add-product"
                            label={<Icon type="plus" />}/>

                        {!this.props.isLogged && <NavToggler
                            click={()=>{this.props.toggleLoginModal(true)}}
                            label={<Icon type="user" />}/>}
                        {this.props.isLogged && <NavToggler
                            click={this.props.toggleCartSidebar}
                            label={<Icon type="cart" />}/>}
                        {this.props.isLogged && <Dropdown dropdownLabel={<Icon type='user'/>} dropdownOptions={[
                            {
                                label:'Orders history',
                                type:'link',
                                href:'/orders'
                            },
                            {
                                label:'Account',
                                type:'link',
                                href:'/account'
                            },
                            {
                                label:'Logout',
                                type:'click',
                                click:this.props.logout
                            },
                        ]}/>}
                    </div>
                    <div style={this.state.underlineStyles} id="active-underline"></div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Nav);