import React, {Component} from 'react';
import ProductItem from './ProductItem';

class ProductsList extends Component{
    state = {
        products:null
    }
    async getProducts(){
        const res = await fetch('https://api.punkapi.com/v2/beers');
        const data = await res.json();
        const productsArray = data.map(prod=>{
            return <ProductItem name={prod.name} id={prod.id}/>
        })
        this.setState({products:productsArray})
    }

    componentDidMount(){
        this.getProducts();
    }
    render(){
        return(
            <div>
                {this.state.products}
            </div>
        )
    }
}

export default ProductsList;