import React, { Component } from 'react';
import NavItem from './NavItem';
// import Dropdown from './Dropdown';
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
        const newUnderlineStyles = {
            left: activeNavEl.offsetLeft + 'px',
            width: activeNavEl.offsetWidth + 'px'
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
                        <NavItem
                            click={this.switchPage}
                            currentPage={this.state.currentPage}
                            link="/"
                            label='Home'/>
                        <NavItem
                            click={this.switchPage}
                            currentPage={this.state.currentPage}
                            link="/products"
                            label='Products'/>
                        <NavItem
                            click={this.switchPage}
                            currentPage={this.state.currentPage}
                            link="/login"
                            label='Login/Register'/>
                    </div>
                    <div className="right">
                        <NavItem
                            click={this.switchPage}
                            currentPage={this.state.currentPage}
                            link="/add-product"
                            label={<Icon type="plus" />}/>
                    </div>
                    <div style={this.state.underlineStyles} id="active-underline"></div>
                </div>
                {/* <Dropdown isActive={dropdownShown}/> */}
            </nav>
        );
    }
}

export default withRouter(Nav);