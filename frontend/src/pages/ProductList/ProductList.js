import React, {Component} from 'react';
import ProductItem from './ProductItem';
import ProductPage from './ProductPage';
import ProductForm from '../../components/Forms/ProductForm';
import Spinner from '../../components/Spinner/Spinner';
import {Route} from 'react-router-dom';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import './ProductList.css';

class ProductsList extends Component{
    state = {
        products:null,
        singleProduct:null,
        showSingleProduct:false,
        addProduct:false,
        loading:true
    }
    getProducts=async(e)=>{
        const res = await fetch('http://localhost:8080/products', {
            headers:{
                "Authorization": localStorage.getItem('authToken')
            }
        });
        const data = await res.json();
        const productsArray = data.map((prod, index)=>{
            return <ProductItem
            key={`ProductItem_${index}`}
            addToCart={(e)=>{this.addToCart(e, prod._id)}}
            getSingleProduct={this.getSingleProduct}
            name={prod.name}
            price={prod.price}
            imageUrl={prod.imageUrl!==null?'http://localhost:8080'+prod.imageUrl:null}
            description={prod.description}
            creationDate={prod.creationDate}
            createdBy={prod.createdBy}
            delete={this.deleteProduct}
            id={prod._id}/>
        })
        this.setState({
            products:productsArray,
            loading:false
        })
    }
    addToCart=async(e, prodId)=>{
        console.log(this);
        e.target.setAttribute('loading', true);
        const formData = new FormData();
        formData.append('userId', localStorage.getItem('userId'));
        formData.append('qty', 1);
        formData.append('prodId', prodId);
        const res = await fetch('http://localhost:8080/add-to-cart', {
            headers:{
                "Authorization": localStorage.getItem('authToken')
            },
            method:'POST',
            body:formData
        });
        console.log(res);
    }
    deleteProduct=async(id)=>{
        const formData = new FormData();
        formData.append('id', id);
        const url = '//localhost:8080/delete-product';
        const res = await fetch(url, {
            method:'POST',
            body:formData
        })
        if(res.status === 200){
            this.getProducts();
            this.props.pushNotif('success', 'Product was successfuly deleted!', 5000)
        }
        else if(res.status === 500){
            console.log('error')
        }
    }
    closeProduct=()=>{
        this.setState({
            showSingleProduct:false
        })
    }
    UNSAFE_componentWillMount=()=>{
        this.getProducts();
    }
    UNSAFE_componentWillReceiveProps=()=>{
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
                    <Route exact path="/products">
                        {this.state.products}
                    </Route>
                    <Route exact path="/products/product/:productId" render={(props)=>
                        <ProductPage productId={props.match.params.productId}/>
                    }/>
                    <Route exact path="/products/add-product/" render={()=>
                        <ProductForm pushNotif={this.props.pushNotif}/>
                    }/>
                    <Route path="/products/edit-product/:productId" render={(props)=>
                        <ProductForm pushNotif={this.props.pushNotif} edit productId={props.match.params.productId}/>
                    }/>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default ProductsList;