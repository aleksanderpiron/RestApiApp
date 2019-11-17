import React, {Component} from 'react';
import ProductItem from './ProductItem';
import Spinner from '../../components/Spinner/Spinner';
import './Products.css';

class ProductsList extends Component{
    state = {
        products:null,
        loading:true
    }
    async getProducts(){
        const res = await fetch('http://localhost:8080/products');
        const data = await res.json();
        const productsArray = data.map(prod=>{
            return <ProductItem
            name={prod.name}
            price={prod.price}
            imageUrl={'http://localhost:8080'+prod.imageUrl}
            description={prod.description}
            creationDate={prod.creationDate}
            createdBy={prod.createdBy}
            id={prod._id}/>
        })
        this.setState({
            products:productsArray,
            loading:false
        })
    }

    componentDidMount(){
        this.getProducts();
    }
    render(){
        return(
            <div className="product-list">
                {this.state.loading && <Spinner />}
                {!this.state.loading && this.state.products}
            </div>
        )
    }
}

export default ProductsList;