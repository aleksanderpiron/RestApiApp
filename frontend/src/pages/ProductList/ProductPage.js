import React from 'react';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';

const ProductPage =(props)=>{
    console.log(props.product)
    return(
        <div className="product-page">
            <div className="img"><img src={'http://localhost:8080'+props.product.imageUrl} alt=""/></div>
            <div className="text">
                <p className="return" onClick={props.return}><Icon type='arrow'/> <span>Return</span></p>
                <p className="name">{props.product.name}</p>
                <p className="desc">{props.product.description}</p>
                <p className="price">{props.product.price} $</p>
                <Button type="primary" label='Add to cart'/>
            </div>
        </div>
    )
}

export default ProductPage;