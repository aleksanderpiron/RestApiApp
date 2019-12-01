import React, {Component} from 'react';

class Cart extends Component{
    state={
        cartItems:[]
    }
    getCart=()=>{
        
    }
    render(){
        return(
            <div className="cart">
                {this.state.cartItems}
            </div>
        )
    }
}

export default Cart;