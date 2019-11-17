import React from 'react';
import './Notif.css';

const NotifItem =(props)=>{
    return(
        <div id={props.id} key={props.id} className={"notif "+props.type}>
            <p>{props.text}</p>
            <div onClick={(e)=>{props.close(e.target.parentNode.id)}} className="close"></div>
        </div>
    )
}

export default NotifItem;