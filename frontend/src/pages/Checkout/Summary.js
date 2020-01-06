import React from 'react';

const Summary=(props)=>{
    let items, delivery;
    delivery = 12.99;
    items = props.items.map((item, index)=>{
        return <li key={`item_${index}`}><span>{item.product.name}</span><span>{` x${item.qty}`}</span></li>
    })
    return(
        <div className="summary">
            <h2>Summary</h2>
            <p>Items:</p>
            <ul>
                {items}
            </ul>
            <div className="totals">
                <p>Subtotal: {props.total} zł</p>
                <p>Delivery costs: {delivery} zł</p>
                <p>Total: {(props.total+delivery).toFixed(2)} zł</p>
            </div>
        </div>
    )
}

export default Summary;