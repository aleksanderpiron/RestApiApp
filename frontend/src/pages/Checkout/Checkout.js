import React, {Component} from 'react';
import './Checkout.css';
import CartPage from '../../components/Cart/CartPage';
import Spinner from '../../components/Spinner/Spinner';
import OrderForm from '../../components/Forms/OrderForm';
import Button from '../../components/Button/Button';
import Steps from './Steps';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {getCartData, removeFromCart} from '../../components/Cart/CartFunctions';
import Summary from './Summary';

class Checkout extends Component{
    state={
        step:1,
        cart:null,
        slideDirection:'left',
        loading:true
    }
    setStep=(direction)=>{
        let newStep,
        slideDirection;
        if(direction === 'next'){
            slideDirection = 'left';
            newStep = this.state.step+1;
        }
        if(direction === 'prev'){
            slideDirection = 'right';
            newStep = this.state.step-1;
        }
        this.setState({
            slideDirection,
            step:newStep
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
                            <Steps currentStep={this.state.step}/>
                            <TransitionGroup className='anim-box'>
                                <CSSTransition
                                    key={`step_${this.state.step}`}
                                    timeout={300}
                                    classNames={`step-switch-${this.state.slideDirection}`}>
                                    <>
                                        {this.state.step === 0 &&
                                        <CartPage items={this.state.cart.items} remove={this.removeFromCartHandler}/>
                                        }
                                        {this.state.step === 1 &&
                                            <OrderForm/>
                                        }
                                        {this.state.step === 2 &&
                                            <OrderForm/>
                                        }
                                    </>
                                </CSSTransition>
                            </TransitionGroup>
                            <div className="buttons">
                                {this.state.step !== 0 &&
                                    <Button click={()=>{this.setStep('prev')}} customClass='prev' type='primary' label='Previous step'/>
                                }
                                {this.state.step !== 3 &&
                                    <Button click={()=>{this.setStep('next')}} customClass='next' type='primary' label='Next step'/>
                                }
                            </div>
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