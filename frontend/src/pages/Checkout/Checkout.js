import React, {Component} from 'react';
import './Checkout.css';
import CartPage from '../../components/Cart/CartPage';
import Spinner from '../../components/Spinner/Spinner';
import OrderForm from '../../components/Forms/OrderForm';
import {getCartData, removeFromCart} from '../../components/Cart/CartFunctions';
import Summary from './Summary';

class Checkout extends Component{
    state={
        step:'cart',
        cart:null,
        loading:true
    }
    setStep=(to)=>{
        this.setState({
            step:to
        })
    }
    showCart=async()=>{
        const cartData = await getCartData();
        this.setState({
            cart:cartData,
            loading:false
        })
    }
    removeFromCartHandler=async(prodId)=>{
        this.setState({
            loading:true
        })
        const removeResult = await removeFromCart(prodId);
        if(removeResult){
            this.showCart();
        }
    }
    UNSAFE_componentWillReceiveProps=()=>{
        this.showCart();
    }
    UNSAFE_componentWillMount=()=>{
        this.showCart();
    }
    render(){
        return(
            <div className='checkout'>
                {this.state.loading?<Spinner/>:
                    <>
                        <div className="steps-box">
                            <CartPage items={this.state.cart.items} remove={this.removeFromCartHandler}/>
                        </div>
                        <div className="summary-box">
                            <Summary items={this.state.cart.items} total={this.state.cart.totalPrice}/>
                        </div>
                    </>
                }
            </div>
        )
    }
};

export default Checkout;