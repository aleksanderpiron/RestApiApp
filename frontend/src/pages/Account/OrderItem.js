import React from 'react';
import Icon from '../../components/Icon/Icon';

const OrderItem=({order})=>{
    const {_id, orderDate, cart, orderData} = order,
    userInfo = Object.entries(orderData).map(val=>{
        return <li><span>{val[0]}:</span> <span>{val[1]}</span></li>
    }),
    cartInfo = cart.items.map(item=>{
        return <li><span>{item.product.name}</span><span> x{item.qty}</span></li>
    });
    const collapseHandler=(e)=>{
        const target = e.target.closest('.history-item');
        if(target.classList.contains('active')){
            e.target.closest('.history-item').classList.remove('active');
        }else{
            e.target.closest('.history-item').classList.add('active');
        }
    }
    return(
        <div className="history-item">
            <div className="head" onClick={collapseHandler}>
                <p>Order id: {_id}</p>
                <p>Ordered in: {orderDate}</p>
                <p>Price: {cart.totalPrice} zł</p>
                <Icon type='angle'/>
            </div>
            <div className="body">
                <ul className='user-info'>
                    <p>Customer details</p>
                    {userInfo}
                </ul>
                <ul className='cart-info'>
                    <p>Products</p>
                    {cartInfo}
                </ul>
                <ul className='cart-info'>
                    <p>Payment</p>
                    <li>Method: {Object.values(orderData)[Object.values(orderData).length - 1]}</li>
                    <li>Delivery cost: 12.99 zł</li>
                    <li>Total price: {(parseFloat(cart.totalPrice) - 12.99).toFixed(2)} zł</li>
                </ul>
            </div>
        </div>
    )
}

export default OrderItem;