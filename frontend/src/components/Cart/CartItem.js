import React from 'react';

const CartItem=(props)=>{
    return(
        <div className='cart-item'>
            <div>
                <div className="img">
                    <img src={'http://localhost:8080'+props.product.imageUrl} alt=""/>
                </div>
                <a href={'/products/product/'+props.product._id} className="name">{props.product.name}</a>
            </div>
            <p className="price">{props.product.price} zł</p>
            <p className="qty">{props.qty}</p>
            <p className="total">{props.product.price*props.qty} zł</p>
        </div>
    )
}

export default CartItem;