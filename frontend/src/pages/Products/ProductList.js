import React from 'react';
import ProductItem from './ProductItem';
import IconRadio from '../../components/Inputs/IconRadio';
import Pagination from '../../components/Pagination/Pagination';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProductList=(props)=>{
    let rederedItems,
    pagiLength = Math.ceil(props.allItemsCount/12);
    if(props.products !== null && props.products.length>0){
        rederedItems = props.products.map((prod, index)=>{
            const key = `ProductItemTransition_${Math.round(Math.random()*1000)*Math.round(Math.random()*1000)}`
            return <CSSTransition
            key={key}
            classNames='fade'
            timeout={4000}
            unmountOnExit
            >
                <ProductItem
                key={`ProductItem_${index}`}
                addToCart={props.addToCartHandler}
                itemData={prod}
                delete={props.deleteProduct}/>
            </CSSTransition>
        });
    }else{
        rederedItems = <p>No products found</p>
    }
    return(
        <>
            <div className="product-header">
                <div className="search">
                    <input type="text" name='filter' className='search-input' onChange={props.filterByName}/>
                    <p className='results'>Found {props.allItemsCount} products</p>
                </div>
                <div className="sort">
                    <IconRadio inputData={props.sort} change={props.sortHandler}/>
                </div>
            </div>
            <TransitionGroup className='product-list'>
                {rederedItems}
            </TransitionGroup>
            <div className="product-footer">
                <Pagination click={props.setPagiCurrent} length={pagiLength} current={props.pagiCurrent}/>
            </div>
        </>
    )
};

export default ProductList;