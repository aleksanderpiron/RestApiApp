import React from 'react';
import ProductsList from './ProductsList';
import AddProductForm from '../../components/Forms/AddProductForm';

const Products =()=>{
    return(
        <div className="page products">
            <ProductsList />
            <AddProductForm />
        </div>
    )
}

export default Products;