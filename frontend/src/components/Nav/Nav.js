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
        currentPage:'',
        underlineStyles:{
            left:'0',
            width:'0'
        }
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
    UNSAFE_componentWillMount(){
        this.props.setCurrentPage(this.props.location.pathname);
        this.setState({
            currentPage:this.props.location.pathname
        })
    }
    componentDidMount(){
        // this.prevScroll = window.scrollY;
        // window.addEventListener('scroll', (e)=>this.scrollHandle(e))
        this.calculateHandler();
    }
    componentDidUpdate(prevProps, prevState) {
      if (this.props.location !== prevProps.location) {
        this.props.setCurrentPage(this.props.location.pathname);
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
                            isActive={this.state.currentPage==='/'?true:false}
                            link="/"
                            label='Home'/>
                        <NavLink
                            isActive={this.state.currentPage.includes('/products')?true:false}
                            link="/products"
                            label='Products'/>
                    </div>
                    <div className="right">
                        <NavLink
                            link="/products/add-product"
                            label={<Icon type="plus" />}/>
                        {!this.props.isLogged && <NavToggler
                            click={()=>{this.props.toggleState('loginModalShowed', true)}}
                            label={<Icon type="user" />}/>}
                        {this.props.isLogged && <NavToggler
                            click={()=>{this.props.toggleState('cartWidgetShowed', true)}}
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