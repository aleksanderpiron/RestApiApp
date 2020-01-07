import React, {Component} from 'react';
import ProductList from './ProductList';
import ProductPage from './ProductPage';
import ProductForm from '../../components/Forms/ProductForm';
import { addToCart } from '../../components/Cart/CartFunctions';
import { AnimatedRoute, AnimatedSwitch } from '../../components/Anims/AnimatedRouter';
import './ProductList.css';

class Products extends Component{
    state = {
        products:[],
        itemLoading:false,
        loading:true,
        pagiCurrent:1,
        searchValue:'',
        sortBy:{
            value:'-creationDate',
            options:[
                {
                    icon:'alphabet',
                    label:'name'
                },
                {
                    icon:'price',
                    label:'price'
                },
                {
                    icon:'calendar',
                    label:'-creationDate'
                },
            ]
        }
    }
    searchTimeout;
    getProducts=async(limit, search = false)=>{
        this.setState({
            loading:true
        });
        const skip = (this.state.pagiCurrent-1) * 12;
        let url = `//localhost:8080/products?skip=${skip}&limit=${limit}&sort=${this.state.sortBy.value}`;
        if(search){
            url += `&search=${this.state.searchValue}`
        }
        const res = await fetch(url, {
            headers:{
                "Authorization": localStorage.getItem('authToken')
            }
        }),
        data = await res.json();
        this.setState({
            products:data,
            loading:false
        })
    };
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
            this.props.pushNotif('error', 'Something wrong with server', 5000);
        };
    }
    addToCartHandler=async(prodId)=>{
        const result = await addToCart(prodId);
        if(result){
            this.props.pushNotif('info', 'Product was successfuly added to cart!', 3000);
        }
    }
    setPagiCurrent=(number)=>{
        this.setState({
            pagiCurrent:number
        }, ()=>{
            this.getProducts(12);
        });
    }
    filterByName=(e)=>{
        clearTimeout(this.searchTimeout);
        const {value} = e.target;
        this.searchTimeout = setTimeout(()=>{
            this.setState({
                searchValue:value
            }, ()=>{
                this.getProducts(12, true);
            })
        }, 1000)
        // const filteredProducts = this.state.products.filter(prod=>{
        //     return prod.name.toUpperCase().includes(value.toUpperCase());
        // });
    }
    sortHandler=(e)=>{
        const newSortBy = this.state.sortBy;
        newSortBy.value = e.target.value;
        this.setState({
            sortBy:newSortBy
        })
        this.getProducts(12);
    }
    UNSAFE_componentWillMount=()=>{
        this.getProducts(12);
    }
    UNSAFE_componentWillReceiveProps=()=>{
        this.getProducts(12);
    }
    render(){
        return(
            <AnimatedSwitch animationClassName="page-switch" animationTimeout={300} className="page">
                <AnimatedRoute exact path="/products" render={()=>
                    <ProductList
                    products={this.state.products}
                    filterByName={this.filterByName}
                    sort={this.state.sortBy} 
                    sortHandler={this.sortHandler}
                    setPagiCurrent={this.setPagiCurrent}
                    pagiCurrent={this.state.pagiCurrent}/>
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

export default Products;