import React from 'react';

const Summary=(props)=>{
    let items, delivery, payment, total;
    delivery = 12.99;
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
            {/* <p>Delivery to:</p>
                {delivery}
            <p>Payment:</p>
                {payment} */}
            <div className="totals">
                <p>Subtotal: {props.total}</p>
                <p>Total: {props.total+delivery}</p>
                {props.total}
            </div>
        </div>
    )
}

export default Summary;