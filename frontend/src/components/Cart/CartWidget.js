import React from 'react';
import Cart from './Cart';

const CartSidebar=(props)=>{
    const close=(e)=>{
        if(e.target.classList.contains('cart-widget-bg')){
            props.toggleState('cartWidgetShowed', false);
        }

    }
    return(
        <div className='cart-widget-bg' onClick={close}>
            <Cart refresh={props.refresh} layout='widget'/>
        </div>
    )
}

export default CartSidebar;