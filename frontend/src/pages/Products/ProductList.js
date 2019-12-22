import React, {Component} from 'react';
import ProductItem from './ProductItem';
import ProductPage from './ProductPage';
import ProductForm from '../../components/Forms/ProductForm';
import Spinner from '../../components/Spinner/Spinner';
import { addToCart } from '../../components/Cart/CartFunctions';
import IconRadio from '../../components/Inputs/IconRadio';
import Input from '../../components/Inputs/Input';
import {AnimatedRoute, AnimatedSwitch} from '../../components/Anims/AnimatedRouter';
import './ProductList.css';

class ProductsList extends Component{
    state = {
        products:null,
        filteredProducts:null,
        singleProduct:null,
        showSingleProduct:false,
        addProduct:false,
        loading:true,
        itemLoading:false,
        sortBy:{
            value:'',
            options:[
                {
                    label:'Alphabet',
                    icon:'cart'
                },
                {
                    label:'Price',
                    icon:'cart'
                },
            ]
        }
    }
    getProducts=async(e)=>{
        const res = await fetch('http://localhost:8080/products', {
            headers:{
                "Authorization": localStorage.getItem('authToken')
            }
        });
        const data = await res.json();
        
        this.setState({
            products:data,
            loading:false
        })
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
    addToCartHandler=async(prodId)=>{
        const result = await addToCart(prodId);
        if(result){
            this.props.pushNotif('info', 'Product was successfuly added to cart!', 3000);
        }
    }
    closeProduct=()=>{
        this.setState({
            showSingleProduct:false
        })
    }
    filterByName=(e)=>{
        const {value} = e.target;
        const filteredProducts = this.state.products.filter(prod=>{
            return prod.name.toUpperCase().includes(value.toUpperCase());
        });
        this.setState({
            filteredProducts
        })
    }
    mapProducts=(products)=>{
        const productsArray = products.map((prod, index)=>{
            return <ProductItem
            key={`ProductItem_${index}`}
            addToCart={()=>{this.addToCartHandler(prod._id)}}
            getSingleProduct={this.getSingleProduct}
            name={prod.name}
            price={prod.price}
            imageUrl={prod.imageUrl!==null?'http://localhost:8080'+prod.imageUrl:null}
            description={prod.description}
            creationDate={prod.creationDate}
            createdBy={prod.createdBy}
            delete={this.deleteProduct}
            id={prod._id}/>
        });
        return productsArray;
    }
    UNSAFE_componentWillMount=()=>{
        this.getProducts();
    }
    UNSAFE_componentWillReceiveProps=()=>{
        this.getProducts();
    }
    render(){
        let productsArray;
        if(this.state.filteredProducts !== null){
            productsArray = this.mapProducts(this.state.filteredProducts);
        }
        else if(this.state.products !== null){
            productsArray = this.mapProducts(this.state.products);
        }
        return(
            <AnimatedSwitch animationClassName="page-switch" animationTimeout={300} className="page">
                <AnimatedRoute exact path="/products" render={()=>
                    <>
                        <div className='product-header'>
                            <div className="search">
                                <label>
                                    <input type='text' onChange={this.filterByName} name='filter' className='search-input'/>
                                </label>
                            </div>
                            <div className="sort">
                                {/* <IconRadio
                                inputData={this.state.sortBy}
                                change={this.textInputHandler}
                                name='sortby'
                                label='Sort by:'/> */}
                            </div>
                        </div>
                        <div className='product-list'>
                            {this.state.loading?<Spinner/>:productsArray}
                        </div>
                    </>
                }/>
                <AnimatedRoute exact path="/products/product/:productId" render={(props)=>
                    <ProductPage productId={props.match.params.productId}/>
                }/>
                <AnimatedRoute exact path="/products/add-product/" render={()=>
                    <ProductForm pushNotif={this.props.pushNotif}/>
                }/>
                <AnimatedRoute key='ProductFormEdit' path="/products/edit-product/:productId" render={(props)=>
                    <ProductForm delete={this.deleteProduct} pushNotif={this.props.pushNotif} edit productId={props.match.params.productId}/>
                }/>
            </AnimatedSwitch>
        )
    }
}

export default ProductsList;