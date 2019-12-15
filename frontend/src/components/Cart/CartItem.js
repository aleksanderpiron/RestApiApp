import React from 'react';
import QtyInput from '../Inputs/QtyInput';
import Icon from '../Icon/Icon';

const CartItem=(props)=>{
    let cartItemLayout =
    <div className='cart-item'>
        <div className='first'>
            <div className="img">
                <img src={'http://localhost:8080'+props.product.imageUrl} alt=""/>
            </div>
            <a href={'/products/product/'+props.product._id} className="name">{props.product.name}</a>
        </div>
        <p className="price">{props.product.price} zł</p>
           <div className="qty">
                <QtyInput value={props.qty}/>
           </div>
        <p className="total">{(props.product.price*props.qty).toFixed(2)} zł</p>
        <p onClick={()=>{props.remove(props.product._id)}} className="remove"><Icon type='close'/></p>
    </div>;
    if(props.layout === 'widget'){
        cartItemLayout =
        <div className='cart-item'>
            <div className="img">
                <img src={'http://localhost:8080'+props.product.imageUrl} alt=""/>
            </div>
            <div className="text">
                <a href={'/products/product/'+props.product._id} className="name">{props.product.name}</a>
                <p className="price">{props.product.price} zł</p>
                <p className="qty">Qty: {props.qty}</p>
                <p onClick={()=>{props.remove(props.product._id)}} className="remove">Remove</p>
            </div>
        </div>
    }
    return(
        <>
            {cartItemLayout}
        </>
    )
}

export default CartItem;