import React, {Component} from 'react';
import ProductsList from './ProductsList';
import AddProductForm from '../../components/Forms/AddProductForm';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

class Products extends Component{
    state={
        pages:{
            currentPage:'productsList',
            productsList:true,
            addProduct:false
        }
    }
    switchPageTo=(target)=>{
        this.setState({
            pages.currentPage:target
        })
        
    }
    render(){
        console.log(this.state.pages);
        return(
            <ReactCSSTransitionGroup component='div' className="page products" timeout={500} transitionName="notif">
                {this.state.pages.productsList && <ProductsList />}
                {this.state.pages.addProduct && <AddProductForm />}
                <button onClick={()=>{this.switchPageTo('addProduct')}}>Switch</button>
            </ReactCSSTransitionGroup>
       )
    }
}

export default Products;