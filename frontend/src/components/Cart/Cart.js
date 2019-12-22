import React, {Component} from 'react';
import CartItem from './CartItem';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import {Redirect} from 'react-router-dom';
import {getCartData, removeFromCart} from './CartFunctions';
import './Cart.css';

class Cart extends Component{
    state={
        cartItems:[],
        totalPrice:0,
        loading:true,
        redirect:false,
    }
    showCart=async()=>{
        this.setState({
            loading:true
        })
        const cartData = await getCartData();
        if(typeof cartData === 'undefined'){
            return this.setState({
                totalPrice:0,
                cartItems:<div className='empty-cart'><p>Something went wrong with connection to server! Please try later</p></div>,
                loading:false
            })
        }
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
        }else{
            cartItems = <div className='empty-cart'><p>Your cart is empty!</p></div>
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
    redirectHandler=()=>{
        this.setState({
            redirect:true
        })
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
                <h2>Cart</h2>
                <div className="cart-items">
                        {this.state.loading?<Spinner/>:
                            <>
                                {this.state.cartItems}
                            </>
                        }
                </div>
                <Button click={this.redirectHandler} disabled={this.state.loading || this.state.totalPrice===0} type='secondary' full label='Proceed to checkout'/>
                {this.state.redirect && <Redirect to='/checkout'/>}
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