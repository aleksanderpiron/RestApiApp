import React from 'react';
import ProductItem from './ProductItem';
import IconRadio from '../../components/Inputs/IconRadio';
import Pagination from '../../components/Pagination/Pagination';
import Spinner from '../../components/Spinner/Spinner'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProductList=(props)=>{
    let rederedItems,
    pagiLength = Math.ceil(props.allItemsCount/12),
    listStyles = {height:props.listDimentions.height+'px'};
    if(props.products !== null && props.products.length>0){
        rederedItems = props.products.map((prod, index)=>{
            return <CSSTransition
            key={prod._id}
            classNames='fade'
            timeout={400}
            unmountOnExit
            >
                <ProductItem
                index={index}
                addToCart={props.addToCartHandler}
                delete={props.deleteProduct}
                itemData={prod}
                colsNumber={props.listDimentions.cols}/>
            </CSSTransition>
        });
    }else{
        rederedItems = <CSSTransition
        classNames='fade'
        timeout={400}
        unmountOnExit
        >
            <div className="product-not-found">
                <p>It's looks like we don't have fruit that matches for <span>{props.searchedValue}</span> </p>
                <p>Please try with different value</p>
            </div>
        </CSSTransition>
    }
    return(
        <>
            <div className="product-header">
                <div className="search">
                    <input type="text" name='filter' className='search-input' onChange={props.filterByName}/>
                    <p className='results'>Found {props.allItemsCount} products</p>
                </div>
                <div className="sort">
                    <IconRadio name='sortChoose' inputData={props.sort} change={props.sortHandler}/>
                </div>
            </div>
            <TransitionGroup className='product-list' style={listStyles}>
                {props.loading?<CSSTransition
                key='loading'
                classNames='fade'
                timeout={400}
                unmountOnExit
            ><Spinner/></CSSTransition>:rederedItems}
            </TransitionGroup>
            <div className="product-footer">
                <Pagination click={props.setPagiCurrent} length={pagiLength} current={props.pagiCurrent}/>
            </div>
        </>
    )
};

export default ProductList;