import React, {Component} from 'react';
import CartItem from './CartItem';
import Icon from '../Icon/Icon';
import Spinner from '../Spinner/Spinner';
import Button from '../Button/Button';
import './Cart.css';

class Cart extends Component{
    state={
        cartItems:[],
        totalPrice:0,
        loading:true
    }
    getCart=async()=>{
        this.setState({
            loading:true
        })
        const userId = localStorage.getItem('userId');
        if(userId !== null){
            try{
                const formData = new FormData();
                formData.append('userId', userId);
                const res = await fetch('//localhost:8080/cart', {
                    method:'POST',
                    headers:{
                        "Authorization": localStorage.getItem('authToken')
                    },
                    body:formData
                });
                const data = await res.json();
                const cartItems = data.cart.items.map((cartItem, index)=>{
                    return <CartItem
                    key={`CartItem_${index}`}
                    remove={this.removeFromCart}
                    layout={this.props.layout}
                    product={cartItem.product}
                    id={cartItem._id}
                    qty={cartItem.qty}/>
                })
                this.setState({
                    cartItems:cartItems,
                    totalPrice:data.cart.totalPrice,
                    loading:false
                })
            }
            catch(err){
                console.log(err);
            }
        }
    }
    removeFromCart=async(prodId)=>{
        this.setState({
            loading:true
        })
        const userId = localStorage.getItem('userId');
        const formData = new FormData();
        formData.append('prodId', prodId);
        formData.append('userId', userId);
        const res = await fetch('//localhost:8080/cart', {
            method:'DELETE',
            headers:{
                "Authorization": localStorage.getItem('authToken')
            },
            body:formData
        });
        if(res.status === 200){
            this.getCart();
        }
    }
    UNSAFE_componentWillReceiveProps=()=>{
        this.getCart();
    }
    UNSAFE_componentWillMount=()=>{
        this.getCart();
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
                                <>
                                    {this.state.cartItems}
                                </>
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