import React, {Component} from 'react';
import ProductsList from './ProductsList';
import AddProductForm from '../../components/Forms/AddProductForm';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

const Products=()=>{
     return(
         <div className="page products" timeout={500} transitionName="notif">
             {this.state.pages.productsList && <ProductsList />}
             {this.state.pages.addProduct && <AddProductForm />}
             <button onClick={()=>{this.switchPageTo('addProduct')}}>Switch</button>
         </div>
    )
}

export default Products;