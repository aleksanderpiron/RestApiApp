import React from 'react';
import Icon from '../Icon/Icon';

const Modal=(props)=>{
    const backgroundCloseModal =(e)=>{
        if(e.target.classList.contains('modal-bg')){
            props.close();
        }
    }
    return(
        <div onClick={backgroundCloseModal} className={"modal-bg "+props.modalClass}>
            <div className="login-modal modal">
                <Icon click={props.close} type="close" iconClass={"close "+props.crossClass} />
                {props.children}
            </div>
        </div>
    )
}

export default Modal;