import React from 'react';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';

const ProductItem =(props)=>{
    return(
        <div key={props.id} className="product-item">
            <div className="top">
                <p onClick={()=>{props.getSingleProduct(props.id)}}>{props.name}</p>
                <div className="settings-box">
                    <div className="trigger"><Icon type='gear'/></div>
                    <div className="body">
                        <a href="#"><Icon type='delete'/></a>
                        <a href="#"><Icon type='edit'/></a>
                    </div>
                </div>
            </div>
            <div className={typeof props.imageUrl === 'undefined'?'img default':'img'}>
                {typeof props.imageUrl === 'undefined'?<Icon type='picture'/>: <img src={props.imageUrl} />}
            </div>
            <div className="desc">
                <p>{props.description}</p>
                <p className="price">{props.price} $</p>
            </div>
            <div className="bottom">
                <Button full type="primary" label="Add to cart"/>
            </div>
        </div>
    )
}

export default ProductItem;