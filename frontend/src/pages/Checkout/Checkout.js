import React, {Component} from 'react';
import './Checkout.css';
import CartPage from '../../components/Cart/CartPage';
import Spinner from '../../components/Spinner/Spinner';
import OrderForm from '../../components/Forms/OrderForm';
import AnimatedIcon from '../../components/Icon/AnimatedIcon'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {getCartData, removeFromCart} from '../../components/Cart/CartFunctions';
import Summary from './Summary';

class Checkout extends Component{
    state={
        step:'cart',
        cart:null,
        orderId:null,
        loading:true
    }
    setStep=(to, orderId)=>{
        this.setState({
            step:to,
            orderId
        })
    }
    showCart=async()=>{
        const cartData = await getCartData();
        if(cartData.items.length === 0){
            this.setState({
                cart:cartData,
                step:'empty',
                loading:false
            })    
        }else{
            this.setState({
                cart:cartData,
                loading:false
            })
        }
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
                        {this.state.step !== 'error' && this.state.step !== 'success' && this.state.step !== 'empty' &&
                            <>
                                <div className="steps-box">
                                    <TransitionGroup className='anim-box'>
                                        <CSSTransition
                                            key={`step_${this.state.step}`}
                                            timeout={300}
                                            classNames={`step-switch`}>
                                            <>
                                                {this.state.step === 'cart' &&
                                                    <CartPage setStep={this.setStep} items={this.state.cart.items} remove={this.removeFromCartHandler}/>
                                                }
                                                {this.state.step === 'userInfo' &&
                                                    <OrderForm setStep={this.setStep}/>
                                                }

                                            </>
                                        </CSSTransition>
                                    </TransitionGroup>
                                </div>
                                <div className="summary-box">
                                    <Summary items={this.state.cart.items} total={this.state.cart.totalPrice}/>
                                </div>
                            </>
                        }
                        {this.state.step === 'success' &&
                            <div className="result-box">
                                <AnimatedIcon type='check'/>
                                <p>Order has been successfuly placed, <br/> thank you!</p>
                                <p>Your order id: {this.state.orderId}<br/> you can see details in your order history</p>
                            </div>
                        }
                        {this.state.step === 'error' &&
                           <div className="result-box">
                               <AnimatedIcon type='cross'/>
                                <p>Something went wrong and your order failed! Please try again later</p>
                           </div>
                        }
                        {this.state.step === 'empty' &&
                            <div className="result-box">
                                <p>Nothing to look for here, your cart is empty.</p>
                                <p>Go for some shopping!</p>
                            </div>
                        }
                    </>
                }
            </div>
        )
    }
};

export default Checkout;