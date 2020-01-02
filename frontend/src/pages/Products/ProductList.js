import React, {Component} from 'react';
import ProductItem from './ProductItem';
import ProductPage from './ProductPage';
import ProductForm from '../../components/Forms/ProductForm';
import Spinner from '../../components/Spinner/Spinner';
import ProductListHeader from './ProductListHeader';
import { addToCart } from '../../components/Cart/CartFunctions';
import {AnimatedRoute, AnimatedSwitch} from '../../components/Anims/AnimatedRouter';
import './ProductList.css';

class ProductsList extends Component{
    state = {
        products:null,
        productsToShow:null,
        singleProduct:null,
        addProduct:false,
        itemLoading:false,
        loading:true,
        showSingleProduct:false,
        sortBy:{
            value:'date',
            options:[
                {
                    icon:'alphabet',
                    label:'alphabet'
                },
                {
                    icon:'price',
                    label:'price'
                },
                {
                    icon:'calendar',
                    label:'date'
                },
            ]
        }
    }
    getProducts=async()=>{
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
        this.mapProducts(this.state.products)
    }
    deleteProduct=async(id)=>{
        const formData = new FormData();
        formData.append('id', id);
        const url = '//localhost:8080/delete-product';
        const res = await fetch(url, {
            method:'POST',
            body:formData
        });
        if(res.status === 200){
            this.getProducts();
            this.props.pushNotif('success', 'Product was successfuly deleted!', 5000);
        }
        else if(res.status === 500){
            console.log('error')
        };
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
        this.mapProducts(filteredProducts);
    }
    sortHandler=(target)=>{
        const newSortBy = this.state.sortBy;
        newSortBy.value = target;
        this.setState({
            sortBy:newSortBy
        })
        this.mapProducts(this.state.products);
    }
    mapProducts=(products)=>{
        switch(this.state.sortBy.value){
            case 'alphabet':
                products.sort((a, b)=>{
                    if(a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
                    if(a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
                    return 0;
                });
            break;
            case 'price':
                products.sort((a, b)=>{
                    if(parseFloat(a.price) < parseFloat(b.price)) {return -1;}
                    if(parseFloat(a.price) > parseFloat(b.price)) {return 1;}
                    return 0;
                });
            break;
            case 'date':
                products.sort((a, b)=>{
                    if(Date.parse(a.creationDate) < Date.parse(b.creationDate)) {return 1;}
                    if(Date.parse(a.creationDate) > Date.parse(b.creationDate)) {return -1;}
                    return 0;
                });
            break;
        }
        const productsArray = products.map((prod, index)=>{
            return <ProductItem
            key={`ProductItem_${index}`}
            addToCart={this.addToCartHandler}
            getSingleProduct={this.getSingleProduct}
            itemData={prod}
            delete={this.deleteProduct}/>
        });
        this.setState({
            productsToShow:productsArray
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
            <AnimatedSwitch animationClassName="page-switch" animationTimeout={300} className="page">
                <AnimatedRoute exact path="/products" render={()=>
                    <>
                        <ProductListHeader filterByName={this.filterByName} sort={this.state.sortBy} sortHandler={this.sortHandler} finded={this.state.productsToShow}/>
                        <div className='product-list'>
                            {this.state.loading?<Spinner/>:this.state.productsToShow}
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