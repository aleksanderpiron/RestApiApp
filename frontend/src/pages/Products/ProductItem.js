import React from 'react';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';

const ProductItem =(props)=>{
    console.log(props.img);
    return(
        <div key={props.id} className="product-item" key={props.id}>
            <div className="top">
                <p>{props.name}</p>
            </div>
            <div className={typeof props.imageUrl === 'undefined'?'img default':'img'}>
                {typeof props.imageUrl === 'undefined'?<Icon type='picture'/>: <img src={props.imageUrl} />}
            </div>
            <div className="desc">
                <p>{props.description}</p>
            </div>
            <div className="bottom">
                <Button full type="primary" label="Add to cart"/>
            </div>
        </div>
    )
}

export default ProductItem;