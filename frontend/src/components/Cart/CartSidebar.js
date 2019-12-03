import React from 'react';
import Cart from './Cart';

const CartSidebar=()=>{
    return(
        <div className='cart-sidebar-bg'>
            <div className="cart-sidebar-body">
                <h2>Cart</h2>
                <Cart type='sidebar'/>
            </div>
        </div>
    )
}

export default CartSidebar;