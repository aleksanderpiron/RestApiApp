import React from 'react';
import QtyInput from '../Inputs/QtyInput';
import Icon from '../Icon/Icon';

const CartItem=(props)=>{
    return(
        <div className='cart-item'>
            <div className='first'>
                <div className="img">
                    <img src={'http://localhost:8080'+props.product.imageUrl} alt=""/>
                </div>
                <a href={'/products/product/'+props.product._id} className="name">{props.product.name}</a>
            </div>
            <p className="price">{props.product.price} zł</p>
            {/* <p className="qty">{props.qty}</p> */}
            <div className="qty">
                <QtyInput value={props.qty}/>
            </div>
            <p className="total">{props.product.price*props.qty} zł</p>
            <p className="remove"><Icon type='close'/></p>
        </div>
    )
}

export default CartItem;