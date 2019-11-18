import React, {Component} from 'react';
import ProductItem from './ProductItem';
import ProductPage from './ProductPage'
import Spinner from '../../components/Spinner/Spinner';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import './ProductList.css';

class ProductsList extends Component{
    state = {
        products:null,
        singleProduct:null,
        showSingleProduct:false,
        loading:true
    }
    getProducts=async()=>{
        const res = await fetch('http://localhost:8080/products');
        const data = await res.json();
        const productsArray = data.map(prod=>{
            return <ProductItem
            getSingleProduct={this.getSingleProduct}
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
    getSingleProduct=async(id)=>{
        this.setState({
            loading:true
        })
        const res = await fetch('http://localhost:8080/products/'+id);
        const data = await res.json();
        this.setState({
            loading:false,
            singleProduct:data,
            showSingleProduct:true
        })
    }
    closeProduct=()=>{
        this.setState({
            showSingleProduct:false
        })
    }
    componentDidMount(){
        this.getProducts();
    }
    render(){
        return(
            <div className="page">
                {this.state.loading && <Spinner />}
                <ReactCSSTransitionGroup
                component='div'
                className='product-list'
                transitionName='page-switch'
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}>
                    {!this.state.loading && !this.state.showSingleProduct && <div className="product-list">{this.state.products}</div>}
                    {!this.state.loading && this.state.showSingleProduct && <ProductPage return={this.closeProduct} product={this.state.singleProduct}/>}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default ProductsList;