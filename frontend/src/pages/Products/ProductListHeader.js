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
    }
    let filtered = 0;
    let all = 0;
    if(props.filteredProducts !== null && props.allProducts !== null){
        filtered = props.filteredProducts.length;
        all = props.allProducts.length;
    }
    return(
        <div className="product-header">
            <div className="search">
                <input type="text" name='filter' className='search-input' onChange={props.filterByName}/>
                <p className='results'>Finded {filtered} of {all}</p>
            </div>
            <div className="sort">
                <IconRadio inputData={props.sort} change={props.sortHandler}/>
            </div>
        </div>
    );
}

export default ProductListHeader;