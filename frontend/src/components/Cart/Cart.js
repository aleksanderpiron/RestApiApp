import React, {Component} from 'react';
import CartItem from './CartItem';
import Spinner from '../Spinner/Spinner';
import './Cart.css'

class Cart extends Component{
    state={
        cartItems:[],
        totalPrice:0,
        loading:false
    }
    getCart=async()=>{
        this.setState({
            loading:true
        })
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
            return <CartItem remove={this.removeFromCart} type={this.props.type} product={cartItem.product} id={cartItem._id} qty={cartItem.qty}/>
        })
        this.setState({
            cartItems:cartItems,
            totalPrice:data.cart.totalPrice,
            loading:false
        })
    }
    removeFromCart=async(prodId)=>{
        this.setState({
            loading:true
        })
        const userId = localStorage.getItem('userId');
        const formData = new FormData;
        formData.append('prodId', prodId);
        formData.append('userId', userId);
        const res = await fetch('//localhost:8080/cart', {
            method:'DELETE',
            headers:{
                "Authorization": localStorage.getItem('authToken')
            },
            body:formData
        });
        // const data = await res.json();
        if(res.status === 200){
            this.getCart();
        }
        console.log(res)
    }
    componentWillMount=()=>{
        this.getCart();
    }
    render(){
        return(
            <div className="cart">
                {this.state.loading?<Spinner/>:
                    <>
                        <div className="cart-items">
                            {this.state.cartItems}
                        </div>
                        <div className='total-box'>
                            <p>Total: {this.state.totalPrice} zł</p>
                        </div>
                    </>
                }
            </div>
        )
    }
}

export default Cart;