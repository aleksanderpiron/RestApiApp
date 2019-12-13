import React, {Component} from 'react';
import CartPage from './CartPage';
import OrderForm from '../../components/Forms/OrderForm';

class Checkout extends Component{
    state={
        step:'form',

    }
    setStep=(to)=>{
        this.setState({
            step:to
        })
    }
    render(){
        return(
            <div className='cart-page'>
                {this.state.step === 'cart' &&
                    <CartPage setStep={this.setStep}/>
                }
                {this.state.step === 'form' &&
                    <OrderForm />
                }
            </div>
        )
    }
};

export default Checkout;