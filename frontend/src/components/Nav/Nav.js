import React, { Component } from 'react';
import NavLink from './NavLink';
import NavToggler from './NavToggler';
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
                            click={this.switchPage}
                            currentPage={this.state.currentPage}
                            link="/"
                            label='Home'/>
                        <NavLink
                            click={this.switchPage}
                            currentPage={this.state.currentPage}
                            link="/products"
                            label='Products'/>
                    </div>
                    <div className="right">
                        <NavToggler
                            click={()=>{this.props.toggleLoginModal(true)}}
                            label={<Icon type="user" />}/>
                        <NavLink
                            click={this.switchPage}
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