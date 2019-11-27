import React, {Component} from 'react';
import RegisterForm from '../../Forms/RegisterForm';
import LoginForm from '../../Forms/LoginForm';
import Modal from '../Modal';
import Particles from 'react-particles-js';
import Button from '../../Button/Button';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import './LoginModal.css';
import '../Modal.css';

class LoginModal extends Component{
    state={
        currentForm:'login'
    }
    switchForm=()=>{
        if(this.state.currentForm === 'login'){
            this.setState({
                currentForm:'register'
            })
        }
        if(this.state.currentForm === 'register'){
            this.setState({
                currentForm:'login'
            })
        }
    }
    render(){
        return(
            <Modal crossClass={this.state.currentForm==='login'?'white':''} close={()=>{this.props.toggleLoginModal(false)}} modalClass="login-modal">
                <ReactCSSTransitionGroup component="div" className="anim-box" transitionEnterTimeout={400} transitionLeaveTimeout={400} transitionName="form-switch">
                    {this.state.currentForm === 'login' && <LoginForm pushNotif={this.props.pushNotif} login={this.props.login} close={()=>{this.props.toggleLoginModal(false)}}/>}
                    {this.state.currentForm === 'register' && <RegisterForm switchForm={this.switchForm}/>}
                    <div className={"curtain "+this.state.currentForm}>
                        <div className="curtain-text">
                            <div>
                                <p>Hello, register!</p>
                                <Button click={this.switchForm} type='outline-white' round label='Login'/>
                            </div>
                            <div>
                                <p>Hello, login!</p>
                                <Button click={this.switchForm} type='outline-white' round label='Create account'/>
                            </div>
                        </div>
                        <Particles
                            height={550}
                            width={900}
                            params={{
                                "particles":{
                                    "number":{
                                        "value":50,
                                    },
                                    "line_linked": {
                                      "distance": 150,
                                    },
                                    "size": {
                                        "value": 2,
                                    },
                                    "move": {
                                        "speed": 1,
                                    },
                                    "opacity": {
                                        "value": 1,
                                    }
                                }
                            }}
                        />
                    </div>
                </ReactCSSTransitionGroup>
            </Modal>
        )
    }
}

export default LoginModal;