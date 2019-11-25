import React, {Component} from 'react';
import ProductItem from './ProductItem';
import ProductPage from './ProductPage'
import Spinner from '../../components/Spinner/Spinner';
import Notif from '../../components/Notification/Notif';
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
    deleteProduct=async(id)=>{
        const formData = new FormData();
        formData.append('id', id)
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
                    {!this.state.loading && !this.state.showSingleProduct &&
                        this.state.products
                    }
                    {!this.state.loading && this.state.showSingleProduct && <ProductPage return={this.closeProduct} product={this.state.singleProduct}/>}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default ProductsList;