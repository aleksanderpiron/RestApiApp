import React from 'react';
import AddProductForm from '../../components/Forms/AddProductForm';

const Products=(props)=>{
     return(
         <div className="page">
             <AddProductForm pushNotif={props.pushNotif}/>
         </div>
    )
}

export default Products;