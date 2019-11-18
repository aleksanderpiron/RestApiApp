import React, {Component} from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import AddProduct from './pages/AddProduct/AddProduct';
import ProductList from './pages/ProductList/ProductList';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';


class App extends Component {
  state={
    currentPage:'ProductList',
  };
  switchPageTo=(target)=>{
    this.setState({
      currentPage:target
    })
  }
  render(){
    return (
      <div className="App">
        <Nav switchPageTo={this.switchPageTo} currentPage={this.state.currentPage}/>
        <ReactCSSTransitionGroup component="div" className="pages" transitionEnterTimeout={400} transitionLeaveTimeout={400} transitionName="page-switch">
          {this.state.currentPage === 'AddProduct' && <AddProduct />}
          {this.state.currentPage === 'ProductList' && <ProductList />}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
