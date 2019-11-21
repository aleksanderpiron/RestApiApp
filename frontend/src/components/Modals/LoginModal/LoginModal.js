import React, {Component} from 'react';
import RegisterForm from '../../Forms/RegisterForm';
import Modal from '../Modal';
import Particles from 'react-particles-js';
import Icon from '../../Icon/Icon';
import './LoginModal.css';
import '../Modal.css';

class LoginModal extends Component{
    state={

    }
    render(){
        return(
            <Modal modalClass="login-modal">
                <RegisterForm />
                <RegisterForm />
                <div className="curtain">
                    <Particles 
                        height={550}
                        width={500}
                    />
                </div>
            </Modal>
        )
    }
}

export default LoginModal;