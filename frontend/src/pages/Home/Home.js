import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import {CSSTransition} from 'react-transition-group';

const Home =()=>{
    return(
        <div className="page home">
            <CSSTransition
            key='welcome'
            in={true}
            timeout={300}
            classNames='slide-up'>
                <div className="welcome">
                    <img src={logo} alt=""/>
                    <h1><span>Welcome to</span> Fruit Shop!</h1>
                    <h2>Fresh & juicy fruits from around the world</h2>
                    <p>This is my Node.js/React practice, so please don't be cruel because it isn't perfect but works :)</p>
                    <p>Take care,<br/>Aleksander Piron</p>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Home;