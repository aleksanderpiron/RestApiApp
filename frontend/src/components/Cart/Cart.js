import React, {Component} from 'react';
import CartItem from './CartItem';
import './Cart.css'

class Cart extends Component{
    state={
        cartItems:[],
        totalPrice:0
    }
    getCart=async()=>{
        const userId = localStorage.getItem('userId');
        const formData = new FormData;
        formData.append('userId', userId);
        const res = await fetch('//localhost:8080/cart', {
            method:'POST',
            headers:{
                "Authorization": localStorage.getItem('authToken')
            },
            body:formData
        });
        const data = await res.json();
        const cartItems = data.cart.items.map(cartItem=>{
            return <CartItem product={cartItem.product} id={cartItem._id} qty={cartItem.qty}/>
        })
        this.setState({
            cartItems:cartItems,
            totalPrice:data.cart.totalPrice
        })
    }
    componentWillMount=()=>{
        this.getCart();
    }
    render(){
        return(
            <div className="cart">
                <div className="cart-items">
                    {this.state.cartItems}
                </div>
                <div className='total-box'>
                    <p>Total: {this.state.totalPrice} zł</p>
                    {/* <p>Delivery: 12 zł</p> */}
                    {/* <p>Total: {this.state.totalPrice + 12} zł</p> */}
                </div>
            </div>
        )
    }
}

export default Cart;