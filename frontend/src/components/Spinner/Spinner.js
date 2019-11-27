import React from 'react';
import './Spinner.css';

const Spinner =(props)=>{
    let spinner =
        <div className="loader">Loading...</div>
    if(props.type === 'dots'){
        spinner =
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
    }
    return(
        <div className="loader-box">
            {spinner}
        </div>
    )
}

export default Spinner;