import React from 'react';
import Cart from './Cart';

const CartSidebar=(props)=>{
    return(
        <div className='cart-widget-bg'>
            <Cart refresh={props.refresh} layout='widget'/>
        </div>
    )
}

export default CartSidebar;