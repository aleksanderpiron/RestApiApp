import React from 'react';
import QtyInput from '../Inputs/QtyInput';
import {Link} from 'react-router-dom';

const CartItem=(props)=>{
    let cartItemLayout =
    <div className='cart-item'>
        <div className='first'>
            <div className="img">
                <img src={'http://localhost:8080'+props.product.imageUrl} alt=""/>
            </div>
            <Link to={'/products/product/'+props.product._id} className="name">{props.product.name}</Link>
        </div>
        <p className="price">{props.product.price} zł</p>
           <p className="qty">
                {/* <QtyInput value={props.qty}/> */}
                {props.qty}
           </p>
        <p className="total">{(props.product.price*props.qty).toFixed(2)} zł</p>
        <p onClick={()=>{props.remove(props.product._id)}} className="remove"></p>
    </div>;
    if(props.layout === 'widget'){
        cartItemLayout =
        <div className='cart-item'>
            <div className="img">
                <img src={'http://localhost:8080'+props.product.imageUrl} alt=""/>
            </div>
            <div className="text">
                <Link to={'/products/product/'+props.product._id} className="name">{props.product.name}</Link>
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