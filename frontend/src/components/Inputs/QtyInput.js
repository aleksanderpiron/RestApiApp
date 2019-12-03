import React from 'react';

const QtyInput=(props)=>{
    return(
        <div className="qty-input">
            <input value={props.value} type="number"/>
            <div className="buttons">
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    )
}

export default QtyInput;