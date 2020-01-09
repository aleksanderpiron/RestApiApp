import React, {Component} from 'react';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import {Link} from 'react-router-dom';

class ProductPage extends Component{
    state={
        product:null,
        loading:true
    }
    getSingleProduct=async(id)=>{
        const res = await fetch('http://localhost:8080/products/'+id);
        const product = await res.json();
        this.setState({
            product,
            loading:false
        })
    }
    UNSAFE_componentWillMount=()=>[
        this.getSingleProduct(this.props.productId)
    ]
    render(){
            const product = this.state.product;
            return(
                <div className="product-page">
                    {this.state.loading?<Spinner />:
                    <>
                        <div className="img"><img src={'http://localhost:8080'+this.state.product.imageUrl} alt=""/></div>
                        <div className="text">
                            <Link className="return" to='/products'><Icon type='arrow'/> <span>Return</span></Link>
                            <p className="name">{product.name}</p>
                            <p className="desc">{product.description}</p>
                            <p className="price">{product.price} zł</p>
                            <Button type="primary" label='Add to cart' click={()=>{this.props.addToCartHandler(product._id)}}/>
                        </div>
                    </>
                    }
                </div>
        )
    }
}

export default ProductPage;