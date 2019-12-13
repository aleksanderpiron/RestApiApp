import React from 'react';
import Cart from '../../components/Cart/Cart';
import Button from '../../components/Button/Button';

const CartPage =(props)=>{
    return(
        <div className='cart-page'>
            <div className="cart-header">
                <p>Item</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Item total</p>
            </div>
            <Cart />
            <Button type='primary' label='Next step' click={()=>{props.setStep('form')}}/>
        </div>
    )
};

export default CartPage;