import React, { Component } from 'react';
import OrderItem from './OrderItem';

class OrdersHistory extends Component{
    state={
        orders:[]
    }
    getOrders=async()=>{
        const formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'))
        const resp = await fetch('//localhost:8080/orders-history',{
            method:'POST',
            body:formData
        });
        const orders = await resp.json();
        this.setState({
            orders
        })
    }
    UNSAFE_componentWillMount=()=>{
        this.getOrders();
    }
    UNSAFE_componentWillReceiveProps=()=>{
        this.getOrders();
    }
    render(){
        const orders = this.state.orders.map(order=>{
            return <OrderItem order={order}/>
        })
        return(
            <div className="history">
                <h2>Your orders history</h2>
                {orders}
            </div>
        )
    }
}

export default OrdersHistory;