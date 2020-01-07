import React from 'react';
import ProductItem from './ProductItem';
import Spinner from '../../components/Spinner/Spinner';
import IconRadio from '../../components/Inputs/IconRadio';
import Pagination from '../../components/Pagination/Pagination';

const ProductList=(props)=>{
    let rederedItems,
    pagiLength = Math.ceil(props.allItemsCount/12);
    console.log(pagiLength);
    if(props.products !== null && props.products.length>0){
        rederedItems = props.products.map((prod, index)=>{
            return <ProductItem
            key={`ProductItem_${index}`}
            addToCart={props.addToCartHandler}
            itemData={prod}
            delete={props.deleteProduct}/>
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
            <div className='product-list'>
                {/* {loading?<Spinner/>:rederedItems} */}
                {rederedItems}
            </div>
            <div className="product-footer">
                <Pagination click={props.setPagiCurrent} length={pagiLength} current={props.pagiCurrent}/>
            </div>
        </>
    )
};

export default ProductList;