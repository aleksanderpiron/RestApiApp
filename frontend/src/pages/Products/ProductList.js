import React from 'react';
import ProductItem from './ProductItem';
import Spinner from '../../components/Spinner/Spinner';
import IconRadio from '../../components/Inputs/IconRadio';
import Pagination from '../../components/Pagination/Pagination';

const ProductList=(props)=>{
    let resultNumber;
    if(props.products === null){
        resultNumber = 0;
    }else{
        resultNumber = props.products.length;
    }
    let rederedItems;
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
                    <p className='results'>Found {resultNumber} products</p>
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
                <Pagination pageNumber={2} currentPage={2}/>
            </div>
        </>
    )
};

export default ProductList;