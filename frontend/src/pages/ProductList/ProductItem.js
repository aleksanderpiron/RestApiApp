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
    const userId = localStorage.getItem('userId');
    return(
        <div key={props.id} className={'product-item'}>
            <div className="delete-mask">
                <p>Are you sure you want to delete this item?</p>
                <div className="buttons">
                    <Button click={()=>{props.delete(props.id)}} type='primary' label='Yes'/>
                    <Button click={(e)=>{toggleDeletingMask(e, false)}} type='danger' label='No'/>
                </div>
            </div>
            <div className="top">
                <Link to={`/products/product/${props.id}`}>{props.name}</Link>
                {props.createdBy === userId &&
                    <div className="settings-box">
                        <div className="trigger"><Icon type='gear'/></div>
                        <div className="body">
                            <button onClick={(e)=>{toggleDeletingMask(e, true)}}><Icon type='delete'/></button>
                            <Link to={`/products/edit-product/${props.id}`}><Icon type='edit'/></Link>
                        </div>
                    </div>
                }
            </div>
            <div className={props.imageUrl === null?'img default':'img'}>
                {props.imageUrl === null?<Icon type='picture'/>: <img src={props.imageUrl} alt=''/>}
            </div>
            <div className="desc">
                <p>{props.description.length>130?`${props.description.substring(0, 127)}...`:props.description}</p>
                <p className="price">{props.price} zł</p>
            </div>
            <div className="bottom">
                <Button
                click={()=>{
                    props.addToCart();
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