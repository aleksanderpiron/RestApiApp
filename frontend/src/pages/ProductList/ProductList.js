import React, {Component} from 'react';
import ProductItem from './ProductItem';
import ProductPage from './ProductPage';
import ProductForm from '../../components/Forms/ProductForm';
import Spinner from '../../components/Spinner/Spinner';
import {Route, Switch} from 'react-router-dom';
import posed, {PoseGroup} from 'react-pose';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';
import './ProductList.css';

class ProductsList extends Component{
    state = {
        products:null,
        singleProduct:null,
        showSingleProduct:false,
        addProduct:false,
        loading:true,
        itemLoading:false,
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
            addToCart={()=>{this.addToCart(prod._id)}}
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
    addToCart=async(prodId)=>{
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
        if(res.status === 200){
            this.props.refreshCartWidget();
        }
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
    // UNSAFE_componentWillReceiveProps=()=>{
    //     this.getProducts();
    // }
    render(){
        const RouteContainer = posed.div({
            enter: {opacity: 1, delay: 0, beforeChildren: true, transition: { duration: 300, ease: 'easeIn' } },
            exit: {opacity: 0, transition: { duration: 300 } }
        });
        const ProductListPosed = posed.div({
            enter: {staggerChildren: 100},
            exit: {}
        })
        const ProductListItem = posed.div({
            enter: {opacity:1},
            exit: {opacity: 0}
        })
        return(
            <Route render={({location})=>(
                <div className="page">
                {this.state.loading && <Spinner />}
                <PoseGroup>
                    <RouteContainer key={location.key}>
                        <Switch location={location}>
                            <Route key='ProductList' exact path="/products">
                                <ProductListPosed pose='enter' className='product-list'>
                                    {this.state.products}
                                </ProductListPosed>
                            </Route>
                            <Route key='ProductPage' exact path="/products/product/:productId" render={(props)=>
                                <ProductPage productId={props.match.params.productId}/>
                            }/>
                            <Route key='ProductFormAdd' exact path="/products/add-product/" render={()=>
                                <ProductForm pushNotif={this.props.pushNotif}/>
                            }/>
                            <Route key='ProductFormEdit' path="/products/edit-product/:productId" render={(props)=>
                                <ProductForm pushNotif={this.props.pushNotif} edit productId={props.match.params.productId}/>
                            }/>
                        </Switch>
                    </RouteContainer>
                </PoseGroup>
            </div>
            )}/>
        )
    }
}

export default ProductsList;