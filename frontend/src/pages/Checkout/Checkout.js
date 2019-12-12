import React, {Component} from 'react';
import CartPage from './CartPage';

class Checkout extends Component{
    state={
        step:'cart',
        
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