import React from 'react';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';

const ProductItem =(props)=>{
    const toggleDeletingMask=(e, setTo)=>{
        const target = e.target.closest('.product-item');
        if(setTo){
            target.classList.add('deleting')
        }else{
            target.classList.remove('deleting')
        }
    }
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
                <p onClick={(e)=>{props.getSingleProduct(props.id)}}>{props.name}</p>
                <div className="settings-box">
                    <div className="trigger"><Icon type='gear'/></div>
                    <div className="body">
                        <a onClick={(e)=>{toggleDeletingMask(e, true)}}><Icon type='delete'/></a>
                        <a href="#"><Icon type='edit'/></a>
                    </div>
                </div>
            </div>
            <div className={props.imageUrl === null?'img default':'img'}>
                {props.imageUrl === null?<Icon type='picture'/>: <img src={props.imageUrl} />}
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