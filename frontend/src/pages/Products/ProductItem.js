import React from 'react';

const ProductItem =(props)=>{
    return(
        <div className="product-item" key={props.id}>
            <p>{props.name}</p>
            <p>{props.id}</p>
        </div>
    )
}

export default ProductItem;