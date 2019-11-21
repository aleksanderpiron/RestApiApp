import React from 'react';
import Icon from '../Icon/Icon';

const Modal=(props)=>{
    return(
        <div className={"modal-bg "+props.modalClass}>
            <div className="login-modal modal">
                <Icon type="close" class="close"/>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;