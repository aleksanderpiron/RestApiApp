import React from 'react';
import IconRadio from '../../components/Inputs/IconRadio';

const ProductListHeader=(props)=>{
    const sortItems = {
        options:[
            {
                icon:'alphabet'
            },
            {
                icon:'price'
            },
            {
                icon:'calendar'
            },
        ]
    };
    let resultNumber;
    if(props.finded === null){
        resultNumber = 0;
    }else{
        resultNumber = props.finded.length;
    }
    return(
        <div className="product-header">
            <div className="search">
                <input type="text" name='filter' className='search-input' onChange={props.filterByName}/>
                <p className='results'>Found {resultNumber} products</p>
            </div>
            <div className="sort">
                <IconRadio inputData={props.sort} change={props.sortHandler}/>
            </div>
        </div>
    );
}

export default ProductListHeader;