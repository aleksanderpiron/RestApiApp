import React, {Component} from 'react';
import CartPage from './CartPage';
import {Route, Switch} from 'react-router-dom'

class Checkout extends Component{
    state={
        step:'cart'
    }

    render(){
        return(
            <div className='cart-page'>
                {this.state.step === 'cart' &&
                    <CartPage />
                }
            </div>
        )
    }
};

export default Checkout;