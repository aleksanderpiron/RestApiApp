import React from 'react';
import Cart from './Cart';

const CartSidebar=(props)=>{
    const checkTarget=(e)=>{
        console.log(e.target)
        if(e.target.classList.contains('cart-sidebar-bg')){
            props.toggleState('cartSidebarShowed', false);
        }
    }
    return(
        <div onClick={checkTarget} className='cart-widget-bg'>
            <Cart layout='widget'/>
        </div>
    )
}

export default CartSidebar;