import React from 'react';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';
import {Link} from 'react-router-dom';

const ProductItem =(props)=>{
    const toggleDeletingMask=(e, setTo)=>{
        const target = e.target.closest('.product-item');
        if(setTo){
            target.classList.add('deleting');
        }else{
            target.classList.remove('deleting');
        }
    }
    let loading = false;
    const toggleLoading=()=>{
        loading = !loading;
    }
    const userId = localStorage.getItem('userId'),
    {name, price, _id, imageUrl, description, createdBy} = props.itemData;
    const row = Math.ceil((props.index+1)/4)-1,
    col = Math.ceil(props.index%4),
    posStyles={
        top:(row*360)+'px',
        left:(col*270)+'px',
    }
    return(
        <div key={_id} className={'product-item'} style={posStyles}>
            <div className="delete-mask">
                <p>Are you sure you want to delete this item?</p>
                <div className="buttons">
                    <Button click={()=>{props.delete(_id)}} type='primary' label='Yes'/>
                    <Button click={(e)=>{toggleDeletingMask(e, false)}} type='danger' label='No'/>
                </div>
            </div>
            <div className="top">
                <Link to={`/products/product/${_id}`}>{name}</Link>
                {createdBy === userId &&
                    <div className="settings-box">
                        <div className="trigger"><Icon type='gear'/></div>
                        <div className="body">
                            <button onClick={(e)=>{toggleDeletingMask(e, true)}}><Icon type='delete'/></button>
                            <Link to={`/products/edit-product/${_id}`}><Icon type='edit'/></Link>
                        </div>
                    </div>
                }
            </div>
            <div className={imageUrl === null?'img default':'img'}>
                {imageUrl === null?<Icon type='picture'/>: <img src={'http://localhost:8080'+imageUrl} alt=''/>}
            </div>
            <div className="desc">
                <p>{description.length>130?`${description.substring(0, 127)}...`:description}</p>
                <p className="price">{price} zł</p>
            </div>
            <div className="bottom">
                <Button
                click={()=>{
                    props.addToCart(_id);
                    toggleLoading();
                }}
                loading={loading}
                disabled={userId===null?true:false}
                full
                type="primary"
                label="Add to cart"/>
            </div>
        </div>
    )
}

export default ProductItem;