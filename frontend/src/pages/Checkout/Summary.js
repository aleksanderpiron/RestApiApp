import React from 'react';

const Summary=(props)=>{
    let items, delivery, payment;
    delivery = 12.99;
    payment = '---'
    items = props.items.map((item, index)=>{
        return <li key={`item_${index}`}><span>{item.product.name}</span><span>{item.qty>1?` x${item.qty}`:''}</span></li>
    })
    return(
        <div className="summary">
            <h2>Summary</h2>
            <p>Items:</p>
            <ul>
                {items}
            </ul>
            <p>Delivery:</p>
                <ul>
                    {delivery}
                </ul>
            <p>Payment:</p>
                {payment}
            <div className="totals">
                <p>Subtotal: {props.total} zł</p>
                <p>Total: {props.total+delivery} zł</p>
            </div>
        </div>
    )
}

export default Summary;