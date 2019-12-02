import React from 'react';
import Cart from '../../components/Cart/Cart';

const CartPage =()=>{
    return(
        <div className='cart-page'>
            <div className="cart-header">
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>
            <Cart />
        </div>
    )
};

export default CartPage;