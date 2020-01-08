import React from 'react';

const QtyInput=({value})=>{
    return(
        <div className="qty-input">
            <span>{value}</span>
            <div className="buttons">
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    )
}

export default QtyInput;