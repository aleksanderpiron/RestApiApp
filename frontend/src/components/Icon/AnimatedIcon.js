import React from 'react';
import './Icon.css';

const AnimatedIcon =(props)=>{
    let icon;
    switch(props.type){
        case 'check':
            icon = <svg version="1.1" viewBox="0 0 130.2 130.2"><circle class="path circle" fill="none" stroke="#3ce2b7" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/><polyline class="path check" fill="none" stroke="#3ce2b7" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/></svg>
        break;
        case 'cross':
            icon = <svg version="1.1" viewBox="0 0 130.2 130.2"><circle class="path circle" fill="none" stroke="#ce0101" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/><line class="path line" fill="none" stroke="#ce0101" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/><line class="path line" fill="none" stroke="#ce0101" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/></svg>
        break;
        default:
            icon = <p>Choose type of icon</p>
        break;
    }
        return(
            <span onMouseDown={props.mouseDown} onClick={props.click} className={props.iconClass?'anim-icon '+props.iconClass:'anim-icon'}>
                {icon}
            </span>
        )
}

export default AnimatedIcon;