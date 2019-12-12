import React, {Component} from 'react';
import CartItem from './CartItem';
import Icon from '../Icon/Icon';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import {getCartData, removeFromCart} from './CartFunctions';
import './Cart.css';

class Cart extends Component{
    state={
        cartItems:[],
        totalPrice:0,
        loading:true
    }
    showCart=async()=>{
        this.setState({
            loading:true
        })
        const cartData = await getCartData();
        let cartItems;
        if(cartData.items.length>0){
            cartItems = await cartData.items.map((cartItem, index)=>{
                return <CartItem
                key={`CartItem_${index}`}
                remove={this.removeFromCartHandler}
                layout={this.props.layout}
                product={cartItem.product}
                id={cartItem._id}
                qty={cartItem.qty}/>
            })
        }
        this.setState({
            totalPrice:cartData.totalPrice,
            cartItems:cartItems,
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
        let cartBody =
        <>
            {this.state.loading?<Spinner/>:
            <>
                <div className="cart-items">
                    {this.state.cartItems}
                </div>
                <div className='total-box'>
                    <p>Total: {this.state.totalPrice} zł</p>
                </div>
            </>}
        </>;
        if(this.props.layout==='widget'){
            cartBody=
            <div className="cart-widget-body">
                <div className="top">
                    <span>
                        <Icon type='cart'/>
                        <p>Cart</p>
                    </span>
                    <p>{this.state.loading?'---':this.state.totalPrice>0?`${this.state.totalPrice} zł`:'Empty'}</p>
                </div>
                <div className="bottom">
                    <Button disabled={this.state.loading || this.state.totalPrice===0} type='secondary' full label='Proceed to checkout'/>
                    <div className="cart-items">
                            {this.state.loading?<Spinner/>:
                                this.state.cartItems.length>0?
                                <>
                                    {this.state.cartItems}
                                </>:
                                <p>YOur cart is empty</p>
                            }
                    </div>
                </div>
            </div>
        }
        return(
            <div className="cart">
                <>
                    {cartBody}
                </>
            </div>
        )
    }
}

export default Cart;