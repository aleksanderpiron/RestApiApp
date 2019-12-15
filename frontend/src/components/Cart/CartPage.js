import React from 'react';
import CartItem from './CartItem';

const CartPage =(props)=>{
    let cartItems;
    if(props.items.length > 0){
        cartItems = props.items.map((item, index)=>{
            return <CartItem
            key={`CartItem_${index}`}
            remove={props.remove}
            product={item.product}
            qty={item.qty}/>
        });
    }
    return(
        <div className='cart-page'>
            <div className="cart-header">
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Item total</p>
            </div>
            <div className="cart-body">
                {cartItems}
            </div>
        </div>
    )
};

export default CartPage;